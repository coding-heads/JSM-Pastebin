const bodyParser = require("body-parser");
const express = require("express");
const webpageRouter = express.Router();
const mustache = require("mustache");
const fs = require("fs").promises;
const db = require("../../database-temp/db.js");
//Load any component
(async () => {
  recentPastesView = await fs.readFile(
    __dirname + "/../views/components/recentPastes.html",
    "utf8"
  );
})();
//render homepage
webpageRouter.get("/", async (req, res) => {
  let sql = "select content from pastes order by created desc limit 3";
  let rows = await db.getRows(sql);
  let recentPastes = mustache.render(recentPastesView, {
    1: rows[0].content,
    2: rows[1].content,
    3: rows[2].content,
  });
  res.render("../pages/home", { recentPastes: recentPastes });
});

//For static viewing of submitted pastes.
webpageRouter.get("/view/:pasteID", async (req, res) => {
  let pasteContent = await db.getPaste(req.params.pasteID);
  res.render("../pages/viewpaste", { pid: pasteContent.content });
});

//Posts
webpageRouter.post("/pastes/new", async (req, res) => {
  let newRow = await db.insertPaste(req.body.content);
  res.json({ content: req.body.content, id: newRow.lastID });
});
module.exports = webpageRouter;
