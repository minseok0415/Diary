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
    const [fixCanvas, setFixCanvas] = useState(false)

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
                    <p>{diaryData.title}</p>
                    <p>{diaryData.date}</p>
                </div>
                <Canvas
                    saveCanvasData={setCanvasData}
                    imageSrc={canvasData}
                    drawingEnable={fixCanvas}
                />
                <textarea
                    value={diaryData.content}
                    readOnly
                />
            </div>
            <div>
                <button>수정</button>
                <button
                    onClick={deleteDiary}
                >삭제</button>
            </div>
        </>
    )
}

export default Diary