class DiscordException extends Error {}

class ClientException extends DiscordException {}

class NoMoreItems extends DiscordException {}

class GatewayNotFound extends DiscordException {
	constructor() {
		super().message = "The gateway to connect to discord was not found."
	}
}

/**
 * @param {Object} d
 * @param {String} key
 * 
 * @return {Object}
 */
function _flatten_error_dict(d, key) {

}

exports.DiscordException = DiscordException
exports.ClientException = ClientException
exports.NoMoreItems = NoMoreItems
exports.GatewayNotFound = GatewayNotFound