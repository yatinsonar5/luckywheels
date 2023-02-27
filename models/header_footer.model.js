const mongoose = require("mongoose");

const headerFooterStatusSchema = new mongoose.Schema({
  status_Id: {
    type: Number,
    required: true
  },
  header: {
    type: String,
  },
  header_status: {
    type: Boolean,
  },
  footer: {
    type: String,
  },
  footer_status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("headerFooterStatus", headerFooterStatusSchema);
