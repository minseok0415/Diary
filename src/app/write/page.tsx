"use client"
import { useEffect, useState } from "react"
import Canvas from "@/components/canvas"

const Write = () => {
    const [currentDate, setCurrentDate] = useState("")

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
    
    return (
        <>
            <div>
                <div>
                    <input type="text" />
                    <p>{currentDate}</p>
                </div>
                <Canvas />
                <textarea />
            </div>
            <div>
                <button type="submit">저장</button>
                <button type="button">취소</button>
            </div>
        </>
    )
}

export default Write
