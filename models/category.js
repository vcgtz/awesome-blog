const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }

  Category.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    slug: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    timestamps: true,
    tableName: 'categories',
    modelName: 'Category',
  });

  Category.associate = (models) => {
    Category.hasMany(models.Post, {
      foreignKey: 'categoryId',
    });
  };

  return Category;
};
