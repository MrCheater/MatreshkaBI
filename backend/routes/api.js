const duckdb = require("duckdb");
const path = require("path");
const regions = require("../../data/regions.json");
const years = require("../../data/years.json");
const quarters = require("../../data/quarters.json");
const months = require("../../data/months.json");

class Api {
  constructor(express) {
    this.express = express;
    this.db = new duckdb.Database(":memory:");
  }

  init() {
    this.express.get("/api/get", async (req, res) => {
      res.send({});
    });
    this.express.get("/api/dashboard-1", async (req, res) => {
      res.json({
        map: {
          items: await new Promise((resolve, reject) => {
            this.db.all(
              `
                SELECT * FROM read_csv_auto('data/map.csv')
                ${
                  req.query.region
                    ? `WHERE "region" = '${req.query.region}'`
                    : ""
                }  
              `,
              function (err, res) {
                if (err) {
                  return reject(err);
                }
                resolve(
                  res.map(
                    (
                      region,
                      latitude,
                      longitude,
                      organizers,
                      volunteers,
                      events,
                      vacancies,
                      projects,
                      university
                    ) => ({
                      type: "Point",
                      region,
                      organizers,
                      volunteers,
                      events,
                      vacancies,
                      projects,
                      university,
                      coordinates: [latitude, longitude],
                    })
                  )
                );
              }
            );
          }),
        },
      });
    });
  }
}

module.exports = Api;
