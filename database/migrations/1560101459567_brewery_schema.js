"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BrewerySchema extends Schema {
  up() {
    this.create("breweries", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("breweries");
  }
}

module.exports = BrewerySchema;
