/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[]
  let category_total={}
  for(let i=0; i<transactions.length; i++) {
    if (transactions[i].category in category_total){
        category_total[transactions[i].category]=category_total[transactions[i].category]+transactions[i].price
    }else{
      category_total[transactions[i].category]=transactions[i].price
    }
  }
  for(let key in category_total) {
    result.push({category:key, totalSpent:category_total[key]})
  }
  return result ;
}

module.exports = calculateTotalSpentByCategory;
