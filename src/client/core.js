import React, {Component, createElement} from "react"
import ReactDOM from "react-dom"
import {Map} from "immutable"
const {a, input, div, h1, nav, p, span} = require("hyperscript-helpers")(React.createElement)


const NavBar = ({navs}) => nav(null, navs.map(item => a({href: "/#", key: item}, item)))

const Welcome = ({welcome}) => h1(null, welcome)

const Feedback = ({feedback, hidden}) => p({hidden}, feedback)

const Koan = ({koan}) => p(null, koan)

class CodeInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: Map({code: ""})
    }
  }
  render () {return div(null,
               input({
                 value: this.state.data.get("code"),
                 placeholder: "Fill in the code",
                 onChange: (event) => {
                   let newVal = event.target.value
                   this.setState(state => {
                     return {
                       data: state.data.update("code", () => newVal)}
                   })
                 }
               }),
      span(null, this.props.code)
    )
  }
}

class App extends Component {
  render () {
    return div(
      null,
      createElement(Welcome, {welcome: "Welcome to JavaScript Koans!"}),
      createElement(NavBar, {navs: [1,2,3]}),
      createElement(Koan, {koan: "Equality"}),
      createElement(CodeInput, {code: " === 2"}),
      createElement(Feedback, {feedback: "That's right!", hidden: false})
    )
  }
}

ReactDOM.render(
  createElement(App, null),
  document.getElementById('app')
)
