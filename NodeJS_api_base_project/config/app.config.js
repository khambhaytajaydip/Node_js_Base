const expressdata = require('express'),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

const cors = require('cors');
const routes = require('../routes');
const appMessages = require('../config/app.message');
const appConstant = require('../config/app.constants');
const httpStatusCode = require('../config/app.http.statuscode');

module.exports = (app, express) => {
    //Body Parser 
    app.use(expressdata.urlencoded({
        extended: false,
        limit: '80mb',
    }));

    app.use(expressdata.json({ limit: '80mb' }));
    app.use(cors());
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Expose-Headers", "Authorization, Set-Cookie");
        res.header("Access-Control-Allow-Headers", "Origin, Set-Cookie, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

    const options = {
        definition: {
            swagger: "2.0",
            info: {
                title: "NODE API ",
                version: "1.0.0",
                description: "API documentation.",
                contact: {
                    name: "NODE JS Test",
                    url: "https://testnode.com",
                    email: "",
                },
            },
            servers: [{
                url: "http://localhost:8080/",
            }],
            securityDefinitions: {
                JWT: {
                    type: "apiKey",
                    scheme: "bearer",
                    in: "header",
                    name: 'Authorization',
                    bearerFormat: "JWT"
                },
            },
            security: [{
                jwt: []
            }],
            produces: ["application/json"],
        },
        apis: ["./routes/v1/admin.routes.js"],
    };

    app.use('/apis', routes);

    const nodeJs = swaggerJsdoc(options);
    app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(nodeJs));

    //Error handler Express
    //TODo Not Found log system

    app.use((req, res, next) => {
        let err = new Error(httpStatusCode[appConstant.NO_REQUEST_FOUND_STATUS]);
        err.status = appConstant.NO_REQUEST_FOUND_STATUS;
        err.message = appMessages.ERROR_REQUEST_NOT_FOUND;
        next(err);
    });

    //Error handler Express
    //TODo Business logic for Error log system
    app.use((err, req, res, next) => {
        var err_status = err.status || 500;
        return res.status(err_status).json({
            status: httpStatusCode[err_status],
            status_code: err_status,
            error: err.message
        });
    });
};