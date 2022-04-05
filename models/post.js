const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
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

  Post.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    brief: {
      allowNull: false,
      type: DataTypes.TEXT('tiny'),
    },
    slug: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    published: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
  }, {
    sequelize,
    timestamps: true,
    tableName: 'posts',
    modelName: 'Post',
  });

  Post.associate = (models) => {
    Post.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
    });

    Post.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return Post;
};
