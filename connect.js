const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database(
  "./diary.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message)
    }
    console.log("Connected to the SQlite database.")
  }
)

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS diary (
        id INTEGER PRIMARY KEY,
        title TEXT,
        content TEXT,
        date TEXT,
        canvasData TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log("Created diary table.")
    }
  )
})