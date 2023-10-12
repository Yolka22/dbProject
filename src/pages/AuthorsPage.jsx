import Author from "../UI/Author";
import ApiHandler from "../API/API";
import { useState, useEffect } from "react";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      try {
        setAuthors(await ApiHandler.getAuthors());
      } catch (error) {
        console.error("Ошибка при получении авторов:", error);
      }
    }
    fetchAuthors();
  }, []);
  return (
    
    <div>
        <div>
            Authors
        </div>
      {authors.map((author) => (
        <Author key={"AuthorId " + author.Author_id} author={author} />
      ))}
    </div>
  );
};

export default AuthorsPage;
