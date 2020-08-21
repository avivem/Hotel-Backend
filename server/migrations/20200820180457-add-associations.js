'use strict';

//NOTE: Sequelize will Change model names into plural form. So check in psql
//What the names should be and use THOSE names here.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     //First add RoomType to Room.
     await queryInterface.addColumn(
       'Rooms',
       'RoomTypeId',
       {
         type: Sequelize.INTEGER,
         references: {
           model : 'RoomTypes',
           key : 'id'
         },
         onUpdate: 'CASCADE'
       }
     );

     //Add Room to Booking
     await queryInterface.addColumn(
       'Bookings',
       'RoomId',
       {
         type: Sequelize.INTEGER,
         references: {
           model : 'Rooms',
           key : 'room_num'
         },
         onUpdate: 'CASCADE'
       }
     );

     //Add Guest to Booking.
     await queryInterface.addColumn(
      'Bookings',
      'GuestId',
      {
        type: Sequelize.INTEGER,
        references: {
          model : 'Guests',
          key : 'id'
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

     //First delete RoomType from Room
    await queryInterface.removeColumn(
      'Rooms',
      'RoomTypeId'
    );

    //Remove Room from Booking
    await queryInterface.removeColumn(
     'Bookings',
     'RoomId'
    );

    //Remove Guest from Booking
    await queryInterface.removeColumn(
      'Bookings',
      'GuestId'
     );
  }
};
