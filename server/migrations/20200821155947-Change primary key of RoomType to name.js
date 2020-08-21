'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn(
      'Rooms',
      'RoomTypeId'
    );

    await queryInterface.dropTable(
      'RoomTypes'
    );

    await queryInterface.createTable(
      'RoomTypes',
      {
        name: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        max_occupancy: {
          type: Sequelize.DECIMAL
        },
        rate: {
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    );

    await queryInterface.addColumn(
      'Rooms',
      'RoomType',
      {
        type: Sequelize.STRING,
        references: {
          model : 'RoomTypes',
          key : 'name'
        },
        onUpdate: 'CASCADE'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn(
      'Rooms',
      'RoomType'
    );

    await queryInterface.dropTable(
      'RoomTypes'
    );

    await queryInterface.createTable(
      'RoomTypes',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        max_occupancy: {
          type: Sequelize.DECIMAL
        },
        rate: {
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    );

    await queryInterface.addColumn(
      'Rooms',
      'RoomTypeId',
      {
        type: Sequelize.Integer,
        references: {
          model : 'RoomTypes',
          key : 'id'
        },
        onUpdate: 'CASCADE'
      }
    );
  }
};
