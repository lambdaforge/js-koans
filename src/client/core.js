import React, {createElement} from "react"
import ReactDOM from "react-dom"
const {h1} = require("hyperscript-helpers")(React.createElement)

const Welcome = (props) => h1(null, props.welcome)

ReactDOM.render(
  createElement(Welcome, {welcome: "Welcome to JavaScript Koans!"}),
  document.getElementById('app')
)
