"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BeersSchema extends Schema {
  up() {
    this.table("beers", table => {
      table
        .integer("brewery_id")
        .unsigned()
        .after("ibu");
      table
        .foreign("brewery_id")
        .references("id")
        .inTable("breweries");
    });
  }

  down() {
    this.table("beers", table => {
      // reverse alternations
      table.dropForeign("brewery_id");
      table.dropColumn("brewery_id");
    });
  }
}

module.exports = BeersSchema;
