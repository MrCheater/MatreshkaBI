const duckdb = require('duckdb');
const path = require('path')

class Api {
  constructor(express) {
    this.express = express;
    this.db = new duckdb.Database(path.join(
      __dirname,
    ));
  }

  init() {
    this.express.get("/api/get", (req, res) => {
      res.send({ i: 10 });
    });

    this.express.post("/api/increment", (req, res) => {
      res.send({ i: 20 });
    });
  }
}

module.exports = Api;
