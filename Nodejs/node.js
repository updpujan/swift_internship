//"use strict";

const number = require("./eventlopp.js");
number;
//three();
/*
//create server 
import { createServer, request } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
*/

//node.js is a javascript runtime environment that allows the js code to run outside a browser


//strict mode
//when used the strict mode some small error that js skips is handled by strict. based on certain rules and certain mistake that js ignore , when strict is used it will even catch that error
// or some functionality may require the use of strict to execute in different behaviour
// in some case of js if we forget to write let,var js might automatically assign variable but if strict is used then it will throw error

if('1'==1){
  console.log(true);
}
if('1'===1){
  console.log(true);
}else console.log(false);
