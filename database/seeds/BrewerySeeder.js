"use strict";

/*
|--------------------------------------------------------------------------
| BrewerySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class BrewerySeeder {
  async run() {
    const breweries = [
      {
        name: "Madison River Brewing"
      },
      {
        name: "406 Brewing"
      },
      {
        name: "Map Brewing"
      }
    ];

    const savedBreweries = breweries.map(async brewery => {
      await Factory.model("App/Models/Brewery").create(brewery);
    });

    await Promise.all(savedBreweries);
  }
}

module.exports = BrewerySeeder;
