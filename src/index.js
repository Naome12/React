import React from "react"
import ReactDOM from "react-dom"
import {App} from "./App.jsx"
import "./style.css"

const root  = ReactDOM.createRoot( document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)