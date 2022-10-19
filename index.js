// Write a function that takes a list and an integer and returns a list with up to the n - th element in the list.In case of the integer being bigger than the size of the list, return the original list.

// For example:

// take(["apple", "pear", "lemon", "orange"], 2)
// #["apple", "pear"]

const arrayOfFruits = ["apple", "pear", "lemon", "orange"]
let myArr = []
const checkArrayLength = (arr, i) => {
  if (i > arr.length - 1) {
    return myArr.push(arr[0])
  }
  arrayOfFruits()
}

const take = (arr, int) => {
  if (int <= 0) {
    return arr
  } else if (int > arr.length) {
    const reminder = int - arr.length  // 5
    for (let i = 0; i < reminder; i++) {
      checkArrayLength(arrayOfFruits, i)
      myArr.push(arrayOfFruits[i])
    }
    return arr.concat(myArr.filter((item) => item !== undefined))
  }
  return arr.slice(0, int)
}

console.log(take(arrayOfFruits, 20))