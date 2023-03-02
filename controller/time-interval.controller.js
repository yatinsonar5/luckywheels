const TimeInterval = require("../models/time_interval.model");

exports.headerfootertime = (req, res) => {
  const timeIntervalData = new TimeInterval(req.body);
  TimeInterval.findOne({ timeId: timeIntervalData.timeId }, (err, result) => {
    if (err) {
      res.status(500).send({
        code: 500,
        status: "Internal Server Error",
        message: "Failed to connect with Database",
      });
    }
    if (!result) {
      const newTimeIntervalData = new TimeInterval(timeIntervalData);
      newTimeIntervalData.save((err, result) => {
        if (err) {
          res.status(500).send({
            code: 500,
            status: "Internal Server Error",
            message: "Failed to Save Data in Database",
          });
        } else {
          res.status(201).send({
            code: 201,
            status: "Created",
            message: "Data Saved Successfully",
            data: result,
          });
        }
      });
    }
    if (result) {
      TimeInterval.replaceOne(
        {
          timeId: timeIntervalData.timeId,
        },
        {
          timeId: timeIntervalData.timeId,
          header_time_interval: timeIntervalData.header_time_interval,
          footer_time_interval: timeIntervalData.footer_time_interval,
        },
        (err, result) => {
          {
            if (err) {
              res.status(500).send({
                code: 500,
                status: "Internal Server Error",
                message: "Failed to connect to database to update Data",
              });
            } else {
              res.status(200).send({
                code: 200,
                status: "Success",
                message: "Data Saved Successfully",
                data: {
                  header_time_interval: timeIntervalData.header_time_interval,
                  footer_time_interval: timeIntervalData.footer_time_interval,
                  message: result,
                },
              });
            }
          }
        }
      );
    }
  });
};

exports.getheaderfootertime = (req, res) => {
  TimeInterval.findOne({}, { _id: 0, timeId: 0, __v: 0 }, (err, result) => {
    if (err) {
      res.status(500).send({
        code: 500,
        status: "Internal Server Error",
        message: "Not able to connect with database",
      });
    } else if (!result) {
      res.status(404).send({
        code: 404,
        status: "Not Found",
        message: "Data not found in database",
      });
    } else {
      res.status(200).send({
        code: 200,
        status: "Success",
        message: "Data fetched Successfully",
        data: result,
      });
    }
  });
};
