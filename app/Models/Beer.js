"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Beer extends Model {
  brewery() {
    return this.belongsTo("App/Models/Brewery");
  }
}

module.exports = Beer;
