const mongoose = require("mongoose");

const headerFooterStatusSchema = new mongoose.Schema({
  status_Id: {
    type: Number,
    required: true
  },
  header_status: {
    type: Boolean,
  },
  footer_status: {
    type: Boolean,
  },
  header: {
    type: String,
  },
  footer: {
    type: String,
  },
});

module.exports = mongoose.model("headerFooterStatus", headerFooterStatusSchema);
