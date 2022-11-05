const sqlite3 = require("sqlite3").verbose();
// const { open } = require("sqlite");

// async function openDB() {
//   // open the database
//   return await open({
//     filename: "./database-temp/develop.db",
//     driver: sqlite3.Database,
//   });
// }

// //returns the content of a paste from the ID
// async function getPaste(id) {
//   let db = await openDB();
//   const result = await db.get("SELECT content from pastes where id=?", id);
//   db.close();
//   return result;
// }

// //returns the row of the created paste
// async function insertPaste(content, userid = 1, private = 0) {
//   let db = await openDB();
//   const result = await db.run(
//     "INSERT INTO pastes (user_id,content,private) VALUES (?,?,?)",
//     userid,
//     content,
//     private
//   );
//   db.close();
//   return result;
// }
// async function getRows(sql) {
//   let db = await openDB();
//   let rows = await db.all(sql);
//   db.close();
//   return rows;
// }

const db = new sqlite3.Database('./database-temp/develop.db', sqlite3.OPEN_READWRITE, (err)=>{
  if (err) throw err;
})

function getPaste(db, id, cb) {
  db.get('select content from pastes where id=?', [id], (err,row)=>{
    if (err) throw err;
    console.log('row')
    console.log(row);
    cb(row);
  })
}

function insertPaste(db, content, userid = 1, private = 0, cb) {
  db.get('insert into pastes (user_id, content, private) values (?,?,?) returning rowId', [userid, content, private], (err,row)=>{
    if (err) throw err;
    cb(row);
  })
}

function getRows(db, sql, args=[], cb) {
  db.all(sql, args, (err,rows)=>{
    if (err) throw err;
    cb(rows);
  })
}

const dbExp = {
  db,
  getRows,
  insertPaste,
  getPaste,
};
module.exports = dbExp;
