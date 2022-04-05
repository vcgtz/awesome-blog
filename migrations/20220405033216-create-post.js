module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brief: {
        allowNull: false,
        type: Sequelize.TEXT('tiny'),
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      published: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  },
};
