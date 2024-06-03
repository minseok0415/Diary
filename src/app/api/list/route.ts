import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"

let db: Database | null = null

export async function GET() {
  if (!db) {
    db = await open({
      filename: "./diary.db",
      driver: sqlite3.Database,
    })
  }

  const items = await db.all("SELECT id, date FROM diary")

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}