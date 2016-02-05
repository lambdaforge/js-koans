import React, {Component, createElement} from "react"
import ReactDOM from "react-dom"
import {Map} from "immutable"
const {a, input, div, h1, nav, button, p, span} = require("hyperscript-helpers")(React.createElement)

const NavBar = ({navs}) => nav(null, navs.map(item => a({href: "/#", key: item}, item)))

const Welcome = ({welcome}) => h1(null, welcome)

const Feedback = ({result, hidden}) => p({hidden},
                                         (result instanceof String || typeof result  === 'string') ?
                                         result :
                                         result ? "That's right!" : "No, that's wrong. Try again!" )

const Koan = ({koan}) => p(null, koan)

class CodeInput extends Component {
  constructor (props) {
    super(props)
    this.state = {data: Map({code: "", result: false})}
  }
  render () {
    return div(
      null,
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
      span(null, this.props.code),
      button({
        onClick: () => {
          this.setState(state => {
            return {
              data: state.data.update("result", () => {
                try {
                  return eval(this.state.data.get("code") + this.props.code)
                }
                catch (err) {
                  return err.message
                }
              })
            }
          })
        }
      }, "Eval"),
      createElement(Feedback, {result: this.state.data.get("result"), hidden: false})
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
      createElement(CodeInput, {code: " === 2"})
    )
  }
}

ReactDOM.render(
  createElement(App, null),
  document.getElementById('app')
)
