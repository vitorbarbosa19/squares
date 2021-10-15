import { CSSProperties } from "react"

export const container = (color: string, x?: string, y?: string, clicked?: boolean): CSSProperties => ({
  position: x && y ? "absolute" : "relative",
  top: `${Number(y) - 64}px`,
  left: `${Number(x) - 184}px`,
  width: "60px",
  height: "60px",
  border: clicked ? "2px solid #EB5757" : "none",
  cursor: x && y ? "pointer" : "grab",
  background: color,
})
