import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"
import { NextRequest } from "next/server"

let db: Database | null = null

export async function GET(request: NextRequest) {
  if (!db) {
    db = await open({
      filename: "./diary.db",
      driver: sqlite3.Database,
    })
  }

  const date = request.nextUrl.searchParams.get('date')
  
  if (!date) {
    return new Response(JSON.stringify({ error: "Date parameter is missing" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
  
  const items = await db.get("SELECT id FROM diary WHERE date = ?", [date])

  if (items === undefined) {
    return new Response(JSON.stringify({ id: -1 }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  }

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}
