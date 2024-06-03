/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;



/*
ans of this code is
*/
function calculateTotalSpentByCategory(transactions) {
  // Create a map to store the total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    
    // If the category is already in the map, add the price to the existing total
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      // If the category is not in the map, initialize it with the current price
      categoryTotals[category] = price;
    }
  });

  // Convert the map to the desired output format
  const result = Object.keys(categoryTotals).map(category => {
    return { category, totalSpent: categoryTotals[category] };
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;

