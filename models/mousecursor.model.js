const mongoose = require("mongoose");

const mouseCursorSchema = new mongoose.Schema({
  mouseId: {
    type: Number,
  },
  status: {
    type: Boolean,
  },
  time_interval: {
    type: Number,
  },
  x_min: {
    type: Number,
  },
  x_max: {
    type: Number,
  },
  y_min: {
    type: Number,
  },
  y_max: {
    type: Number,
  },
});

module.exports = mongoose.model("mouseCursor", mouseCursorSchema);
