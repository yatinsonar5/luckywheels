const SearchBox = require("../models/searchbox.model");

exports.searchbox = async (req, res) => {
  const searchBoxData = new SearchBox(req.body);

  SearchBox.findOne(
    { searchBoxId: searchBoxData.searchBoxId },
    (err, result) => {
      if (err) {
        res.status(500).send({
          code: 500,
          status: "Internal Server Error",
          message: "Failed to connect with Database",
        });
      }
      if (!result) {
        const newSearchBox = new SearchBox(searchBoxData);
        newSearchBox.save((err, result) => {
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
        SearchBox.replaceOne(
          {
            searchBoxId: searchBoxData.searchBoxId,
          },
          {
            searchBoxId: searchBoxData.searchBoxId,
            time_interval: searchBoxData.time_interval,
            status: searchBoxData.status,
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
                  time_interval: searchBoxData.time_interval,
                  status: searchBoxData.status,
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

exports.getsearchbox = (req, res) => {
  SearchBox.findOne({}, { _id: 0, searchBoxId: 0, __v: 0 }, (err, result) => {
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
