import { Dispatch, SetStateAction, DragEvent } from "react"
import { Obj } from "../../../types"

/** types */
type setEnterType = Dispatch<SetStateAction<boolean>>
type dragEventType = DragEvent<HTMLDivElement>
type setSquaresType = Dispatch<SetStateAction<Obj[]>>

/** handlers */
export const handleDragEnter = (setEnter: setEnterType) => (e: dragEventType) => {
  e.preventDefault()
  e.stopPropagation()
  setEnter(true)
}
export const handleDragLeave = (setEnter: setEnterType) => (e: dragEventType) => {
  e.preventDefault()
  e.stopPropagation()
  setEnter(false)
}
export const handleDrop = (setEnter: setEnterType, setSquares: setSquaresType) => (e: dragEventType) => {
  e.preventDefault()
  e.stopPropagation()
  setEnter(false)
  /** gets data from dragstart event via dataTransfer */
  const value = e.dataTransfer.getData("text/plain")
  /** get square html via its id */
  const squareHtml = document.getElementById(value)
  // e.target.append(html?.cloneNode(true)) // <- went via this route and wasted a lot of time
  setSquares((prevSquares: Obj[]) => {
    /** save squareColor to reconstruct it later */
    const squareId = `${prevSquares.length}`
    const squareColor = squareHtml?.style.background || ""
    const squarePositionX = `${e.clientX}`
    const squarePositionY = `${e.clientY}`
    const squareProperties = { squareId, squareColor, squarePositionX, squarePositionY }
    const squares = [...prevSquares, squareProperties]
    localStorage.setItem("squares", JSON.stringify(squares))
    return squares
  })
}
export const handleDragOver = (e: dragEventType) => {
  e.preventDefault()
  e.stopPropagation()
}
