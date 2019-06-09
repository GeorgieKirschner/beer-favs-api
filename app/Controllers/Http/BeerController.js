"use strict";

const Beer = use("App/Models/Beer");

class BeerController {
  async index({ request, response }) {
    const query = request.get();
    let beers = [];
    // get paramaters to filter
    if (query.abv) {
      beers = await Beer.query()
        .where("abv", query.abvOver === true ? ">" : "<", query.abv)
        .fetch();
      response.send(beers);
    } else {
      beers = await Beer.query()
        .with("brewery")
        .fetch();
      response.send(beers);
    }
  }
  async show({ request, response }) {
    const beer = await Beer.find(request.params.id);
    response.send(beer);
  }
  async store({ request, response }) {
    const beer = new Beer();
    const body = request.post();

    beer.name = body.name;
    beer.abv = body.abv;
    beer.ibu = body.ibu;

    await beer.save();
    const beers = await Beer.all();
    response.send(beers);
  }

  async update({ request, response }) {
    const beer = await Beer.find(request.params.id);
    const body = request.post();

    beer.name = body.name;
    beer.abv = body.abv;
    beer.ibu = body.ibu;

    await beer.save();
    const beers = await Beer.all();
    response.send(beers);
  }

  async destroy({ request, response }) {
    const beer = await Beer.find(request.params.id);
    await beer.delete();
    const beers = await Beer.all();
    response.send(beers);
  }

  async getAbvOver4({ request, response }) {
    const beers = await Beer.query()
      .where("abv", ">", request.params.abv)
      .fetch();
    response.send(beers);
  }
}

module.exports = BeerController;
