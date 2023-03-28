const mongoose = require("mongoose");

const searchBoxSchema = new mongoose.Schema({
  searchBoxId: {
    type: Number,
  },
  time_interval: {
    type: Number,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("searchBox", searchBoxSchema);
