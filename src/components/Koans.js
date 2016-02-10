import {Component, createElement} from "react";
import {Koan} from "./Koan.js";
import {Header} from "./Home.js";
import {fromJS} from "immutable";
import Hyperscript from "hyperscript-helpers";

const {button, div} = Hyperscript(createElement);

const lessons = fromJS([
  {
    koan: "Equality",
    byline: "test",
    hint: "hint",
    code: "X === 42"
  },{
    koan: "Addition",
    byline: "test",
    hint: "hint",
    code: "37 + X === 42"
  },
  {
    koan: "Multiplication",
    byline: "test",
    hint: "hint",
    code: "14 * X === 42"
  }
]);


export class Koans extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return div(
      null,
      createElement(Header, null),
      createElement(Koan, lessons.first().toJS()),
      button({onClick: () => console.log("click!")}, "prev")
    );
  }
}
