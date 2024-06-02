"use client"
import { useEffect, useState } from "react"
import Canvas from "@/components/canvas"

const Write = () => {
    const [currentDate, setCurrentDate] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [canvasData, setCanvasData] = useState("")

    useEffect(() => {
        const today = new Date()
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
        const dayOfWeek = daysOfWeek[today.getDay()]
        const formattedDate = `${year}년 ${month}월 ${day}일 ${dayOfWeek}`
        setCurrentDate(formattedDate)
    }, [])

    const saveDiary = async () => {
        const DTO = {
            title: title,
            content: content,
            date: currentDate,
            canvasData: canvasData
        }

        await fetch("http://localhost:3000/api", {
            method: "POST",
            body: JSON.stringify(DTO)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json()
                })
                .then(data => {
                    console.log("Response data:", data)
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }
    
    return (
        <>
            <div>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(() => e.target.value)}
                    />
                    <p>{currentDate}</p>
                </div>
                <Canvas saveCanvasData={setCanvasData} />
                <textarea
                    value={content}
                    onChange={(e) => setContent(() => e.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={saveDiary}
                >저장</button>
                <button type="button">취소</button>
            </div>
        </>
    )
}

export default Write
