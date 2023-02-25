const mongoose = require("mongoose");

const headerFooterStatusSchema = new mongoose.Schema({
  status_Id: {
    type: Number,
  },
  header_status: {
    type: Boolean,
  },
  footer_status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("headerFooterStatus", headerFooterStatusSchema);
