import {Component, createElement} from "react";
import {connect} from "react-redux";
import {Koan} from "./Koan.js";
import Hyperscript from "hyperscript-helpers";
import * as actionCreators from "../action_creators";
const {button, div, h2,nav, a} = Hyperscript(createElement);

const Welcome = ({welcome}) => h2(null, welcome);

const NavBar = () =>
        nav(null,
            [1,2,3].map(item => a({href: "/#", key: item}, item)));

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
      koanNode = createElement(Koan, {code, koan});
    } else {
      koanNode = createElement(Finish, {congratulation: "You achieved wisdom!"});
    }  

    return div(
      null,
      createElement(Welcome, {welcome}),
      createElement(NavBar, null),
      koanNode,
      button({onClick: previousKoan, disabled: knowledge.size === 0}, "prev"),
      button({onClick: nextKoan, disabled: lessons.size === 0}, "next")
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

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
