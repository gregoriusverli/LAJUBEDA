'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Item, {
        through: models.Transaction
      })
    }
    userFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Username can not be empty`
        }
      }
    },
    lastName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Username can not be empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Password can not be empty`
        }, 
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Phone number can not be empty`
        },
        isInt: {
          msg: `Phone number must be number`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Email can not be empty`
        }
      }
    },
    homeAddress: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Home address can not be empty`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Role can not be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instance, options) => {
        if(!instance.lastName) {
          instance.lastName = instance.firstName
        }
      }
    }
  });
  return User;
};