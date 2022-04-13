'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Programación',
        description: 'Tips, trucos y todo aquello relacionado directamente con lenguajes de programación',
        slug: 'programacion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Algoritmos & Estructuras de Datos',
        description: 'Aplicación de diferentes algorimos, estructuras de datos y patrones de diseño',
        slug: 'algoritmos-estructuras-de-datos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Guías',
        description: 'Guías o tutoriales en general de frameworks o herramientas',
        slug: 'guias',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Off-topic',
        description: 'Cualquier cosa no relacionada con programación',
        slug: 'off-topic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
