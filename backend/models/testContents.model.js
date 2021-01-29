const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = class Posting extends Model {
    static init(sequelize){
        return super.init({
            id : {
              type: Sequelize.INTEGER,
              primaryKey : true,
              autoIncrement: true,  
            },
            title:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            contents: {
                type: Sequelize.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            timestamp: false,
            modelName: "Posting",
            tableName: "Postings",
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){}
}