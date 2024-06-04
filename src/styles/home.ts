import styled from "styled-components"

export const Diary = styled.div`
  width: 26rem;
  height: 36rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  border-radius: 1rem;
  border-top: 1rem solid #EEF4F0;
  border-left: 2.6rem solid #c27d7e;
  box-shadow: 0.1rem 0 1rem 0.1rem #c27d7e inset;

  background-color: #eb9689;
`

export const Title = styled.div`
  font-size: 4.4rem;

  margin-bottom: 2rem;
`

export const Wraper = styled.div`
`

export const Button = styled.div`
  font-size: 2rem;

  width: 24rem;
  padding: 1rem;

  box-shadow: 1rem 0 1rem 0.1rem #d0d7d2 inset;

  background-color: #EEF4F0;

  &:hover {
    background-color: #ebeeec;
  }
`