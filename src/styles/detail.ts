import styled from "styled-components";

export const VerticalLine = styled.div`
    position: absolute;

    width: 0.1rem;
    height: 37rem;

    background-color: #E8E8E8;
    box-shadow: 0 0 2rem 0.1rem #888;

    z-index: -1;
`

export const Detail = styled.div`
    width: 52rem;
    height: 36rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: #f9f9f9;

    border-radius: 1rem;
    border-bottom: 1rem solid #EEF4F0;
    border-left: 0.6rem solid #c27d7e;
    border-right: 0.6rem solid #c27d7e;
    box-shadow: 0 0 2rem 1rem #EEF4F0 inset;

    z-index: 0;
`

export const Page = styled.div`
    width: 25rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const TitleWraper = styled.div`
    width: 80%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.textarea`
    width: 50%;

    font-size: 1.6rem;
    line-height: 2rem;

    resize: none;

    border: none;
    box-shadow: 0 0 0 1px #d9d9d9 inset;

    &:read-only {
        box-shadow: none;
        background-color: #00000000;
        cursor: default;
    }
`

export const WrittenDate = styled.div`
    width: 45%;
    height: 100%;
    font-size: 1.4rem;

    text-align: right;
`

export const Content = styled.textarea`
    width: 80%;
    height: 70%;

    resize: none;

    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: 1rem;

    border: none;
    box-shadow: 0 0 0 1px #d9d9d9 inset;

    &:read-only {
        box-shadow: none;
        background-color: #00000000;
        cursor: default;
    }
`

export const Options = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Buttons = styled.div`
    margin-left: 2rem;

    display: flex;
    gap: 2rem;
`

export const Button = styled.button`
    width: 4rem;
    height: 1.6rem;

    font-size: 1.2rem;

    border: none;
    border-radius: 0.4rem;

    background-color: #EEF4F0;

    &:hover {
        background-color: #ebeeec;
    }
`

export const Bookmarks = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`

export const Bookmark = styled.div`
    width: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: -0.7rem;
    padding: 0.2rem 1rem;
    font-size: 1.4rem;

    background-color: #eb9689;
    box-shadow: -0.5rem 0 1rem 0 #c27d7e inset;

    &:hover {
        background-color: #e79799;
    }
`

export const DiamondTop = styled.div`
    width: 1.4rem;
    height: 1.4rem;

    background-color: #f9f9f9;

    position: fixed;

    transform: translate(-0.7rem, 0.3rem) rotate(45deg);
`

export const DiamondMid = styled.div`
    width: 1.4rem;
    height: 1.4rem;

    background-color: #f9f9f9;

    position: fixed;

    transform: translate(-0.7rem, 3.2rem) rotate(45deg);
`