function shoppingList(arrayOfPeople) {
  // Write your code here...
  const divElement = document.getElementById("content");
  const listOfItems = document.createElement("ul");
  divElement.appendChild(listOfItems);
  const listOfShoppingItems = arrayOfPeople.map((item) => {
    const list = document.createElement("li");
    list.innerHTML = item;
    listOfItems.appendChild(list);
  });
  return divElement;
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

console.log(shoppingList(shopping));
