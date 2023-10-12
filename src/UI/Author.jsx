import { useEffect, useState } from "react";
import styles from "./Book.module.css";
import ApiHandler from "../API/API";


const Author = ({ author }) => {
  const [AuthorId, setId] = useState();

  useEffect(() => {
    setId(author.Author_id);
  }, [author.Author_id]);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  
  const handleDeleteAuthor = () => {
    ApiHandler.deleteAuthor(AuthorId,csrfToken)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Произошла ошибка при удалении автора!', error);
      });
  };

  return (
    <div className={styles.book}>
      {Object.keys(author).map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {author[key]}
        </div>
      ))}
      <button onClick={handleDeleteAuthor}>Delete</button>
    </div>
  );
};

export default Author;
