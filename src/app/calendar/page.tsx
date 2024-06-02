"use client"
import { useEffect } from "react"

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
        </>
    )
}

export default Calendar