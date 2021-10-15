import { DragEvent } from "react"

/** types */
type dragEventType = DragEvent<HTMLDivElement>

/** handlers */
export const handleDragStart = (e: dragEventType) => {
  /** save squareId via dataTransfer so it can be accessed via ondrop event */
  e.dataTransfer.effectAllowed = "copy"
  const squareId = (e.target as HTMLDivElement).id
  e.dataTransfer.setData("text/plain", squareId)
}
