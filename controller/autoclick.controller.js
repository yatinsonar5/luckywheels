const AutoClick = require("../models/autoclick.model");

exports.autoclick = async (req, res) => {
  const autoClickData = new AutoClick(req.body);

  AutoClick.findOne(
    { autoClickId: autoClickData.autoClickId },
    (err, result) => {
      if (err) {
        res.status(500).send({
          code: 500,
          status: "Internal Server Error",
          message: "Failed to connect with Database",
        });
      }
      if (!result) {
        const newAutoClick = new AutoClick(autoClickData);
        newAutoClick.save((err, result) => {
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
        AutoClick.replaceOne(
          {
            autoClickId: autoClickData.autoClickId,
          },
          {
            autoClickId: autoClickData.autoClickId,
            url: autoClickData.url,
            time_interval: autoClickData.time_interval,
            status: autoClickData.status,
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
                  url: autoClickData.url,
                  time_interval: autoClickData.time_interval,
                  status: autoClickData.status,
                  message: result,
                },
              });
            }
          }
        );
      }
    }
  );
};

exports.getautoclick = (req, res) => {
  AutoClick.findOne({}, { _id: 0, autoClickId: 0, __v: 0 }, (err, result) => {
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
