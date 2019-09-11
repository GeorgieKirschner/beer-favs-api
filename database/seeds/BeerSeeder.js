"use strict";

/*
|--------------------------------------------------------------------------
| BeerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Beer = use("App/Models/Beer");

class BeerSeeder {
  async run() {
    const beers = [
      {
        name: "Salmon Honey Rye",
        abv: 4.2,
        ibu: 60,
        brewery_id: 1
      },
      {
        name: "Ridge Hippie",
        abv: 4.2,
        ibu: 15,
        brewery_id: 2
      },
      {
        name: "Jacks 90",
        abv: 6.1,
        ibu: 45,
        brewery_id: 3
      },
      {
        name: "Thunder Monkey",
        abv: 4.7,
        ibu: 22,
        brewery_id: 2
      }
    ];

    const savedBeers = beers.map(async beer => {
      await Factory.model("App/Models/Beer").create(beer);
    });

    await Promise.all(savedBeers);
  }
}

module.exports = BeerSeeder;
