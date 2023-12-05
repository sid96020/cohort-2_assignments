
/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let larget_element = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if(larget_element<numbers[i]) {
            larget_element=numbers[i];
        }
    }
    return larget_element;
    
}

module.exports = findLargestElement;