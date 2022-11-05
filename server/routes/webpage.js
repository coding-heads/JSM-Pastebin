const bodyParser = require("body-parser");
const express = require("express");
const webpageRouter = express.Router();
const mustache = require("mustache");
const fs = require("fs").promises;
const {db, getPaste, insertPaste, getRows} = require("../../database-temp/db.js");

//Load any component
(async () => {
  recentPastesView = await fs.readFile(
    __dirname + "/../views/components/recentPastes.html",
    "utf8"
  );
})();
//render homepage
webpageRouter.get("/", (req, res) => {
  let sql = "select content from pastes order by created desc limit 3";
  getRows(db, sql, [], (rows)=>{
    console.log(rows[0]);
    let recentPastes = mustache.render(recentPastesView, {
      1: rows[0].content,
      2: rows[1].content,
      3: rows[2].content,
    });
    res.render("../pages/home", { recentPastes: recentPastes });
  });
  
});

//For static viewing of submitted pastes.
webpageRouter.get("/view/:pasteID", (req, res) => {
  // let pasteContent = await db.getPaste(req.params.pasteID);
  getPaste(db, req.params.pasteID, (pasteContent)=>{
    console.log('pasteContent')
    console.log(pasteContent);
    res.render("../pages/viewpaste", { pid: pasteContent.content });
  })
});

//Posts
webpageRouter.post("/pastes/new", (req, res) => {
  // let newRow = await db.insertPaste(req.body.content);
  insertPaste(db, req.body.content, 1, 0, (newRow)=>{
    console.log(newRow);
    res.json({ content: req.body.content, id: newRow.id });
  })
});
module.exports = webpageRouter;
