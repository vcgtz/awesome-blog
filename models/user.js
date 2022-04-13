const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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

  User.init({
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
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING(64),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    profileImage: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    timestamps: true,
    tableName: 'users',
    modelName: 'User',
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
    });
  };

  return User;
};
