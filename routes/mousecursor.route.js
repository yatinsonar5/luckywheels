const express = require("express");
const MouseCursorRouter = express.Router();
const MouseCursor = require("../controller/mousecursor.controller");

MouseCursorRouter.get("/api/getmousecursor", MouseCursor.getmousecursor);
MouseCursorRouter.post("/api/mousecursor", MouseCursor.mousecursor);

module.exports = MouseCursorRouter;
