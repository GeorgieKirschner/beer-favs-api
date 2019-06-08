"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BeerSchema extends Schema {
  up() {
    this.create("beers", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.decimal("abv", 3, 1);
      table.integer("ibu");
      table.timestamps();
    });
  }

  down() {
    this.drop("beers");
  }
}

module.exports = BeerSchema;
