
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

function itemDiscount(array) {
  let newArray = [];
  for (let cost of array) {
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