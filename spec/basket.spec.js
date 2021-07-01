const Basket = require('../src/basket.js');
const Item = require('../src/item.js');

let input, exOutput, result, actOutput;

//----------------------------------------

console.log('Can we add item to basket?');

input = 'potato';
cap = 10;
exOutput = true;

let myItem = new Item(input);


let myBasket = new Basket(cap);

console.log(myBasket.itemList)

if (myBasket.itemList.indexOf(myItem.name()) > -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

if (actOutput === exOutput){
    result = true;
}
else {
    result = false;
}

console.log(result);

//----------------------------------------

/*console.log('Can we check if basket is full before adding item?');

input = 'potato';
cap = 0;
exOutput = true;

let myItem = new Item(input)

let myBasket = new Basket(cap)


actOutput = myBasket.isFull();


if (actOutput === exOutput){
    result = true;
}
else {
    result = false;
}

console.log(result);*/

//----------------------------------------