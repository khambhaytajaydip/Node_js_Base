const jwt = require('jsonwebtoken');
const appConstants = require('../config/app.constants');
const appMessage = require('../config/app.messages');

const generateToken = (_id, role_id) => {
    try {
        let payload = {
            _id,
            role_id
        };
        let token = jwt.sign(payload, appConstants.JWT_SECRETS.SECRET_KEY);
        return Promise.resolve(token);
    } catch (err) {
        return Promise.reject(err);
    }
};

const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, appConstants.JWT_SECRETS.SECRET_KEY, (err, decoded) => {
                if (err) return reject(err);
                return resolve(decoded);
            });
        } catch (error) {
            return reject(error);
        }
    });
};



module.exports = {
    generateToken,
    decodeToken,
}