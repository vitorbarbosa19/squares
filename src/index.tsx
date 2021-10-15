import React from "react"
import ReactDom from "react-dom"
import { load as FontLoader } from "webfontloader"
import App from "./App"
import "./index.css"

FontLoader({
  google: { families: ["Rubik:500,600", "Work Sans:300,400,500", "Karla"] },
})

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app"),
)
