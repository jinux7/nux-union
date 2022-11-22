"use strict";
const index$1 = require("./index2.js");
const componentsArr = [];
for (let key in index$1) {
  componentsArr.push(index$1[key]);
}
const index = {
  install: (app) => {
    componentsArr.forEach((c) => app.use(c));
  }
};
module.exports = index;
