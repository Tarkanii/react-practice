import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  // Managing todos and input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Setting saved todos on start
  useEffect(() => {
    const savedTodoList = localStorage.getItem('todoList');
    if (!savedTodoList) return;

    setTodos(JSON.parse(savedTodoList));
  }, [])

  // Adding todo
  function handleAddTodo(newTodo) {
    if (!newTodo?.length) return;
    
    const newTodos = [newTodo, ...todos];
    saveTodos(newTodos);
    setTodos(newTodos);
  }

  // Deleting todo
  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    saveTodos(newTodos);
    setTodos(newTodos);
  }

  // Editing todo
  function handleEditTodo(index) {
    setInputValue(todos[index]);
    handleDeleteTodo(index);
  }

  // Saving todos in localStorage
  function saveTodos(todos) {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  return (
    <>
      <header className="container">
        <h1 className="header__title">Todo List</h1>
        <TodoInput inputValue={inputValue} setInputValue={setInputValue} handleAddTodo={handleAddTodo}></TodoInput>
      </header>
      <main className="container">
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}></TodoList>
      </main>
    </>
  )
}

export default App;
