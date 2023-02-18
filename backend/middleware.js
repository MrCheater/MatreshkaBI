const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

class Middleware {
  constructor(express) {
    this.express = express;
  }

  async init() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(express.static(path.join(__dirname, "..", "public")));

    this.initErrors();
  }

  initErrors() {
    this.express.use(async (err, req, res, next) => {
      /* This will be the first error handler to be called */
      console.error("Unexpected error");
      return next(err);
    });
  }
}

module.exports = Middleware;
