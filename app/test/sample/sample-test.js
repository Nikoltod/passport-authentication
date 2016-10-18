const assert = require("chai").assert,
      exampleModule = require("../../sample/sample"),
      expected = "test";

//the expected type of data
assert.typeOf(exampleModule.greet("test"), typeof(expected), "The greeting is of string.");
//the expected value
assert.equal(exampleModule.greet("test"), expected, `Greeting has returned : ${expected}`);      