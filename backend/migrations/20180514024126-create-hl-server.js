'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hl_servers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      sshKey: {
        type: Sequelize.STRING
      },
      os_type: {
        type: Sequelize.STRING
      },
      os_version: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hl_servers');
  }
};