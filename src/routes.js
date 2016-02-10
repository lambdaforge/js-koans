import {Koans} from "./components/Koans.js";

export const routes = [
  {path: "/", component: Koans},
  {path: "/koans/:koanId", component: Koans}
];
