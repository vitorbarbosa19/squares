import React from "react"
import LeftBar from "../components/LeftBar"
import Canvas from "../components/Canvas"
import { container } from "./styles"

const App = () => {
  return (
    <div style={container}>
      <LeftBar />
      <Canvas />
    </div>
  )
}

export default App
