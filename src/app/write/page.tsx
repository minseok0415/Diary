"use client"
import { useEffect, useRef, useState, MouseEvent } from "react";

const Write = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null);
    const [painting, setPainting] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 650;
            canvas.height = 540;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.lineJoin = "round";
                ctx.lineWidth = 2.5;
                ctx.strokeStyle = "#000000";
                setGetCtx(ctx);
            }
        }
    }, []);

    const drawFn = (e: MouseEvent<HTMLCanvasElement>) => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        if (getCtx) {
            if (!painting) {
                getCtx.beginPath();
                getCtx.moveTo(mouseX, mouseY);
            } else {
                getCtx.lineTo(mouseX, mouseY);
                getCtx.stroke();
            }
        }
    };

    return (
        <>
            <div>
                <div>
                    <input type="text" />
                    <input type="date" />
                </div>
                <div>
                    <canvas
                        ref={canvasRef}
                        onMouseDown={() => setPainting(true)}
                        onMouseUp={() => setPainting(false)}
                        onMouseMove={e => drawFn(e)}
                        onMouseLeave={() => setPainting(false)}
                    />
                </div>
                <textarea />
            </div>
            <div>
                <button type="submit">저장</button>
                <button type="button">취소</button>
            </div>
        </>
    );
};

export default Write;
