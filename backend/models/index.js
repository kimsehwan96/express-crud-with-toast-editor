const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const {development,production,test} = require('../config/config');
const Posting = require('./testContents.model');
const sequelize = new Sequelize(development.database,development.username,development.password,development);

let db = [];
db.sequelize = sequelize;

db.Posting = Posting;
Posting.init(sequelize);
Posting.associate(db);


module.exports = db;
