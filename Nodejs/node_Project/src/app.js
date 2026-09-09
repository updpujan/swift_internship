//const express = require("express");//comman JS module system and for export module.export = function/others;
//import express from "express"; //standarized JS module system and for export export {funcion/others};
//const app = express();
//console.log("Express installed and working");

import { add,sub,mul,div } from "./utils/calculator.js";
let a = 10,b=0;
console.log(`The addition of ${a} and ${b} is ${add(a,b)}`);
console.log(`The subtraction of ${a} and ${b} is ${sub(a,b)}`);
console.log(`The multipication of ${a} and ${b} is ${mul(a,b)}`);
console.log(`The division of ${a} and ${b} is ${div(a,b)}`);