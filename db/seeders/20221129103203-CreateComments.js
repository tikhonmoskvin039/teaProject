"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          user_id: 2,
          tea_id: 1,
          text: "Wow, it`s wonderfull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          tea_id: 3,
          text: "Отличный, но я его не пил =)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
