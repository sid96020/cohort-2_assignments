/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
