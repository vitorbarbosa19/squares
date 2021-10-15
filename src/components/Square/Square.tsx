import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { handleDragStart } from "./handlers"
import { Obj } from "../../types"
import { container } from "./styles"

type SquareProps = {
  id: string
  color: string
  x?: string
  y?: string
  setSquares?: Dispatch<SetStateAction<Obj[]>>
}

const Square = ({ id, color, x, y, setSquares }: SquareProps) => {
  /** control if square has been clicked */
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if (x && y) setClicked(prevState => !prevState)
  }
  /** implement delete function */
  const handleDelete = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "Backspace" && x && y && clicked) {
      setSquares &&
        setSquares((prevSquares: Obj[]) => {
          /** remove clicked square */
          console.log(prevSquares)
          const squaresLeft = prevSquares.filter(square => square.squareId !== id)
          const newSquares = [...squaresLeft]
          console.log(newSquares)
          localStorage.setItem("squares", JSON.stringify(newSquares))
          return newSquares
        })
    }
  }
  /** listen to keyboard events */
  useEffect(() => {
    document.addEventListener("keydown", handleDelete)
    return () => document.removeEventListener("keydown", handleDelete)
  }, [clicked])
  return (
    <div
      id={id}
      draggable={!(x && y)}
      onDragStart={handleDragStart}
      onClick={handleClick}
      style={container(color, x, y, clicked)}
    />
  )
}

export default Square
