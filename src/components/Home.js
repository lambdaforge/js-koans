import {createElement} from "react";
import Hyperscript from "hyperscript-helpers";
const {header, h1, h2, nav, a, img} = Hyperscript(createElement);

const AllKoansIcon = () =>
  createElement("svg", {style: {width: 12, height: 12}},
    createElement("rect", {x:0, y:0, width:5, height:5, style: {}}),
    createElement("rect", {x:7, y:0, width:5, height:5, style: {}}),
    createElement("rect", {x:0, y:7, width:5, height:5, style: {}}),
    createElement("rect", {x:7, y:7, width:5, height:5, style: {}}));

const NavBar = () =>
  nav({className: "navigation -horizontal"},
    a({href: "/"}, "Home"),
    a({href: "/koans/"},
      createElement(AllKoansIcon, null),
      "All Koans"),
    a({href: "/learn-more/"}, "Learn more")
   );

export const Header = () =>
  header({className: "container -small -center -text-center"},
    img({src: "/images/logo.png", width: 64, height: 64}),
    //h1({}, "公案"),
    h1({}, "JavaScript Koans"),
    h2({}, "Along the Path of Enlightenment"),
    createElement(NavBar, null)
  );

