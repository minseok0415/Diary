"use client"
import { GlobalStyle, Container, GitHub } from "@/styles/common"
import { Button, Diary, Title, Wraper } from "@/styles/home"
import Link from "next/link"

const Home = () => {
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
      <GitHub onClick={() => window.open("https://github.com/minseok0415/Diary")} />
    </Container>
  )
}

export default Home