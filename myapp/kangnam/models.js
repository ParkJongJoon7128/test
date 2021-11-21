const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  pass: {
    type: String
  }
});

module.exports = mongoose.model("detail", detail);