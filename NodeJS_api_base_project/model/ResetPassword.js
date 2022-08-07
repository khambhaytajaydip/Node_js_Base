const Sequelize = require("sequelize");
const sequelize = require("../config/app.sequelize.db");

const ResetPassword = sequelize.define("reset_password", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    pwd_token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        field: "created_at"
    },
    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        field: "updated_at"
    }
}, {
    freezeTableName: true,
    underscored: true,
});

module.exports = ResetPassword;