chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => { // creating a listener
	/**
	 * Making sure that the content script is injected into the bab b/4 sending the message.
		 * Check if tab is fully loaded (changeInfo.status === 'completes')
		 * Uses `chrome.tabs.query()` to get the tab object
		 * Sends message to the content scrip using `chrome.tabs.sendMessage`
	 */
	if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const queryParameters = tab.url.split('?')[1];
			const urlParameters = new URLSearchParams(queryParameters);

			console.log('THE TURTLE IS TALKING');
			console.log('queryParameters', queryParameters);
			console.log('urlParameters', urlParameters);

			chrome.tabs.sendMessage(tabs[0].id, {
				type: 'NEW',
				videoId: urlParameters.get('v'),
			});
		});
	}
});

//chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//	if (
//		changeInfo.status === 'complete' &&
//		tab.url &&
//		tab.url.includes('youtube.com/watch')
//	) {
//		const queryParameters = tab.url.split('?')[1];
//		const urlParameters = new URLSearchParams(queryParameters);
//		console.log('THE TURTLE IS TALKING');
//		console.log('queryParameters', queryParameters);
//		console.log('urlParameters', urlParameters);
//
//		chrome.tabs.sendMessage(tabId, {
//			type: 'NEW',
//			videoId: urlParameters.get('v'),
//		});
//	}
//});

//chrome.tabs.onUpdated.addListener((tabId, tab) => {
//	if (tab.url && tab.url.includes('youtube.com/watch')) {
//		const queryParameters = tab.url.split('?')[1];
//		const urlParameters = new URLSearchParams(queryParameters); // interface to work w/ urls
//		console.log('THE TURTLE IS TALKING');
//		console.log(urlParameters);
//
//		chrome.tabs.sendMessage(tabId, {
//			// send message to content script
//			type: 'NEW',
//			videoId: urlParameters.get('v'),
//		});
//	}
//});
