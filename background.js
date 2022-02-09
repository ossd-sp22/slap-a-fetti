// this is the background code...

// listen for our browserAction to be clicked
browser.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "confetti.js" file & execute it
	browser.tabs.executeScript(tab.id, {
		file: 'confetti.js'
	});
});