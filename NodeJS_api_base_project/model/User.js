const Sequelize = require("sequelize");
const sequelize = require("../config/app.sequelize.db");
const appConstants = require("../config/app.constants");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        defaultValue: 'm',
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    profile_image: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            if (this.getDataValue('profile_image') != '' && this.getDataValue('profile_image') != null) {
                return appConstants.HOST + this.getDataValue('profile_image');
            } else {
                return appConstants.HOST + appConstants.DEFAULT_IMAGE_PATH;
            }
        }
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
    tableName: "user",
    freezeTableName: true
});

module.exports = User;