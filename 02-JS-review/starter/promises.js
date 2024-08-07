//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.
//.then handlers/method will be called as soon as the promise is fulfilled. Adding a callback function to conver from Json to a JavaScript object (doing so, returns another object)
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log(
//   "The console will print this line first, because the data for the promise arrived later"
// );

//Async/Await. If we await the promise, JS will not move on, by default, to the next line, but wait.
async function getTodos() {
  //res = response
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data); //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  return data;
}
const toDos = getTodos();
