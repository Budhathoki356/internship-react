import React from "react";
import { Todo, ToggleTodo } from "../types";
import { TodoListItem } from "./TodoListItem";

interface ITodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            })}
        </ul>
    )
}