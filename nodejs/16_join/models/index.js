'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
db.Student = require('./Student')(sequelize);
db.Classes = require('./Classes')(sequelize);
db.StudentProfile = require('./StudentProfile')(sequelize);

//관계형성
// 1:1 학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1대 다  학생과 강의
db.Student.hasMany(db.Classes, {foreignKey: 'student_id'}); //외래키 표기 생략가능 알아서 매칭
db.Classes.belongsTo(db.Student, {foreignKey: 'student_id'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;