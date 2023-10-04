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
  }
export default ApiHandler
