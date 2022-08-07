const appConstants = {
    NO_REQUEST_FOUND_STATUS: 404,
    MONGODB_URI: process.env.MONGODB_URI_LOCAL,
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || "dev",

    JWT_SECRETS_SECRET_KEY: "yoursecreat TOKEN",

    //WEBSERVICES
    POSTMETHOD: 'POST',
    GETMETHOD: 'GET',
    JSON_CONTENT_TYPE: "application/json",

    HOST: process.env.HOST || "",
    AWS_HOST: process.env.AWS_HOST || "",

    // WEBSERVICE STATUS
    SUCCESS_STATUS: 200,
    UNAUTORIZED_ERROR_STATUS: 401,
    INSUFFICIENT_DATA_STATUS: 400,
    VALIDATION_ERROR_STATUS: 422,
    SERVICE_UNAVAILABLE_STATUS: 500,
    NO_DATA_FOUND_STATUS: 404,

    // WEBSERVICE STATUS MESSAGE
    ERROR_STATUS_MESSAGE: "error",
    SUCCESS_STATUS_MESSAGE: "success",

    // STATUS
    ACTIVE_STATUS: 1,
    INACTIVE_STATUS: 0,
    REVOKED_STATUS: 2,

    //Admin Details
    ADMIN_EMAIL:'khambhaytajaydip@gmail.com',


}
module.exports = appConstants;
