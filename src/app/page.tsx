"use client"
import { GlobalStyle, Container } from "@/styles/common"
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
    </Container>
  )
}

export default Home