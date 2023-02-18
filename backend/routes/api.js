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
      const map = {
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
                  ({
                    region,
                    latitude,
                    longitude,
                    organizers,
                    volunteers,
                    events,
                    vacancies,
                    projects,
                    university,
                  }) => ({
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
      };

      const people = await new Promise((resolve, reject) => {
        if (req.query.region == null) {
          return this.db.all(
            `
            SELECT 
                'Все регионы' as region, 
                SUM("young") as young, 
                SUM("total") as total 
            FROM read_csv_auto('data/people.csv')
          `,
            function (err, res) {
              if (err) {
                return reject(err);
              }

              resolve(res[0]);
            }
          );
        }
        this.db.all(
          `
            SELECT * FROM read_csv_auto('data/people.csv')
            WHERE "region" = '${req.query.region}'
          `,
          function (err, res) {
            if (err) {
              return reject(err);
            }

            resolve(res[0]);
          }
        );
      });

      const peopleByRegions = await new Promise((resolve, reject) => {
        this.db.all(
          `
            SELECT region, young, total, (young*100.0)/total as "youngPercent" FROM read_csv_auto('data/people.csv')
            ORDER BY "youngPercent" DESC
          `,
          function (err, res) {
            if (err) {
              return reject(err);
            }
            resolve(res);
          }
        );
      });

      res.json({
        map,
        people,
        peopleByRegions,
      });
    });
    this.express.get("/api/people", async (req, res) => {
      res.send(
        await new Promise((resolve, reject) => {
          this.db.all(
            `SELECT * FROM read_csv_auto('data/people_old.csv')`,
            function (err, res) {
              if (err) {
                return reject(err);
              }
              resolve(res);
            }
          );
        })
      );
    });

    this.express.get("/api/count-projects-by-region", async (req, res) => {
      res.send(
        await new Promise((resolve, reject) => {
          this.db.all(
            `SELECT region, SUM(projects) AS Allprojects
            FROM read_csv_auto('data/m1.p6.csv')
GROUP BY region`,
            function (err, res) {
              if (err) {
                return reject(err);
              }
              resolve(res);
            }
          );
        })
      );
    });
  }
}

module.exports = Api;
