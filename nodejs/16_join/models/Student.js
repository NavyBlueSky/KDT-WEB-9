// const { sequelize } = require(".");
const {DataTypes} = require('sequelize');

const studentModel = (sequelize) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: DataTypes.STRING(63), // allowNull이 true고 설정하나면 생략하여 이와 같이 표기가능
    });
    return Student;
}

module.exports = studentModel;