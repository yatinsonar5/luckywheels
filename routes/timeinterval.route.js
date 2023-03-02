const express = require("express");
const TimeIntervalRouter = express.Router();
const TimeInterval = require("../controller/time-interval.controller");

TimeIntervalRouter.get("/api/getheaderfootertime", TimeInterval.getheaderfootertime);
TimeIntervalRouter.post("/api/headerfootertime", TimeInterval.headerfootertime);

module.exports = TimeIntervalRouter;