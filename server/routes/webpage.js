const express = require("express");
const webpageRouter = express.Router();
const mustache = require("mustache");
const fs = require("fs").promises;

//Load any comp
(async () => {
  recentPastesView = await fs.readFile(
    __dirname + "/../views/components/recentPastes.html",
    "utf8"
  );
})();
//render homepage
webpageRouter.get("/", (req, res) => {
  let recentPastes = mustache.render(recentPastesView, {
    1: "oooh",
    2: "o!!!",
    3: "aahh",
  });
  res.render("../pages/home", { recentPastes: recentPastes });
});

//For static viewing of submitted pastes.
webpageRouter.get("/view/:pasteID", (req, res) => {
  res.render("../pages/viewpaste", { pid: req.params.pasteID });
});
module.exports = webpageRouter;
