interface Props {
    params: { id: number },
}

const Diary = (props: Props) => {
    const diaryID = props.params.id

    return (
        <>
            {diaryID}
        </>
    )
}

export default Diary