import { CalendarSetting, CalendarTable, CalendarTableBody, CalendarTableHead, CalenderContainer, ChangeMonth, Empty, Month, MonthOption, Today, Wraper, Year } from "@/styles/calendar"
import { ChangeEvent, useEffect, useState } from "react"

interface Diary {
    id: number,
    date: string
}

interface DiaryList extends Array<Diary> {}

const Calendar = () => {
    const [diaryList, setDiaryList] = useState<DiaryList>([])
    const [today, setToday] = useState("")

    useEffect(() => {
        getDiary()
        getToday()
    }, [])

    const getDiary = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}/api/list`, {
            method: "GET"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json()
                })
                .then(data => {
                    // console.log("Response data:", data)
                    setDiaryList(data)
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
            let diaryID = 0
            if (i === 0) contents.push("<tr>")
            else if (i % 7 === 0) {
                contents.push("</tr>")
                contents.push("<tr>")
            }
            diaryList.forEach((diary: Diary) => {
                if (diary.date === `${currentYear}-${currentMonth}-${calender[i]}`)
                    diaryID = diary.id
            })
            if (diaryID) {
                if (`${currentYear}-${currentMonth}-${calender[i]}` === today) {
                    contents.push(
                        `<td id="today">
                            <a href="/view/${diaryID}">
                                <div>
                                    ${calender[i]}
                                </div>
                            </a>
                        </td>`
                    )
                }
                else {
                    contents.push(
                        `<td>
                            <a href="/view/${diaryID}">
                                <div>
                                    ${calender[i]}
                                </div>
                            </a>
                        </td>`
                    )
                }
            }
            else if (calender[i] === "") {
                contents.push(
                    `<td>
                        <div />
                    </td>`
                )
            }
            else {
                if (`${currentYear}-${currentMonth}-${calender[i]}` === today) {
                    contents.push(
                        `<td id="today">
                            ${calender[i]}
                        </td>`
                    )
                }
                else {
                    contents.push(
                        `<td>
                            ${calender[i]}
                        </td>`
                    )
                }
            }
        }

        contents.push("</tr>")

        setCalender(contents.join(""))
    }

    const moveToToday = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1

        setCurrentYear(year)
        setCurrentMonth(month)
    }
    
    const changeMonth = (diff: number) => {
        setCurrentMonth(prev => prev + diff)
    }

    const getToday = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        const formattedDate = `${year}-${month}-${day}`
        setToday(formattedDate)
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

    useEffect(() => {
        changeYearMonth(currentYear, currentMonth)
    }, [diaryList])
    
    return (
        <CalenderContainer>
            <CalendarSetting>
                <Empty />
                <Wraper>
                    <ChangeMonth onClick={() => changeMonth(-1)}>
                        ◂
                    </ChangeMonth>
                    <Year
                        type="number"
                        value={currentYear}
                        max={2033}
                        min={2014}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentYear(parseInt(e.target.value))}
                    />
                    <Month
                        value={currentMonth}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrentMonth(parseInt(e.target.value))}
                    >
                        <MonthOption value="1">1월</MonthOption>
                        <MonthOption value="2">2월</MonthOption>
                        <MonthOption value="3">3월</MonthOption>
                        <MonthOption value="4">4월</MonthOption>
                        <MonthOption value="5">5월</MonthOption>
                        <MonthOption value="6">6월</MonthOption>
                        <MonthOption value="7">7월</MonthOption>
                        <MonthOption value="8">8월</MonthOption>
                        <MonthOption value="9">9월</MonthOption>
                        <MonthOption value="10">10월</MonthOption>
                        <MonthOption value="11">11월</MonthOption>
                        <MonthOption value="12">12월</MonthOption>
                    </Month>
                    <ChangeMonth onClick={() => changeMonth(1)}>
                        ▸
                    </ChangeMonth>
                </Wraper>
                <Today onClick={moveToToday}>
                    오늘
                </Today>
            </CalendarSetting>
            <CalendarTable>
                <CalendarTableHead>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </CalendarTableHead>
                { calender.length > 0 && <CalendarTableBody dangerouslySetInnerHTML={{__html: calender}}></CalendarTableBody> }
            </CalendarTable>
        </CalenderContainer>
    )
}

export default Calendar