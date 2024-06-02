import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"

let db: Database | null = null

export async function POST(req: Request) {
  if (!db) {
    db = await open({
      filename: "./diary.db",
      driver: sqlite3.Database,
    })
  }

  const { title, content, date, canvasData } = await req.json()

  try {
    await db.run(
      "INSERT INTO diary (title, content, date, canvasData) VALUES (?, ?, ?, ?)",
      [title, content, date, canvasData]
    )

    return new Response(JSON.stringify({ message: "Item created successfully" }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}

export async function GET() {
  if (!db) {
    db = await open({
      filename: "./diary.db",
      driver: sqlite3.Database,
    })
  }

  const items = await db.all("SELECT * FROM diary")

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}