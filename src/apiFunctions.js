const todoAPI = "https://626490bea55d5055be498b98.mockapi.io/Todos/";

export const createTodo = async todoItem => {
    await fetch(todoAPI, {
      method: 'POST',
      body: JSON.stringify(todoItem),
      headers: {
        'Content-type': 'application/json',
      }
    });
  }
  
 export const editTodo = async todoItem => {
    await fetch(`${todoAPI}${todoItem.id}`, {
      method: 'PUT',
      body: JSON.stringify(todoItem),
      headers: {
        'Content-type': 'application/json',
      }
    });
  };
  
 export const getTasks = async () => {
      const response = await fetch(todoAPI, { method: 'GET' });
      const todos = await response.json();
      return todos;
  }
  
 export const deleteTodo = async todoId => {
      await fetch(`${todoAPI}${todoId}`, { method: 'DELETE' });
  };
  
 export const getTodoItem = async todoId => {
    const response = await fetch(`${todoAPI}${todoId}`, { method: 'GET' });
    const todo = await response.json();
    return todo;
  }
  