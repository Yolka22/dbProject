import axios from "axios"
const host = "http://127.0.0.1:8000";

class ApiHandler {
    static async getBooks() {
      try {
        const response = await axios.get(`${host}/books`);
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении книг:", error);
        throw error;
      }
    }

    static async getAuthors() {
      try {
        const response = await axios.get(`${host}/authors`);
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении авторов:", error);
        throw error;
      }
    }

    static async deleteAuthor(id, csrfToken) {
      axios.delete(`${host}/authors/${id}`, {
        headers: {
          'X-CSRF-TOKEN': csrfToken
        }
      })
      .then(response => {
        // Обработка успешного запроса
      })
      .catch(error => {
        console.error('An error occurred while deleting the author!', error);
      });
    }
    
}
export default ApiHandler
