"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          name: "Чай Улун",
          picture_url:
            "https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/resize_cache/iblock/390/278_278_1/5z37094axz2uzbuvlt1yosyfv3rjn4cz.webp",
          info: "Слабоферментированный молочный улун.  Нежный, с молочными и карамельными тонами, с легкой кислинкой в послевкусии.",
          placeOfBirth: "Китай",
          coordinates: "35.421522, 104.144439",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Рождественский",
          picture_url:
            "https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/resize_cache/iblock/7b5/529_529_118ade429667f31b699080c7cadfe31a8/2aw15cx43zopk2ikwlenojxleu8e7fdq.webp",
          info: "Уютный чай с новогодним настроением - миндаль и яблоко в его составе напоминают о рождественской выпечке, цедра апельсина и корица придают праздничный аромат, а гвоздика обладает согревающим эффектом.",
          placeOfBirth: "Германия",
          coordinates: "51.099682, 9.819568",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Цейлон Пекое",
          picture_url:
            "https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/resize_cache/iblock/99a/529_529_118ade429667f31b699080c7cadfe31a8/99a8e54a2e5cefa0be4fb1e8c8219171.webp",
          info: "Черный чай с высокогорных плантаций острова Цейлон, отличающийся насыщенной терпкостью. Яркое солнце наделило листья этого чая большим количеством полезнейших веществ – различными витаминами и микроэлементами, которые благотворно влияют на организм. «Красный слон» отлично тонизирует, нормализует пищеварение, давление и обмен веществ.",
          placeOfBirth: "Шри-Ланка",
          coordinates: "7.319914, 80.651358",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
