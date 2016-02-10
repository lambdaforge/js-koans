import "./style.css";
import {createElement} from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {routes} from "./routes.js";

function run() {
  let bHistory = createBrowserHistory();
  
  ReactDOM.render(
    createElement(Router, {children: routes, history: bHistory}),
    document.getElementById('app')
  );
}

document.onload = run();
