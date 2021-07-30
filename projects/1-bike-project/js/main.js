const blueButton = document.getElementById("blueBtn");
const donateABikeButton = document.getElementsByClassName(
  "btn btn-primary btn-lrg"
);
const volunteerButton = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
);
const jumbotronElement = document.querySelectorAll(".jumbotron");
const orangeButton = document.getElementById("orangeBtn");

const greenButton = document.getElementById("greenBtn");

blueButton.addEventListener("click", changeColorsForBlue);

function changeColorsForBlue() {
  Array.from(jumbotronElement).map(
    (element) => (element.style.backgroundColor = "#588fbd")
  );
  donateABikeButton[0].style.backgroundColor = "#ffa500";

  volunteerButton[0].style.backgroundColor = "black";
  Array.from(volunteerButton).map((element) => (element.style.color = "white"));
}

orangeButton.addEventListener("click", changeColorsForOrange);

function changeColorsForOrange() {
  Array.from(jumbotronElement).map(
    (element) => (element.style.backgroundColor = "#f0ad4e")
  );
  donateABikeButton[0].style.backgroundColor = "#5751fd";

  volunteerButton[0].style.backgroundColor = "#31b0d5";
  Array.from(volunteerButton).map((element) => (element.style.color = "white"));
}

greenButton.addEventListener("click", changeColorsForGreen);

function changeColorsForGreen() {
  Array.from(jumbotronElement).map(
    (element) => (element.style.backgroundColor = "#87ca8a")
  );
  donateABikeButton[0].style.backgroundColor = "black";

  volunteerButton[0].style.backgroundColor = "#8c9c08";
  Array.from(volunteerButton).map((element) => (element.style.color = "black"));
}

const submitButton = document.getElementById("submitBtn");
const allFormFields = document.querySelectorAll(".form-control");
console.log(allFormFields);

submitButton.addEventListener("click", submitForm);
let isValid = false;
let isValidEmail = false;
function submitForm(event) {
  event.preventDefault();
  Array.from(allFormFields).map((field, index) => {
    console.log(index);
    if (index === 0) {
      console.log(field.value);
      let textToValidate = field.value;
      if (textToValidate.includes("@")) {
        isValidEmail = true;
      } else {
        event.preventDefault();
        isValidEmail = false;
        field.style.backgroundColor = "red";
        alert("Please enter valid email");
      }
    }
    if (field.value.length === 0) {
      isValid = false;
      field.style.backgroundColor = "red";
      event.preventDefault();
    } else if (field.value.length > 0 && isValidEmail) {
      isValid = true;
      field.style.backgroundColor = "white";
    }
  });
  if (isValid) {
    Array.from(allFormFields).map((field) => {
      field.style.backgroundColor = "white";
      field.value = "";
    });
    alert("Thank you for filling out the form");
  }
}
