const express = require('express');
const installedReportsRouter = express.Router();
const InstalledReports = require('../controller/installed-reports.controller');

installedReportsRouter.post("/api/installedreports", InstalledReports.installedreports)

module.exports = installedReportsRouter