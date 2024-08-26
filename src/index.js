import { greet } from "./lib/es-module.mjs";
const { greetCommonJS } = require("./lib/commonjs-module");

console.log(greet("World")); // From ES Module
console.log(greetCommonJS("World")); // From CommonJS Module
