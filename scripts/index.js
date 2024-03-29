
//// Write a function
// that produces the sum
// total of the expenses.

const expenses = [
  1234.56,
  89.42,
  9797.10,
  88.88,
  3.14
];

function sumExpense(billsArray) {
  let sum = 0;
  for (let bill of billsArray) {
    sum += bill;
  }
  return sum;
}
// console.log(sumExpense([12, 655, 87.98]));
// console.log(sumExpense([7, 8, 3.33, 1]));

console.log(sumExpense(expenses));

// Next activity! Find the sum of any expenses over $20

const expensesOver20 = [
  1234.56,
  89.42,
  9797.10,
  88.88,
  3.14,
  30.99,
  10.74,
  0.99,
  42.39,
  19.24,
  8.49,
  21.30,
  1.00,
  30.00
];

const newExpenses = [3, 6, 20, 80];

function sumExpenses(overTwenty) {
  let sum = 0;
  for (let bill of overTwenty) {
    if (bill >= 20)
    sum += bill;
  }
  return sum;
}
console.log(sumExpenses(expensesOver20));
console.log(sumExpenses(newExpenses));
console.log(sumExpenses([70, 1, 20, 10, 9]));

// Next: You get a 10% discount/reimbursement on expenses $100 and greater.
// (That should be a new function that produces a new array of the discounted 
// values. Any values that are less than $100 should remain the same.)

const discounted = [
  1234.56,
  89.42,
  9797.10,
  88.88,
  3.14,
  30.99,
  10.74,
  0.99,
  42.39,
  19.24,
  8.49,
  21.30,
  1.00,
  30.00
];

function itemDiscount(expenseArray) {
  let newArray = [];
  for (let cost of expenseArray) {
    if (cost >= 100) {
      console.log(cost)
      cost = cost * 0.9;
      newArray.push(cost);
    }
    else {
      //console.log("It's too low!");
      newArray.push(cost);
    }
    }
  return newArray;
  }

console.log(itemDiscount(discounted));

////////////////////////////

function alwaysDiscounted(expenseArray) {
  let newArray = [];

  for (let cost of expenseArray) {
    cost = cost * 0.9;
    newArray.push(cost);
  }

  return newArray;
}

// How to transform one array into a corresponding array:

// 1. Write a function that describes how to transform one, single item.
function discountExpense(singleExpense) {
  //debugger;
  return singleExpense * 0.9;
}

// 2. Declare a variable to hold a new array:
let updatedExpenses = expenses.map(discountExpense);

///////// long version

function onlyOverTwentyDollars(expenseArray) {
  let newArray = [];

  for (let cost of expenseArray) {
    if (cost >= 20) {
      newArray.push(cost);
    }
  }
  return newArray;
}
let filteredExpenses = onlyOverTwentyDollars(expenses);

// How to filter out certain items:

// 1. Write the helper function that knows if one, single element should be allowed or not.
// "Gandolf function"

function isOverTwentyDollars(cost) {
  //debugger;
  if (cost >= 20) {
    return true;
  } else {
    return false;
  }
}

// 2. Declare a variable to hold out new, filtered array.
let highExpenses = expenses.filter(isOverTwentyDollars);