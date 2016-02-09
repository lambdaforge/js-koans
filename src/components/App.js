import {Component, createElement} from "react";
import {connect} from "react-redux";
import {Koan} from "./Koan.js";
import Hyperscript from "hyperscript-helpers";
import * as actionCreators from "../action_creators";
const {button, div, h2,nav, a, img} = Hyperscript(createElement);

import {Header, NavBar} from "./Home.js";

const Welcome = ({welcome}) => h2(null, welcome);


const Finish  = ({congratulation}) => h2(null, congratulation);

class App extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const {lessons, welcome, knowledge, nextKoan, previousKoan} = this.props;
    let koanNode;

    if (lessons.size > 0) {
      let {code, koan} = lessons.first();
      koanNode = createElement(Koan, {code, koan, nextKoan, byline: "Byline"});
    } else {
      koanNode = createElement(Finish, {congratulation: "You achieved wisdom!"});
    }

    return div(
      null,
      createElement(Header, null),
      koanNode,
      button({onClick: previousKoan, disabled: knowledge.size === 0}, "prev")
    );
  }
}

function mapStateToProps (state) {
  return {
    welcome: state.get("welcome"),
    knowledge: state.get("knowledge"),
    lessons: state.get("lessons")
  };
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
