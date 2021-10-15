import React from "react"
import Square from "../Square"
import { container } from "./styles"

const LeftBar = () => {
  return (
    <div id="leftbar" style={container}>
      <Square id="1" color="#4BCA81" />
      <Square id="2" color="#F7BA00" />
      <Square id="3" color="#2D9CDB" />
    </div>
  )
}

export default LeftBar
