class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

export const book1 = createBook("Harry Potter", "JK Rowling", "AB123");
export const book2 = createBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "CD456"
);
export const book3 = createBook("Moby-Dick", "Herman Melville", "EF789");

export const book4 = new Book("Harry Potter", "JK Rowling", "AB123");
export const book5 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "CD456"
);
export const book6 = new Book("Moby-Dick", "Herman Melville", "EF789");
