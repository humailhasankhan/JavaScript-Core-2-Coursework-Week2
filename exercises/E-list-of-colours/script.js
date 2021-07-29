function listOfColours(colours) {
  // Write your code here...
  const divElement = document.getElementById("content");
  const selectElement = document.createElement("select");
  const myParagraph = document.createElement("p");

  const allColours = colours.map((color) => {
    const optionsOfItems = document.createElement("option");
    optionsOfItems.innerText = color;
    selectElement.appendChild(optionsOfItems);
    divElement.appendChild(selectElement);
    divElement.appendChild(myParagraph);
    selectElement.addEventListener("change", optionClicked);

    function optionClicked(e) {
      if (e.target.value === color) {
        myParagraph.innerHTML = "You have selected: " + e.target.value;
        myParagraph.style.color = color;
      } else if (e.target.value === "none") {
        myParagraph.innerHTML = "You have selected: " + e.target.value;
        myParagraph.style.color = "white";
      }
    }
  });
}

const colours = ["none", "red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

//console.log(optionClicked);
