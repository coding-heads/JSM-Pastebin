const express = require("express");
const webpageRouter = express.Router();

//render homepage
webpageRouter.get("/", (req, res) => {
  res.render("./index", { date: new Date() });
});

//For static viewing of submitted pastes.
webpageRouter.get("/view/:pasteID", (req, res) => {
  res.render("./viewpaste/index", { pid: req.params.pasteID });
});
module.exports = webpageRouter;
