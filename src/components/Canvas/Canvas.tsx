import React, { useState, useEffect } from "react"
import Square from "../Square"
import { handleDragEnter, handleDragLeave, handleDragOver, handleDrop } from "./handlers"
import { Obj } from "../../types"
import { container, initialMsg } from "./styles"

const Canvas = () => {
  /** determines if dropzone has been entered */
  const [enter, setEnter] = useState(false)
  /** saves colors of each square added to the canvas */
  const [squares, setSquares] = useState<Obj[]>([])
  /** get saved squares to implement persistence */
  useEffect(() => {
    const savedSquares = localStorage.getItem("squares") || "[]"
    setSquares(JSON.parse(savedSquares))
  }, [])
  return (
    <div
      id="canvas"
      onDragEnter={handleDragEnter(setEnter)}
      onDragLeave={handleDragLeave(setEnter)}
      onDrop={handleDrop(setEnter, setSquares)}
      onDragOver={handleDragOver}
      style={container(enter)}
    >
      {squares.length === 0 ? (
        <div style={initialMsg}>Drag squares here</div>
      ) : (
        squares.map(({ squareId, squareColor, squarePositionX, squarePositionY }: Obj, index: number) => (
          <Square
            id={`${squareId}`}
            color={squareColor}
            x={squarePositionX}
            y={squarePositionY}
            setSquares={setSquares}
            key={index}
          />
        ))
      )}
    </div>
  )
}

export default Canvas
