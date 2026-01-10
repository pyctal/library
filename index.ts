type ReadStatus = "unread" | "reading" | "read";

const myLibrary: Book[] = [];

class Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  readStatus: ReadStatus;

  constructor(
    title: string,
    author: string,
    pages: number,
    readStatus: ReadStatus = "unread"
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

function addBookToLibrary(
  title: string,
  author: string,
  pages: number,
  readStatus: ReadStatus = "unread"
): void {
  myLibrary.push(new Book(title, author, pages, readStatus));
}

addBookToLibrary("Don Quixote", "Miguel de Cervantes", 304);
addBookToLibrary("A Tale of Two Cities", "Charles Dickens", 290);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1206);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupery", 96);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 314);

const tableBody = document.querySelector("tbody");

function renderLibrary(): void {
  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = "";

  myLibrary.forEach((book: Book) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.readStatus}</td>`;

    tableBody.append(tableRow);
  });
}

renderLibrary();
