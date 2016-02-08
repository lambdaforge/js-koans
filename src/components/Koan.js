import {Component, createElement} from "react";
import Hyperscript from "hyperscript-helpers";
import {Map} from "immutable";

const {div, span, p, input} = Hyperscript(createElement);

const Feedback = ({feedback, hidden}) => p({hidden}, feedback);

export class Koan extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: Map({
        code: "",
        feedback: ""
      })
    };
    this.submit = this.submit.bind(this);
  }
  submit (code) {
    let {nextKoan} = this.props;
    this.setState(state => {
      return {
        data: state.data.update("feedback", () => {
          try {
            let result = eval(code);
            if (result) {
              this.setState({
                data: Map({
                  code: "",
                  result: false
                })
              });
              nextKoan();
              return "";
            } else {
              return "That's not correct!";
            }
          }
          catch (err) {
            return err.message;
          }
        })
      };
    });
  }
  render () {
    let {code, koan} = this.props,
        codeFragments = code.split("X"),
        evalCode = codeFragments[0] + this.state.data.get("code") + codeFragments[1];
    return div(
      null,
      p(null, koan),
      span(null, codeFragments[0]),
      input({
        value: this.state.data.get("code"),
        placeholder: "Fill in the code",
        onKeyDown: (event) => {
          if (event.keyCode === 13) {
            this.submit(evalCode);
          }
        },
        onChange: (event) => {
          let newVal = event.target.value
          this.setState(state => {
            return {
              data: state.data.update("code", () => newVal)}
          })
        }
      }),
      span(null, codeFragments[1]),
      createElement(Feedback, {
        feedback: this.state.data.get("feedback"),
        hidden: false
      })
    );
  }
}
