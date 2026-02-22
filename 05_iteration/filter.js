// Filter method
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num)=>{
//     return num > 5
// });
// The filter method does not change the original array, it creates a new array with the filtered elements.
console.log(newNums); // [6, 7, 8, 9, 10]

// foreach method

// const newNums2 = [];
// myNums.forEach((num)=>{
//     if(num > 5){
//         newNums2.push(num)
//     }
// })

// console.log(newNums2); // [6, 7, 8, 9, 10]

// // The filter method is more concise and easier to read than the forEach method.
// // The filter method is also more efficient than the forEach method because it does not require an additional array to be created.

const books = [
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: "1st"
  },
  {
    title: "Pride and Prejudice",
    genre: "Classic",
    publish: 1813,
    edition: "1st"
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: "1st"
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: "1st"
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publish: 1932,
    edition: "1st"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "1st"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "1st"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "History",
    publish: 2011,
    edition: "1st"
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    publish: 2011,
    edition: "1st"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    edition: "1st"
  }
];
