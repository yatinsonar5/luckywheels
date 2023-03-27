const mongoose = require("mongoose");

const autoClickSchema = new mongoose.Schema({
  autoClickId: {
    type: Number,
  },
  url: {
    type: String,
  },
  time_interval: {
    type: Number,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("autoClick", autoClickSchema);
