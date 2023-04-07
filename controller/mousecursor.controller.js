const MouseCursor = require("../models/mousecursor.model");

exports.mousecursor = async (req, res) => {
  const mouseCursorData = new MouseCursor(req.body);

  MouseCursor.findOne({ mouseId: mouseCursorData.mouseId }, (err, result) => {
    if (err) {
      res.status(500).send({
        code: 500,
        status: "Internal Server Error",
        message: "Failed to connect with Database",
      });
    }
    if (!result) {
      const newMouseCursor = new MouseCursor(mouseCursorData);
      newMouseCursor.save((err, result) => {
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
    } else if (result) {
      MouseCursor.replaceOne(
        {
          mouseId: mouseCursorData.mouseId,
        },
        {
          mouseId: mouseCursorData.mouseId,
          status: mouseCursorData.status,
          time_interval: mouseCursorData.time_interval,
          x_min: mouseCursorData.x_min,
          x_max: mouseCursorData.x_max,
          y_min: mouseCursorData.y_min,
          y_max: mouseCursorData.y_max,
          no_of_clicks: mouseCursorData.no_of_clicks,
        },
        (err, result) => {
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
                status: mouseCursorData.status,
                time_interval: mouseCursorData.time_interval,
                x_min: mouseCursorData.x_min,
                x_max: mouseCursorData.x_max,
                y_min: mouseCursorData.y_min,
                y_max: mouseCursorData.y_max,
                no_of_clicks: mouseCursorData.no_of_clicks,
                message: result,
              },
            });
          }
        }
      );
    }
  });
};

exports.getmousecursor = (req, res) => {
  MouseCursor.findOne({}, { _id: 0, mouseId: 0, __v: 0 }, (err, result) => {
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
