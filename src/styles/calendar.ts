import styled from "styled-components";

export const CalenderContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const CalendarSetting = styled.div`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
`

export const Empty = styled.div`
    width: 3rem;
`

export const Wraper = styled.div`
    width: 30rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 1rem;

    background-color: #EEF4F0;
`

export const ChangeMonth = styled.button`
    width: 3rem;

    font-size: 2rem;

    border: none;
    background: none;

    cursor: pointer;
`

export const Year = styled.input`
    width: 3.6rem;
    height: 2rem;

    font-size: 1.4rem;

    border: none;
    background: none;

    cursor: pointer;
`

export const Month = styled.select`
    width: 3rem;
    height: 2rem;

    font-size: 1.4rem;

    border: none;
    background: none;

    cursor: pointer;
`

export const MonthOption = styled.option`
    font-size: 1rem;
`

export const Today = styled.button`
    width: 3rem;

    font-size: 1.4rem;

    border: none;
    background: none;

    cursor: pointer;
`

export const CalendarTable = styled.table`
    width: 80%;
    height: 20rem;

    border-spacing: 0rem;
    box-shadow: 0 0 1rem 0 #EEF4F0;
`

export const CalendarTableHead = styled.thead`
    height: 2rem;

    background-color: #eb9689;
`

export const CalendarTableBody = styled.tbody`
    background-color: #EEF4F0;

    td {
        width: 1rem;

        padding: 0;

        text-align: center;
        border: 1px solid #ebeeec;

        cursor: default;

        &:hover {
            background-color: #e4f0e8;
        }

        a > div {
            margin: auto;

            width: 50%;
            height: 80%;
            border-radius: 0.8rem;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #CDE4B6;
        }
        div {
            width: 100%;
            height: 100%;
            background-color: #ebeeec;
        }
    }
`