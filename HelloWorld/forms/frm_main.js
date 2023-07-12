/**
 * @type {String}
 * @properties={typeid:35,uuid:"BF6A38FD-FCB6-4CBF-A95E-164CFD7A1EE6"}
 */
var nameInput = "World";

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"29AA8296-B42F-4C55-9A4D-ECF018D23C87"}
 */
function onActionSayHello(event) {
	plugins.dialogs.showInfoDialog("Hello!", "Hello, " + nameInput + "!");
}
