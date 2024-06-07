"use client"
import Link from "next/link"
import Calendar from "@/components/calendar"
import { Container, GitHub, GlobalStyle } from "@/styles/common"
import { Box, Button, DiamondLeft, DiamondRight, List, Title, VerticalLine, Wraper } from "@/styles/view"

const View = () => {
    return (
        <Container>
            <GlobalStyle />
            <List>
                <VerticalLine />
                <Title>일기 목록</Title>
                <Box>
                    <Calendar />
                </Box>
                <Wraper>
                    <Link href="/">
                        <Button>
                            홈으로
                        </Button>
                    </Link>
                    <DiamondLeft />
                    <Link href="/write">
                        <Button>
                            오늘 일기
                        </Button>
                    </Link>
                    <DiamondRight />
                </Wraper>
            </List>
            <GitHub onClick={() => window.open("https://github.com/minseok0415/Diary")} />
        </Container>
    )
}

export default View