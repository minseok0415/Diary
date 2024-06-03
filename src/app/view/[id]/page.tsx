"use client"
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
                })
                .catch(error => {
                    console.error("Error:", error)
                })
    }

    return (
        <>
            {diaryID}
        </>
    )
}

export default Diary