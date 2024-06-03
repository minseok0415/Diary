"use client"
import Link from "next/link"
import styled, { createGlobalStyle } from "styled-components"

const Home = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
    }
  `

  return (
    <>
      <GlobalStyle />
      <h1>나의 그림일기</h1>
      <Link href="/view">
        일기 목록
      </Link>
      <Link href="/write">
        오늘 일기 쓰기
      </Link>
    </>
  )
}

export default Home