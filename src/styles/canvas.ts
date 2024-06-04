import styled from "styled-components"

export const CanvasContainer = styled.div<{enable: string}>`
    width: 22.5rem;
    height: 25rem;

    border: ${props => props.enable === "true" ? "1px solid #d9d9d9" : "none"}
`

export const CanvasComponent = styled.canvas`
`