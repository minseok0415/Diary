"use client"
import { ChangeEvent, useEffect, useState } from "react"
import Canvas from "@/components/canvas"
import { Container, GitHub, GlobalStyle } from "@/styles/common"
import { Bookmark, Bookmarks, Button, Buttons, Content, Detail, DiamondMid, DiamondTop, Options, Page, Title, TitleWraper, VerticalLine, WrittenDate } from "@/styles/diary"
import Link from "next/link"

const Write = () => {
    const [currentDate, setCurrentDate] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [numberDate, setNumberDate] = useState("")
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
        setNumberDate(`${year}-${parseInt(month)}-${parseInt(day)}`)
    }, [])

    useEffect(() => {
        if (numberDate.length !== 0) {
            console.log(numberDate)
            checkAlreadyExist()
        }
    }, [numberDate])

    const checkAlreadyExist = async () => {
        await fetch(`http://localhost:3000/api/check/diary?date=${numberDate}`, {
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
                    if (data.id !== -1) {
                        alert("해당 날짜에 일기가 존재하여 세부 페이지로 이동합니다.")
                        window.location.replace(`/view/${data.id}`)
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }

    const saveDiary = async () => {
        const DTO = {
            title: title,
            content: content,
            date: numberDate,
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
                    window.history.back()
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }
    
    return (
        <Container>
            <GlobalStyle />
            <Detail>
                <VerticalLine />
                <Page>
                    <TitleWraper>
                        <Title
                            value={title}
                            placeholder="제목"
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTitle(() => e.target.value)}
                        />
                        <WrittenDate>{currentDate}</WrittenDate>
                    </TitleWraper>
                    <Canvas saveCanvasData={setCanvasData} />
                </Page>
                <Page>
                    <Content
                        value={content}
                        placeholder="오늘 하루를 기록해보세요."
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(() => e.target.value)}
                    />
                    <Options>
                        <Buttons>
                            <Button
                                onClick={saveDiary}
                            >저장</Button>
                            <Button
                                onClick={() => {
                                    window.history.back()
                                }}
                            >취소</Button>  
                        </Buttons>
                        <Bookmarks>
                            <DiamondTop />
                            <DiamondMid />
                            <Link href="/">
                                <Bookmark>
                                    홈으로
                                </Bookmark>
                            </Link>
                            <Link href="/view">
                                <Bookmark>
                                    일기 목록
                                </Bookmark>
                            </Link>
                        </Bookmarks>
                    </Options>
                </Page>
            </Detail>
            <GitHub onClick={() => window.open("https://github.com/minseok0415/Diary")} />
        </Container>
    )
}

export default Write
