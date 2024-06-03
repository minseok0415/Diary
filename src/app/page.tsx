"use client"
import Link from "next/link"
import styled, { createGlobalStyle } from "styled-components"

const Home = () => {
  const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Ownglyph_meetme-Rg';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    * {
      font-family: 'Ownglyph_meetme-Rg';
    }
    body {
      margin: 0;
    }
    a {
      color: black;
      text-decoration: none;
    }
  `

  return (
    <Container>
      <GlobalStyle />
      <Diary>
        <Title>나의 그림일기</Title>
        <Wraper>
          <Link href="/view">
            <Button>
              일기 목록
            </Button>
          </Link>
          <Link href="/write">
            <Button>
              오늘 일기 쓰기
            </Button>
          </Link>
        </Wraper>
      </Diary>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #4F5152;

  background-image: url("images/background.jpg");
  background-size: cover;
  background-blend-mode: exclusion;
`

const Diary = styled.div`
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

const Title = styled.div`
  font-size: 4.4rem;

  margin-bottom: 2rem;
`

const Wraper = styled.div`
`

const Button = styled.div`
  font-size: 2rem;

  width: 24rem;
  padding: 1rem;

  box-shadow: 1rem 0 1rem 0.1rem #d0d7d2 inset;

  background-color: #EEF4F0;

  &:hover {
    background-color: #ebeeec;
  }
`

export default Home