
// // / Promise-ის შექმნა
// const myPromise = new Promise((resolve, reject) => {
//   // ასინქრონული ოპერაცია
//   let success = true;
  
//   if (success) {
//     resolve("Operation successful!"); // წარმატების შემთხვევაში
//   } else {
//     reject("Operation failed!"); // შეცდომის შემთხვევაში
//   }
// });

// // Promise-ის გამოყენება
// myPromise
//   .then((result) => {
//     console.log(result); // "Operation successful!"
//   })
//   .catch((error) => {
//     console.error(error); // "Operation failed!"
//   });
 


// Promise-ის ძირითადი მეთოდები
// 1. .then() - წარმატების დამუშავება
// const getData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data loaded successfully!");
//   }, 2000);
// });

// getData.then((message) => {
//   console.log(message); // 2 წამის შემდეგ: "Data loaded successfully!"
// });
 
// 2. .catch() - შეცდომის დამუშავება
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Unable to fetch data");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error); // "Error: Unable to fetch data"
  });
 
// 3. .finally() - ყოველთვის სრულდება
// const loadImage = new Promise((resolve, reject) => {
//   // სურათის ჩატვირთვა
//   resolve("Image loaded");
// });

// loadImage
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Loading complete!"); // ყოველთვის შესრულდება
//   });
 





















