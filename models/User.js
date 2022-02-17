const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create User model
class User extends Model {
    //method to check password
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//create columns for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        username: {
        type: DataTypes.STRING,
        allowNull: false
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
        }
        },
    //enter hooks: {}  once controller files complete
    {
    hooks: {
        //set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
        },
    
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;
