"use client"
import { MouseEvent, useEffect, useRef, useState } from "react"

const Canvas: React.FC<{ saveCanvasData: (data: string) => void, imageSrc?: string }> = ({ saveCanvasData, imageSrc }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null)
    const [painting, setPainting] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = 650
            canvas.height = 540
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

    const saveCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const dataURL = canvas.toDataURL();
            saveCanvasData(dataURL);
        }
    }

    return (
        <div>
            <canvas
                ref={canvasRef}
                onMouseDown={() => setPainting(true)}
                onMouseUp={() => {
                    setPainting(false)
                    saveCanvas()
                }}
                onMouseMove={e => drawFn(e)}
                onMouseLeave={() => {
                    setPainting(false)
                    saveCanvas()
                }}
            />
        </div>
    )
}

export default Canvas