'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.User, {
        through: models.Transaction
      }),
      Item.belongsToMany(models.Tag, {
        through: models.ItemTag
      })
    }
  };
  Item.init({
    itemName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Item name can not be empty`
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Price name can not be empty`
        },
        min: {
          args: [0],
          msg: `Price should be more than 0`
        }
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Item name can not be empty`
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Item name can not be empty`
        },
        min: {
          args: [0],
          msg: `Quantity should be more than 0`
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Picture name can not be empty`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Description name can not be empty`
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `URL name can not be empty`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `UserId name can not be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};