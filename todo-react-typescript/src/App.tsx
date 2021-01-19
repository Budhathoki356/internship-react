import React, { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import { Todo, ToggleTodo } from "./types";

const initialTodos: Array<Todo> = [
  { text: "First task", complete: true },
  { text: "Second task", complete: false }
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo:ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo, 
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo = (newTodo:string) => {
    setTodos([...todos, {text: newTodo,complete: false}])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  )
}

export default App;
