const express = require("express");
const webpageRouter = express.Router();

//render homepage
webpageRouter.get("/", (req, res) => {
  res.render("../pages/index", { date: new Date() });
});

//For static viewing of submitted pastes.
webpageRouter.get("/view/:pasteID", (req, res) => {
  res.render("../pages/viewpaste", { pid: req.params.pasteID });
});
module.exports = webpageRouter;
