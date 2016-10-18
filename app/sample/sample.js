"use strict";
//this is a simple test module, for the tests.
const greeting = (message) => {
    console.log(message);
    return message;
}
module.exports = {
    greet: greeting
}