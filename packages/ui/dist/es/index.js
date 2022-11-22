import components from "./index2.js";
const componentsArr = [];
for (let key in components) {
  componentsArr.push(components[key]);
}
const index = {
  install: (app) => {
    componentsArr.forEach((c) => app.use(c));
  }
};
export {
  index as default
};
