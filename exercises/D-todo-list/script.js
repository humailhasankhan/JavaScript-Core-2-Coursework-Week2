function todoList(toDos) {
  // Write your code here...
  //access the dive element
  const divElement = document.getElementById("content");
  // create a ul
  const unorderedList = document.createElement("ul");
  //create a li
  const allToDos = toDos.map((item) => {
    const listOfItems = document.createElement("li");
    listOfItems.innerText = item.todo;
    unorderedList.appendChild(listOfItems);
    divElement.appendChild(unorderedList);
    let lineThrough = false;
    listOfItems.addEventListener("click", textClicked);
    function textClicked() {
      if (!lineThrough) {
        lineThrough = true;
        return (listOfItems.style.textDecoration = "line-through");
      } else {
        lineThrough = false;
        return (listOfItems.style.textDecoration = "none");
      }
    }
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
