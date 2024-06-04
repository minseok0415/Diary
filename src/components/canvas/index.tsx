"use client"
import { CanvasComponent, CanvasContainer } from "@/styles/canvas"
import React, { MouseEvent, useEffect, useRef, useState } from "react"

const Canvas: React.FC<{ saveCanvasData: (data: string) => void, imageSrc?: string, drawingEnable?: boolean }> = ({ saveCanvasData, imageSrc, drawingEnable = true }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null)
    const [painting, setPainting] = useState(false)
    
    const canvasSize = 360
    
    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            canvas.width = canvasSize
            canvas.height = canvasSize
            canvas.style.cssText += "background-color: #fff"
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.lineJoin = "round"
                ctx.lineWidth = 2.5
                ctx.strokeStyle = "#000000"
                setGetCtx(ctx)

                if (imageSrc) {
                    const img = new Image()
                    img.src = imageSrc
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                    }
                }
            }
        }
    }, [imageSrc])

    const drawFn = (e: MouseEvent<HTMLCanvasElement>) => {
        if (drawingEnable) {
            const mouseX = e.nativeEvent.offsetX
            const mouseY = e.nativeEvent.offsetY
            if (getCtx) {
                if (!painting) {
                    getCtx.beginPath()
                    getCtx.moveTo(mouseX, mouseY)
                } else {
                    getCtx.lineTo(mouseX, mouseY)
                    getCtx.stroke()
                }
            }
        }
    }

    const saveCanvas = () => {
        const canvas = canvasRef.current
        if (canvas) {
            const dataURL = canvas.toDataURL()
            saveCanvasData(dataURL)
        }
    }

    const resetCanvas = () => {
        if (getCtx) {
            getCtx.clearRect(0, 0, canvasSize, canvasSize)
        }
    }

    return (
        <CanvasContainer enable={`${drawingEnable}`}>
            <CanvasComponent
                ref={canvasRef}
                onMouseDown={() => setPainting(true)}
                onMouseUp={() => {
                    setPainting(false)
                    saveCanvas()
                }}
                onMouseMove={(e: MouseEvent<HTMLCanvasElement>) => drawFn(e)}
                onMouseLeave={() => {
                    setPainting(false)
                    saveCanvas()
                }}
            />
            <button onClick={resetCanvas}>리셋</button>
        </CanvasContainer>
    )
}

export default Canvas