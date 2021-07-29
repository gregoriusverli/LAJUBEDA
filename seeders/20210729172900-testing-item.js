'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      itemName: "Sepeda",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itemName: "Motor",
      price: 5000,
      weight: 5,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      itemName: "Motor",
      price: 1000000,
      weight: 1,
      quantity: 20,
      picture: "images/1-bonds-mens-hipster.jpg",
      description: "Ini deskripsinya",
      url: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
