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

  const diaryID = request.nextUrl.searchParams.get('id')
  
  if (!diaryID) {
    return new Response(JSON.stringify({ error: "ID parameter is missing" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
  
  const items = await db.get("SELECT * FROM diary WHERE id = ?", [diaryID])

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}

export async function DELETE(request: NextRequest) {
  if (!db) {
    db = await open({
      filename: "./diary.db",
      driver: sqlite3.Database,
    })
  }

  const diaryID = request.nextUrl.searchParams.get('id')
  
  if (!diaryID) {
    return new Response(JSON.stringify({ error: "ID parameter is missing" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
  
  await db.get("DELETE FROM diary WHERE id = ?", [diaryID])

  return new Response(JSON.stringify({message: "Item deleted successfully"}), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}

export async function PUT(request: NextRequest) {
    if (!db) {
      db = await open({
        filename: "./diary.db",
        driver: sqlite3.Database,
      })
    }

    const diaryID = request.nextUrl.searchParams.get('id')
  
    const { title, content, date, canvasData } = await request.json()
  
    try {
        await db.run(
            "UPDATE diary SET title = ?, content = ?, date = ?, canvasData = ? WHERE id = ?",
            [title, content, date, canvasData, diaryID]
        )
  
      return new Response(JSON.stringify({ message: "Item updated successfully" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      })
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      })
    }
  }
