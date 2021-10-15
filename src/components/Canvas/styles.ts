import { CSSProperties } from "react"

export const container = (enter: boolean): CSSProperties => ({
  position: "relative",
  display: "grid",
  rowGap: "10px",
  width: "100%",
  height: "100%",
  border: enter ? "2px dashed #2D9CDB" : "2px dashed rgb(204,204,204)",
  overflow: "hidden",
})

export const initialMsg: CSSProperties = {
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
}
