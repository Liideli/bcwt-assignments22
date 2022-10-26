'use strict';

const _ = require('lodash');

// Ex. 1
console.log('Hello World, I am Node');

// Ex. 2
let output = 'Just Testing nodemon, using lodash to convert to camelcase';
console.log(output);
output = _.camelCase(output);
console.log(output);
