import components from "./index2.js";
import { default as default2 } from "./button/index.js";
const index = {
  install: (app) => {
    components.forEach((c) => app.use(c));
  }
};
export {
  default2 as Button,
  index as default
};
