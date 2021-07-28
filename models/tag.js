'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Item, {
        through: models.ItemTag
      })
    }
  };
  Tag.init({
    tagName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Tag name can not be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};