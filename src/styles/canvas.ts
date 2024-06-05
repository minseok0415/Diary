import styled from "styled-components"

export const CanvasContainer = styled.div<{enable: string}>`
    width: 22.5rem;
    height: 25rem;

    border: ${props => props.enable === "true" ? "1px solid #d9d9d9" : "none"}
`

export const CanvasComponent = styled.canvas`
    box-shadow: 0 -0.25rem 1rem 0.1rem #d9d9d9;
`

export const CanvasTools = styled.div`
    width: 80%;
    height: 2rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CanvasButton = styled.button`
    width: 3rem;
    height: 2rem;
    
    border: 1px solid #d9d9d9;
    border-radius: 1rem;
`

export const CanvasBrushSize = styled.input`
    width: 6rem;
    height: 0.4rem;

    background: linear-gradient(to right, #fafafa 0%, #eb9689 100%);
    border-radius: 1rem;
    border: 1px solid #d9d9d9;
    -webkit-appearance: none;
    accent-color: #d9d9d9;
`

export const CanvasBrushCircleWraper = styled.div`
    width: 1.1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CanvasBrushCircle = styled.div<{size: number, color: string}>`
    width: ${props => `${props.size / 15}rem`};
    height: ${props => `${props.size / 15}rem`};

    background-color: ${props => `${props.color}`};

    border: 1px solid #d9d9d9;
    border-radius: 10rem;
`

export const CanvasBrushColor = styled.input`
    width: 3rem;
    height: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 2rem;
`