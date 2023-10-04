import Book from "../UI/Book";
import ApiHandler from "../API/API";
import { useState, useEffect } from "react";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setBooks(await ApiHandler.getBooks());
      } catch (error) {
        console.error("Ошибка при получении книг:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <Book key={"bookId " + book.Book_id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;
