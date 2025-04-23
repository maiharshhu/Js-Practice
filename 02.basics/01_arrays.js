// Array
const myArr = [0, 1, 2, 3, 4, 5]
// const heros = ["ironman", "spidey", "hulk"]
// console.log(myArr, typeof myArr)

// console.log(myArr[3])
//
// const myArr1 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr1)
// To get length of any array also to see all the function that are available for that you can go to browser developer mode console to check
// console.log(heros.length)

// Array methods
// push -Appends new elements to the end of an array, and returns the new length of the array.
// myArr.push(6)
// myArr.push(7)

// pop -Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArr.pop()

// unshift-Inserts new elements at the start of an array, and returns the new length of the array.
// //------------->>>>>>>>DO NOT USE THIS ONLY WHEN IT IS NECESSARY BECAUSE IT WILL REARANGE ALL THE ELEMENTS IN ARRAY------------------
// Example - if in your todo app you want to add details in first place then in this type of scenerios we can use
// myArr.unshift(9)//add 9 in first place in myArr [

// shift = Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArr.shift()// remove first element from array

//includes -Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArr.includes(9));

// //indexOf -Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArr.indexOf(9))

//join -Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join() //binds and convert it to string type
// console.log(newArr, typeof newArr)


// slice,  splice--------------------------------------------------------------------------
// console.log("A ", myArr)

// slice -Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B ", myArr)

// splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. original array manipulate
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr)
// console.log(myn2) 

