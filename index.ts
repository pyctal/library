const myLibrary: Book[] = [];

class Book {
  id: string;
  title: string;
  author: string;
  pages: number;

  constructor(title: string, author: string, pages: number) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary(title: string, author: string, pages: number): void {
  myLibrary.push(new Book(title, author, pages));
}
