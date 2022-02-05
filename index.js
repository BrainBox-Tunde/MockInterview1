//THEORY PART
// Technical questions below:
// What is DOM manipulation?
// What is an event listener?
// What is pseudocoding and why should you use it?
// Explain CRUD operations and how each works?
// Describe the request-response cycle.

//USE THIS FILE TO CODE YOUR ANSWERS TO THE QUESTIONS

//Test data for the problems
var items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]

//Prompt 1 - findItems 
function findItems(arr,item){
  let itemFound = [];

  for (let i=0; i<arr.length; i++){
    if (arr[i].type === item){
      itemFound.push(arr[i].itemName);
    }
  }
  if (itemFound.length > 0){
    return itemFound;
  }else {
    return "No items found of that type. Please search for a different item."
  }

} 

findItems(items, "book")

//This is to run the tests. You can ignore it but don't delete it!
require('./index.test.js');(void 0);
