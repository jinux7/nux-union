"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$2 = require("./index2.js");
const index$1 = require("./button/index.js");
const index = {
  install: (app) => {
    index$2.default.forEach((c) => app.use(c));
  }
};
exports.Button = index$1;
exports.default = index;
