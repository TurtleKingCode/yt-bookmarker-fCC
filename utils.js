export async function getActiveTabURL() {
	const queryOptions = { active: true, currentWindow: true };
	const tabs = await chrome.tabs.query(queryOptions);

	return tabs[0];
}
//export async function getActiveTabURL() {
//	let queryOptions = { active: true, currentWindow: true };
//	let [tab] = await chrome.tabs.query(queryOptions);
//	return tab;
//}
