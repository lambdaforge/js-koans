import {HomeContainer} from "./components/Home.js";
import {KoanContainer} from "./components/Koan.js";
import {KoansContainer} from "./components/Koans.js";
import {LearnMoreContainer} from "./components/LearnMore.js";
import {App} from "./components/App.js";

const components = [
  ["/", KoanContainer],
  ["/home", HomeContainer],
  ["/koans", KoansContainer],
  ["/koans/:koanId", KoanContainer],
  ["/learn-more", LearnMoreContainer]
];

export const routes = {
  component: App,
  childRoutes: components.map(([path, component]) => {
    return {
      path,
      component
    };
  })
};
