import Link from "next/link"

const Home = () => {
  return (
    <>
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