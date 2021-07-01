const Item = require('../src/bagel.js');

let input, exOutput, result;

//----------------------------------------

console.log('Can we create an Item?')

input = 'just a bagel';
exOutput = 'just a bagel';

let myItem = new Item(input)
actOutput = myItem.name();

if (actOutput === exOutput){
    result = true;
}
else {
    result = false;
}

console.log(result)