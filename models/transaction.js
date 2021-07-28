'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Username can not be empty`
        },
        min: {
          args: [0],
          msg: 'Quantity should be more than 0'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Username can not be empty`
        }
      }
    },
    ItemId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Username can not be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};