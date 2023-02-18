const duckdb = require("duckdb");
const path = require("path");
const regions = require('../../data/regions.json');
const years = require('../../data/years.json');
const quarters = require('../../data/quarters.json');
const months = require('../../data/months.json');

class Api {
  constructor(express) {
    this.express = express;
    this.db = new duckdb.Database(':memory:');
  }

  init() {
    this.express.get("/api/get", async (req, res) => {
      res.send(
        await new Promise(
          (resolve, reject) => {
            this.db.all(
              `SELECT DISTINCT "Регион" FROM read_csv_auto('data/m1.p1.csv')`
            , function(err, res) {
              if (err) {
                return reject(err);
              }
              resolve(res)
            });
          }
        )
      );
    });
    this.express.get("/api/dashboard-1", (req, res) => {
      res.json({
        map: {
          items: [
            {
              type: "Point",
              iconContent: 10,
              coordinates: [55.56, 37.75]
            },
            {
              type: "Point",
              iconContent:3,
              coordinates: [55.75, 37.75]
            },
            {
              type: "Point",
              iconContent: 2,
              coordinates: [55.1, 37.45]
            },
            {
              type: "Point",
              iconContent: 100,
              coordinates: [55.25, 37.35]
            }
          ]
        }
      });
    });


  }
}

module.exports = Api;
