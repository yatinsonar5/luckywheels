const express = require("express");
const SearchBoxRouter = express.Router();
const SearchBox = require("../controller/searchbox.controller");

SearchBoxRouter.get("/api/getsearchbox", SearchBox.getsearchbox);
SearchBoxRouter.post("/api/searchbox", SearchBox.searchbox);

module.exports = SearchBoxRouter;
