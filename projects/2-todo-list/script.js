let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  console.log(list);
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  const mappedToDoList = todos.map((item) => {
    const listItems = document.createElement("li");
    listItems.className =
      "list-group-item d-flex justify-content-between align-items-center";
    const spanElements = document.createElement("span");
    spanElements.className = "badge bg-primary rounded-pill";
    const icon = document.createElement("i");
    icon.className = "fa fa-check";
    const icon2 = document.createElement("i");
    icon2.className = "fa fa-trash";
    listItems.innerHTML = item.task;
    list.appendChild(listItems);
    listItems.appendChild(spanElements);
    spanElements.appendChild(icon);
    spanElements.appendChild(icon2);

    icon.addEventListener("click", checkIconClicked);
    function checkIconClicked() {
      if (item.completed === !true) {
        listItems.style.textDecoration = "line-through";
        return (item.completed = true);
      } else if (item.completed === true) {
        listItems.style.textDecoration = "none";
        return (item.completed = false);
      }
    }
    icon2.addEventListener("click", trashIconClicked);
    function trashIconClicked(e) {
      let item = e.target.parentNode.parentNode;
      console.log(item);
      item.remove();
    }
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

document.querySelector("form").addEventListener("submit", addNewTodo);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector("input");
  if (input.value != "") {
    addTodo(input.value);
    input.value = "";
  }
  function addTodo(todo) {
    const listItems = document.createElement("li");
    listItems.className =
      "list-group-item d-flex justify-content-between align-items-center";
    const spanElements = document.createElement("span");
    spanElements.className = "badge bg-primary rounded-pill";
    const icon = document.createElement("i");
    icon.className = "fa fa-check";
    const icon2 = document.createElement("i");
    icon2.className = "fa fa-trash";
    listItems.innerHTML = todo;
    list.appendChild(listItems);
    listItems.appendChild(spanElements);
    spanElements.appendChild(icon);
    spanElements.appendChild(icon2);

    icon.addEventListener("click", checkIconClicked);
    let lineThrough = false;
    function checkIconClicked() {
      if (!lineThrough) {
        lineThrough = true;
        return (listItems.style.textDecoration = "line-through");
      } else {
        lineThrough = false;
        return (listItems.style.textDecoration = "none");
      }
    }
    icon2.addEventListener("click", trashIconClicked);
    function trashIconClicked(e) {
      let item = e.target.parentNode.parentNode;
      console.log(item);
      item.remove();
    }
  }
}

const deleteCompletedButton = document.getElementById("delete-all");
deleteCompletedButton.addEventListener("click", deleteAllCompletedTodos);
// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const listItems = document.getElementsByTagName("li");
  Array.from(listItems).map((item) => {
    if (item.style.textDecoration === "line-through") {
      item.remove();
    }
  });
}
