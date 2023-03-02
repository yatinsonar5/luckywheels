const mongoose = require("mongoose");

const timeIntervalSchema = new mongoose.Schema({
  timeId: {
    type: Number,
  },
  header_time_interval: {
    type: Number,
  },
  footer_time_interval: {
    type: Number,
  },
});

module.exports = mongoose.model("timeInterval", timeIntervalSchema);
