"use client"
import Canvas from "@/components/canvas"
import { Container, GlobalStyle } from "@/styles/common"
import { Bookmark, Bookmarks, Button, Buttons, Content, Detail, DiamondMid, DiamondTop, Options, Page, Title, TitleWraper, VerticalLine, WrittenDate } from "@/styles/diary"
import Link from "next/link"
import { ChangeEvent, useEffect, useState } from "react"

interface Props {
    params: { id: number },
}

interface DiaryData {
    id: number,
    title: string,
    content: string,
    date: string,
    canvasData: string
}

const Diary = (props: Props) => {
    const diaryID = props.params.id

    const [diaryData, setDiaryData] = useState<DiaryData>({id: 0, title: "", content: "", date: "", canvasData: ""})
    const [canvasData, setCanvasData] = useState("")
    const [fixDiary, setFixDiary] = useState(false)

    const toRegularForm = (date: string) => {
        if (date === "") return

        const splited = date.split('-')
        const year = splited[0]
        const month = splited[1].length === 2 ? splited[1] : '0' + splited[1]
        const day = splited[2].length === 2 ? splited[2] : '0' + splited[2]

        const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
        const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        const dayOfWeekIndex = dateObj.getDay()

        return `${year}년 ${month}월 ${day}일 ${daysOfWeek[dayOfWeekIndex]}`
    }

    useEffect(() => {
        getDiaryById()
    }, [])

    const getDiaryById = async () => {
        await fetch(`http://localhost:3000/api/diary?id=${diaryID}`, {
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
                    setDiaryData(data)
                    setCanvasData(data.canvasData)
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }

    const putDiary = async () => {
        const DTO = {
            title: diaryData.title,
            content: diaryData.content,
            date: diaryData.date,
            canvasData: canvasData
        }
        
        await fetch(`http://localhost:3000/api/diary?id=${diaryID}`, {
            method: "PUT",
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
                    setFixDiary(false)
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }

    const deleteDiary = async () => {
        const confirmation = window.confirm('정말로 삭제하시겠습니까?')
        if (confirmation) {
            await fetch(`http://localhost:3000/api/diary?id=${diaryID}`, {
                method: "DELETE"
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
    }

    return (
        <Container>
            <GlobalStyle />
            <Detail>
                <VerticalLine />
                <Page>
                    <TitleWraper>
                        <Title
                            value={diaryData.title}
                            placeholder="제목"
                            readOnly={!fixDiary}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDiaryData((prev) => ({...prev, title: e.target.value}))}
                        />
                        <WrittenDate>{toRegularForm(diaryData.date)}</WrittenDate>
                    </TitleWraper>
                    <Canvas
                        saveCanvasData={setCanvasData}
                        imageSrc={canvasData}
                        drawingEnable={fixDiary}
                    />
                </Page>
                <Page>
                    <Content
                        value={diaryData.content}
                        placeholder="오늘 하루는 정말 보람찼다."
                        readOnly={!fixDiary}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDiaryData((prev) => ({...prev, content: e.target.value}))}
                    />
                    <Options>
                        <Buttons>
                            {
                                fixDiary ?
                                <Button
                                    onClick={putDiary}
                                >완료</Button> :
                                <Button
                                    onClick={() => setFixDiary(() => true)}
                                >수정</Button>
                            }
                            <Button
                                onClick={deleteDiary}
                            >삭제</Button>
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
        </Container>
    )
}

export default Diary