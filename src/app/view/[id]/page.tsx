"use client"
import Canvas from "@/components/canvas"
import { useEffect, useState } from "react"

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
                        value={diaryData.title}
                        readOnly={!fixDiary}
                        onChange={(e) => setDiaryData((prev) => ({...prev, title: e.target.value}))}
                    />
                    <p>{diaryData.date}</p>
                </div>
                <Canvas
                    saveCanvasData={setCanvasData}
                    imageSrc={canvasData}
                    drawingEnable={fixDiary}
                />
                <textarea
                    value={diaryData.content}
                    readOnly={!fixDiary}
                    onChange={(e) => setDiaryData((prev) => ({...prev, content: e.target.value}))}
                />
            </div>
            <div>
                {
                    fixDiary ?
                    <button
                        onClick={putDiary}
                    >완료</button> :
                    <button
                        onClick={() => setFixDiary(() => true)}
                    >수정</button>
                }
                <button
                    onClick={deleteDiary}
                >삭제</button>
            </div>
        </>
    )
}

export default Diary