'use strict';

// Do not delete the code below.
function calculateFinance(inputIncome, inputExpense) {
  // Please complete the task below.
  // For income and expenses, use the parameters inputIncome and inputExpenses.

  // Initialize variables

  let totalIncome;
  let totalExpense;
  let balance;


  // Adding Income
  // Tips: You need to convert the inputIncome to numbers

  totalIncome = Number(inputIncome);

  // Adding Expense
  // Tips: You need to convert the inputIncometo numbers

  totalExpense = Number(inputExpense);

  // Calculating balance and using nullish coalescing if balance is null or undefined, make it 0

  balance = inputIncome - inputExpense ?? 0;

  // Checking Balance Status
  // Tips: You need to use if else and comparations

  // Comparing Income vs Expense
  // Tips: You need to use if else and comparations

  // Do not delete the code below.
  // Displaying final results
  if (balance < 0) {
    console.log("Warning: Your balance is negative!");
    console.log("Warning: Your expenses are greater than your income!");
  } else if (balance === 0) {
    console.log("Your balance is zero.")
    console.log("Your income and expenses are balanced.");
  } else {
    console.log("Success: Your balance is positive!");
    console.log("Your income is greater than your expenses.");
  }

  console.log(`Total Income: ${totalIncome}`);
  console.log(`Total Expense: ${totalExpense}`);
  console.log(`Total Balance: ${balance}`);

  return {
    totalIncome,
    totalExpense,
    balance,
  };
}

module.exports = { calculateFinance };
