"use client"
import { useEffect } from "react"
import Link from "next/link"

const Calendar = () => {
    useEffect(() => {
        getDiary()
    }, [])

    const getDiary = async () => {
        await fetch("http://localhost:3000/api", {
            method: "GET"
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
            <h1>일기 목록</h1>
            <div>
                달력 위치
            </div>
            <Link href="/">홈으로</Link>
            <Link href="/write">오늘 일기 쓰기</Link>
        </>
    )
}

export default Calendar