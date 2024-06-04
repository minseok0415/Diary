import styled from "styled-components";

export const List = styled.div`
    width: 52rem;
    height: 36rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: #f9f9f9;

    border-radius: 1rem;
    border-bottom: 1rem solid #EEF4F0;
    border-left: 0.6rem solid #c27d7e;
    border-right: 0.6rem solid #c27d7e;
    box-shadow: 0.1rem 0 1rem 0.1rem #EEF4F0 inset;
`

export const Title = styled.div`
    font-size: 3.6rem;

    margin-top: 2rem;
`

export const Box = styled.div`
    width: 42rem;
    height: 24rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wraper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`

export const Button = styled.div`
    width: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    font-size: 1.4rem;

    background-color: #eb9689;
    box-shadow: 0.5rem 0 1rem 0 #c27d7e inset;

    &:hover {
        background-color: #e79799;
    }
`

export const DiamondLeft = styled.div`
    width: 2.5rem;
    height: 2.5rem;

    background-color: #f9f9f9;

    position: fixed;

    transform: translate(6.8rem, 0.52rem) rotate(45deg);
`

export const DiamondRight = styled.div`
    width: 2.5rem;
    height: 2.5rem;

    background-color: #f9f9f9;

    position: fixed;

    transform: translate(42.7rem, 0.52rem) rotate(45deg);
`