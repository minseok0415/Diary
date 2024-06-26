"use client"
import { CanvasBrushSize, CanvasBrushCircle, CanvasButton, CanvasComponent, CanvasContainer, CanvasTools, CanvasBrushCircleWraper, CanvasBrushColor } from "@/styles/canvas"
import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"

const Canvas: React.FC<{ saveCanvasData: (data: string) => void, imageSrc?: string, drawingEnable?: boolean }> = ({ saveCanvasData, imageSrc, drawingEnable = true }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null)
    const [painting, setPainting] = useState(false)
    
    const canvasSize = 360
    const [brushSize, setBrushSize] = useState(2.5)
    const [brushColor, setBrushColor] = useState("#000000")
    const [brushType, setBrushType] = useState("지우개")
    const [tempColor, setTempColor] = useState("#000000")

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            canvas.width = canvasSize
            canvas.height = canvasSize
            canvas.style.cssText += "background-color: #fff"
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.lineJoin = "round"
                ctx.lineWidth = brushSize
                ctx.strokeStyle = brushColor
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

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.lineWidth = brushSize
                
                setGetCtx(ctx)
            }
        }
    }, [brushSize])

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.strokeStyle = brushColor
                
                setGetCtx(ctx)
            }
        }
    }, [brushColor])

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

    const handleBrushType = () => {
        if (brushType === "펜") {
            setBrushType("지우개")
            setBrushColor(tempColor)
        }
        else {
            setBrushType("펜")
            setTempColor(brushColor)
            setBrushColor("#ffffff")
        }
    }

    return (
        <CanvasContainer $enable={`${drawingEnable}`}>
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
            {
                drawingEnable &&
                <CanvasTools>
                    <CanvasButton onClick={resetCanvas}>리셋</CanvasButton>
                    <CanvasBrushSize
                        type="range"
                        min={0.1}
                        max={15.0}
                        step={0.1}
                        value={brushSize}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setBrushSize(e.target.value as unknown as number)}
                    />
                    <CanvasBrushCircleWraper>
                        <CanvasBrushCircle
                            $size={brushSize}
                            $color={brushColor}
                        />
                    </CanvasBrushCircleWraper>
                    <CanvasBrushColor
                        type="color"
                        value={brushColor}
                        disabled={brushType === "펜"}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setBrushColor(e.target.value)}
                    />
                    <CanvasButton onClick={handleBrushType}>
                        {brushType}
                    </CanvasButton>
                </CanvasTools>
            }
        </CanvasContainer>
    )
}

export default Canvas