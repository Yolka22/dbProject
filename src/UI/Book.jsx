import { useEffect, useState } from "react";
import styles from "./Book.module.css";
const Book = ({ book }) => {
  const [bookId, setId] = useState();

  useEffect(() => {
    setId(book.id);
  }, [book.id]); // Добавляем book.id в зависимости

  return (
    <div className={styles.book}>
      {Object.keys(book).map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {book[key]}
        </div>
      ))}
      <button>Delete</button>
    </div>
  );
};

export default Book;
