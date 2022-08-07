/* middlewares/SchemaValidator.js */
const appMessages = require('../config/app.message');
const appConstants = require('../config/app.constants');

module.exports = (schema, useJoiError = true) => {
    // boolean: defaults to false
    const _useJoiError = _.isBoolean(useJoiError) && useJoiError;
    // enabled HTTP methods for request data validation
    const _supportedMethods = ['post', 'put', 'get', 'delete'];
    // return the validation middleware
    return (req, res, next) => {
        //const route = req.route.path;
        const method = req.method.toLowerCase();
        if (_.includes(_supportedMethods, method) && _.has(Schemas, schema)) {
            // get schema for the current route
            const _schema = _.get(Schemas, schema);
            if (_schema) {
                // Validate req.body using the schema and validation options
                var validation = _schema.validate(req.body, { allowUnknown: true });
                if (validation.error) {
                    // Joi Error
                    const JoiError = {
                        status: appConstants.ERROR_STATUS_MESSAGE,
                        status_code: appConstants.INSUFFICIENT_DATA_STATUS,
                        message: appMessages.ERROR_INSUFFICIENT_DATA,
                        error: {
                            original: validation.error._object,
                            // fetch only message and type from each error
                            details: _.map(validation.error.details, ({
                                message,
                                type
                            }) => ({
                                message: message.replace(/['"]/g, ''),
                                type
                            }))
                        }
                    };
                    // Custom Error
                    const CustomError = {
                        status: appConstants.ERROR_STATUS_MESSAGE,
                        status_code: appConstants.INSUFFICIENT_DATA_STATUS,
                        message: appMessages.ERROR_INSUFFICIENT_DATA
                    };
                    // Send back the JSON error response
                    return res.status(400).json(_useJoiError ? JoiError : CustomError);
                } else {
                    // Replace req.body with the data after Joi validation
                    return next();
                }
            }
        }
        next();
    };
};