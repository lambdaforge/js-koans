import "./style.css";
import {createElement} from "react";
import ReactDOM from "react-dom";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {AppContainer} from "./components/App.js";

function run() {
  let store = createStore(reducer);
  
  ReactDOM.render(
    createElement(Provider, {store: store}, createElement(AppContainer)),
    document.getElementById('app')
  );
}

document.onload = run();
