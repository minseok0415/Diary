import Canvas from "@/components/canvas"

const Write = () => {
    return (
        <>
            <div>
                <div>
                    <input type="text" />
                    <p>오늘 날짜</p>
                </div>
                <Canvas />
                <textarea />
            </div>
            <div>
                <button type="submit">저장</button>
                <button type="button">취소</button>
            </div>
        </>
    )
}

export default Write
