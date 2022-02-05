//DO NOT MODIFY THIS FILE

const fs = require('fs')
const _ = require('lodash')
let code = fs.readFileSync('./index.js', 'utf8')
eval(code)

var items = [
  { itemName: "Effective Programming Habits", type: "book", price: 18.99},{itemName: "Creation 3005", type: "computer",price: 399.99},{itemName: "Orangebook Pro", type: "computer",price: 899.99}, {itemName: "Finding Your Center", type: "book", price: 15.00}, {itemName: "Fabulous Algorithms", type: "book",price: 29.99}, {itemName: "Another Item", type: "clothes",price: 25.00}
];


const test = (num, supplement='') => (actual, expected) => {
  if (_.isEqual(actual, expected)) {
    console.log(`✅\tPrompt ${num} is passing!`)
    result = true;
  } else {
    console.log(
      `❌\tPrompt ${num} is not passing test. Received`,
      actual,
      `\nbut expected`,
      expected,
      `${supplement ? `\n${supplement}` : ''}`
    )
    result = false;
  }
  console.log('')
  return result
}

const results = []
results.push(
  test(1, 'Function called like so: findItems(items, "book")')(
    findItems(items, 'book'),
  [ 'Effective Programming Habits',
    'Finding Your Center',  'Fabulous Algorithms' ]
  )
)

results.push(test(1, 'Function called like so: findItems(items, "book")')(
    findItems(items, 'computer'),
  [ 'Creation 3005', 'Orangebook Pro' ]
  )
)

if (results.every(val => val)) {
  test(2, 'Function called like so: findItems([], "computer")')(
    findItems([], "computer"),
    "No items found of that type. Please search for a different item."
  )

  test(2, 'Function called like so: findItems(items, "nunchucks")')(
    findItems(items, "nunchucks"),
    "No items found of that type. Please search for a different item."
  )
}
