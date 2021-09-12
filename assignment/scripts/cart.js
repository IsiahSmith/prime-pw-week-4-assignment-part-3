console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log(basket);
function addItem( item ){
  basket.push(item);{
  return true;
  }
}
console.log( 'Basket is', basket);
console.log( 'Adding oranges (expect true)', addItem('oranges'));
console.log( 'Adding kiwi (expect true)', addItem('kiwi'));
console.log( 'Basket is now', basket);

function listItems(array){
    console.log('Items in list:');
  for (let i=0; i<array.length; i++){
    console.log(array[i]);
  }
}
console.log( 'Basket is', basket);
listItems(basket);

function empty(array) {
  array.length=0;
  return array;
}
console.log('basket is', basket);
console.log('emptying basket (should show the now empty array)', empty(basket));
console.log('basket is', basket);
