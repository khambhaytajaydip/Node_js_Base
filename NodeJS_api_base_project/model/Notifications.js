const Sequelize = require("sequelize");
const sequelize = require("../config/app.sequelize.db");
const UserModel = require("./User");

const Notifications = sequelize.define("notification", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    freezeTableName:true,
    underscored: true
});


Notifications.belongsTo(UserModel, {
    foreignKey: 'user_id'
});

module.exports = Notifications;