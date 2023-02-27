const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Environment Variable configuration
const dotenv = require("dotenv");
dotenv.config();

// Cors Handling
const cors = require("cors");
app.use(cors());

const corsOptions = {
  origin: ["http://example.com", "http://example2.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

//Creating path to access html files

app.use(express.static(path.join(__dirname, "/html")));

app.get("/1.html", (req, res) => {
  // Set the Cache-Control header to no-cache
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(__dirname, "/html/1.html"));
});

app.get("/2.html", (req, res) => {
  // Set the Cache-Control header to no-cache
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(__dirname, "/html/2.html"));
});

//Posting Header Footer Content
const headerfooterRoute = require("./routes/headerfooter.route");
app.use("/", headerfooterRoute);

// Opentab Url Data
const opentabRoute = require("./routes/opentab.route");
app.use("/", opentabRoute);

// Default settings Data
const defaultsettingsRoute = require("./routes/defaultSetting.route");
app.use("/", defaultsettingsRoute);

// Get all details
const allDetailsRoute = require("./routes/allDetails.route");
app.use("/", allDetailsRoute);

// Image Upload
const imageUploadRoute = require("./routes/imageupload.route");
app.use("/", imageUploadRoute);

// Login
const loginRoutes = require("./routes/login.route");
app.use("/", loginRoutes);

// Installed Reports
const installedReportsRoutes = require("./routes/installedReports.route");
app.use("/", installedReportsRoutes);

// Port
const port = process.env.PORT;

// Server Initialisation
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
