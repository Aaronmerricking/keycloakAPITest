/**Displays the selector used and the text content as a function that also
 * depends on the selector used.
 * @param {any} selector
 * @param {any} result
 */
var f = function (selector) {
	// Returns a selector
	return function (result) {
		var curtext = result.value;
		console.log("\tText for " + selector + ":\t" + curtext);
	}
}

export default class UtilityText {
	/**Determine the text and if the selected element contains the text.
	 * @param {any} selector
	 * @param {any} expected
	 * @param {any} message
	 */
	static containsText(browser, selector, expected, message, settings = {}) {
		if (settings["showtext"] == true)
			browser.getText('css selector', selector, f(selector));
		browser.assert.containsText(selector, expected, message)
	}

	static waitForContainsText(browser, selector, timer, expected, message, settings = {}) {
		browser.waitForElementVisible(selector, timer, message)
		containsText(browser, selector, expected, message, settings);
	}

	static performRequest(browser, request, options, f) {

    }
}