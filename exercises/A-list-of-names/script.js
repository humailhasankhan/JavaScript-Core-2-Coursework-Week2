function listOfNames(arrayOfPeople) {
  const peopleAndJobs = arrayOfPeople.map((value) => {
    let content = document.querySelector("#content");
    const h1Tag = document.createElement("h1");
    const h2Tag = document.createElement("h2");
    h1Tag.innerHTML = value.name;
    h2Tag.innerHTML = value.job;
    content.appendChild(h1Tag);
    content.appendChild(h2Tag);
  });
  return peopleAndJobs;
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
