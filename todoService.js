import { getByTitle } from "@testing-library/dom";

const baseUrl = "http://localhost:3001";

const todoService = {
    getTodos: async () => {
        const response = await fetch(`${baseUrl}/todo/`);
        const todos = await response.json();
        return todos;
  },
};

export default todoService;

