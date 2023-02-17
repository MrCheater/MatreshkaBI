const duckdb = require("duckdb");
const path = require("path");
const regions = require('../../data/regions.json');
const years = require('../../data/years.json');
const quarters = require('../../data/quarters.json');
const months = require('../../data/months.json');

class Api {
  constructor(express) {
    this.express = express;
    this.db = new duckdb.Database(path.join(__dirname));
  }

  init() {
    this.express.get("/api/get", (req, res) => {
      res.send({ i: 10 });
    });
    this.express.get("/api/filters", (req, res) => {
      res.json({
        regions,
        years,
        quarters,
        months
      });
    });

    this.express.post("/api/increment", (req, res) => {
      res.send({ i: 20 });
    });

  }
}

module.exports = Api;
