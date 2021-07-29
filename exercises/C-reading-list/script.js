function readingList(books) {
  const divElement = document.getElementById("content");
  const unorderedListOfBooks = document.createElement("ul");
  divElement.appendChild(unorderedListOfBooks);
  const listOfBooks = books.map((book, index) => {
    const listItems = document.createElement("li");
    const bookDetails = document.createElement("p");
    bookDetails.innerText = book.title + " by " + book.author;
    listItems.appendChild(bookDetails);
    console.log(listItems);

    const imageElementBook1 = document.createElement("img");
    imageElementBook1.src = bookCoverImages[index].source;
    imageElementBook1.alt = bookCoverImages[index].attribute;
    listItems.appendChild(imageElementBook1);
    unorderedListOfBooks.appendChild(listItems);
    if (book.alreadyRead) {
      listItems.style.backgroundColor = "green";
    } else {
      listItems.style.backgroundColor = "red";
    }
  });
}

const bookCoverImages = [
  {
    source:
      "https://adminuat.gobazzar.com/Upload/catalog/SmallLogo/6bb85f3d-6f00-4a48-8dd8-15ed5a8965a8.jpg",
    attribute: "book cover of Design of everyday things with red teapot",
  },
  {
    source:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
    attribute:
      "The most human human book cover with an inner view of brain mechanism",
  },
  {
    source: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
    attribute: "Plain black book cover with a small image of a wood planer",
  },
];

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
