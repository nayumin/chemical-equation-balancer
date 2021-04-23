var addon = require('bindings')('addon.node')

exports.balance = (equation) => {
	return addon.balance(equation);
}
