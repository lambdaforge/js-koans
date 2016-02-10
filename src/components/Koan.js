import {Component, createElement} from "react";
import Hyperscript from "hyperscript-helpers";
import {Map} from "immutable";

const {h3, div, header, footer, span, p, input} = Hyperscript(createElement);

export class Koan extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: Map({
        code: "",
        hint: "",
        feedback: "test"
      })
    };
  }
  render () {
    let {byline, hint, code, koan} = this.props,
        codeFragments = code.split("X"),
        evalCode = codeFragments[0] + this.state.data.get("code") + codeFragments[1];

    return div({className: "koan"},
               header(
                 {className: "-text-center"},
                 h3(null, koan),
                 p({className: "byline"}, byline)),

               div({className: "koan-code"},
                   div({className: "code-input -horizontal"},
                       span(null, codeFragments[0]),
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
                       span(null, codeFragments[1])),
                   footer({className: "code-warning"}, "You have not")),
               div({className: "koan-feedback"}, null)
              );
  }
}
