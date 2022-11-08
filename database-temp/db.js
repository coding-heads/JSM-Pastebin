const sqlite3 = require("sqlite3").verbose();


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
