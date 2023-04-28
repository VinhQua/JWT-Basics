const UnauthenticatedError = require('./unauthenticated')
const BadRequest = require('./bad-request')
const CustomAPIError = require('./custom-error')

module.exports = {
    UnauthenticatedError,
    BadRequest,
    CustomAPIError
}