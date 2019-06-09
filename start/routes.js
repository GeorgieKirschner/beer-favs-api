"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Beer = use("App/Models/Beer");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
Route.resource("beers", "BeerController");

// Route.get("/beers", "BeerController.index");
// Route.get("/beer/:id", "BeerController.show");
// Route.post("/beers", "BeerController.create");
// Route.put("/beer/:id", "BeerController.edit");
// Route.delete("/beer/:id", "BeerController.destroy");

//Route.get("/beers", "BeerController.getAbvOver4");
