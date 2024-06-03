"use client"
import { useEffect } from "react"

interface Props {
    params: { id: number },
}

const Diary = (props: Props) => {
    const diaryID = props.params.id

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