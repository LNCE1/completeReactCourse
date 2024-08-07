//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.
//.then method will be called as soon as the promise is fulfilled. Adding a callback function to conver from Json to a JavaScript object (doing so, returns another object)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(
  "The console will print this line first, because the data for the promise arrived later"
);
