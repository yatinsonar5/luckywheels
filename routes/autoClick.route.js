const express = require("express");
const AutoClickRouter = express.Router();
const AutoClick = require("../controller/autoclick.controller");

AutoClickRouter.get("/api/getautoclick", AutoClick.getautoclick);
AutoClickRouter.post("/api/autoclick", AutoClick.autoclick);

module.exports = AutoClickRouter;
