import { ChangeEvent, useEffect, useState } from "react"

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
    
    const [calender, setCalender] = useState<string>("")
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

    const checkLeapYear = (year: number) => {
        if (year % 400 === 0) return true
        else if (year % 100 === 0) return false
        else if (year % 4 === 0) return true
        else return false
    }
    
    const getFirstDayOfWeek = (year: number, month: number) => {
        let zero = ""
        if (month < 10) zero = "0"
        return (new Date(year + "-" + zero + month + "-" + "01")).getDay()
    }
    
    const changeYearMonth = (year: number, month: number) => {
        let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (month === 2) if (checkLeapYear(year)) monthDay[1] = 29
        let firstDay = getFirstDayOfWeek(year, month)
        let arrCalender = []

        for (let i = 0; i < firstDay; i++) {
            arrCalender.push("")
        }

        for (let i = 1; i <= monthDay[month - 1]; i++) {
            arrCalender.push(String(i))
        }

        let remainDay = 7 - (arrCalender.length % 7)

        if (remainDay < 7) {
            for (let i = 0; i < remainDay; i++) {
                arrCalender.push("")
            }
        }

        renderCalender(arrCalender)
    }

    const renderCalender = (calender: string[]) => {
        let contents = []

        for (let i = 0; i < calender.length; i++) {
            if (i === 0) contents.push("<tr>")
            else if (i % 7 === 0) {
                contents.push("</tr>")
                contents.push("<tr>")
            }
            contents.push(
                `<td>
                    <div>
                        <span>${calender[i]}</span>
                    </div>
                </td>`
            )
        }

        contents.push("</tr>")

        setCalender(contents.join(""))
    }
    
    const changeMonth = (diff: number) => {
        setCurrentMonth(prev => prev + diff)
    }
    
    useEffect(() => {
        if (currentMonth < 1) {
            setCurrentYear(prev => prev - 1)
            setCurrentMonth(12)
        }
        else if (currentMonth > 12) {
            setCurrentYear(prev => prev + 1)
            setCurrentMonth(1)
        }
        if (2014 > currentYear) {
            setCurrentYear(prev => prev + 1)
        }
        else if (2034 <= currentYear) {
            setCurrentYear(prev => prev - 1)
        }
        changeYearMonth(currentYear, currentMonth)
    }, [currentYear, currentMonth])
    
    return (
        <div>
            <div>
                <div>
                    <button onClick={() => changeMonth(-1)}>
                        {'<'}
                    </button>
                    <input
                        type="number"
                        value={currentYear}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentYear(parseInt(e.target.value))}
                    />
                    <select
                        value={currentMonth}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrentMonth(parseInt(e.target.value))}
                    >
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        <option value="3">3월</option>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                    <button onClick={() => changeMonth(1)}>
                        {'>'}
                    </button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>일</th>
                                <th>월</th>
                                <th>화</th>
                                <th>수</th>
                                <th>목</th>
                                <th>금</th>
                                <th>토</th>
                            </tr>
                        </thead>
                        { calender.length > 0 && <tbody dangerouslySetInnerHTML={{__html: calender}}></tbody> }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Calendar