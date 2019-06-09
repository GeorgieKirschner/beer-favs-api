"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Beer", (faker, i, data) => {
  return {
    name: data.name,
    abv: data.abv,
    ibu: data.ibu,
    brewery_id: data.brewery_id
  };
});

Factory.blueprint("App/Models/Brewery", (faker, i, data) => {
  return {
    name: data.name
  };
});
