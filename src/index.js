import React from "react"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import App from "./App"
import "./index.css"

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
)
