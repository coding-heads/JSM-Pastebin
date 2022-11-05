const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function openDB() {
  // open the database
  return await open({
    filename: "./database-temp/develop.db",
    driver: sqlite3.Database,
  });
}

//returns the content of a paste from the ID
async function getPaste(id) {
  let db = await openDB();
  const result = await db.get("SELECT content from pastes where id=?", id);
  db.close();
  return result;
}

//returns the row of the created paste
async function insertPaste(content, userid = 1, private = 0) {
  let db = await openDB();
  const result = await db.run(
    "INSERT INTO pastes (user_id,content,private) VALUES (?,?,?)",
    userid,
    content,
    private
  );
  db.close();
  return result;
}
async function getRows(sql) {
  let db = await openDB();
  let rows = await db.all(sql);
  db.close();
  return rows;
}

const db = {
  getRows: getRows,
  insertPaste: insertPaste,
  getPaste: getPaste,
};
module.exports = db;
