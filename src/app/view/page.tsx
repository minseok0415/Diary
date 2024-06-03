"use client"
import Link from "next/link"
import Calendar from "@/components/calendar"

const View = () => {
    return (
        <>
            <h1>일기 목록</h1>
            <Calendar />
            <Link href="/">홈으로</Link>
            <Link href="/write">오늘 일기 쓰기</Link>
        </>
    )
}

export default View