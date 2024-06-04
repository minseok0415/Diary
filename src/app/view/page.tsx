"use client"
import Link from "next/link"
import Calendar from "@/components/calendar"
import { Container, GlobalStyle } from "@/styles/common"
import { Box, Button, DiamondLeft, DiamondRight, List, Title, Wraper } from "@/styles/view"

const View = () => {
    return (
        <Container>
            <GlobalStyle />
            <List>
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
        </Container>
    )
}

export default View