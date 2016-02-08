import React, {Component, createElement} from "react";
import Hyperscript from "hyperscript-helpers";
import {Map} from "immutable";

const {div, span, p, input, button} = Hyperscript(createElement);

const Feedback = ({result, hidden}) =>
        p({hidden},
          (result instanceof String || typeof result  === 'string') ?
          result :
          result ? "That's right!" : "No, that's wrong. Try again!" );

export class Koan extends Component {
  constructor (props) {
    super(props);
    this.state = {data: Map({code: "", result: false})};
  }
  render () {
    let {code, koan} = this.props,
        codeFragments = code.split("X");
    
    return div(
      null,
      p(null, koan),
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
      span(null, codeFragments[1]),
      button({
        onClick: () => {
          this.setState(state => {
            return {
              data: state.data.update("result", () => {
                try {
                  return eval(codeFragments[0] + this.state.data.get("code") + codeFragments[1]);
                }
                catch (err) {
                  return err.message;
                }
              })
            };
          });
        }
      }, "Eval"),
      createElement(Feedback, {result: this.state.data.get("result"), hidden: false})
    );
  }
}
