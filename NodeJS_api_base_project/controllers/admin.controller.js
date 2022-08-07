const appConstants = require("../config/app.constants");
const appMessages = require("../config/app.message");
const userModal = require("../model/User");
const oauth = require("../middlewares/oauth");
const { Sequelize, NUMBER } = require("sequelize");
const Op = Sequelize.Op;


const login = async(req, res, next) => {
    try {
        var body = req.body;
        var data = await userModal.findOne({ where: { user_name: body.user_name } });
        if (data) {
            const result = compareSync(body.password, data.password);
            data = _.pick(data, ["id", "first_name", "last_name", "user_name", "email", "number", "role","profile_image"]);
            data.token = await oauth.generateToken(data.id, appConstants.USER_ROLE_ADMIN);
            if (result) {
                return res.status(appConstants.SUCCESS_STATUS).json({
                    status: appConstants.SUCCESS_STATUS_MESSAGE,
                    status_code: appConstants.SUCCESS_STATUS,
                    message: appMessages.GET_DATA_SUCCESS,
                    data: data
                });
            }
        }
        return res.status(appConstants.VALIDATION_ERROR_STATUS).json({
            status: appConstants.ERROR_STATUS_MESSAGE,
            status_code: appConstants.VALIDATION_ERROR_STATUS,
            message: appMessages.WRONG_CREDENTIALS
        });
    } catch (err) {
        return next(err);
    }
};






module.exports = {
    login
};