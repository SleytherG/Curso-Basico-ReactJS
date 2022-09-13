import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";

function AppUI( {
    loading,
    error,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo }
    ) {
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
      { error && <p>Desesperate, hubo un error...</p>}
      { loading && <p>Estamos cargando, no desesperes...</p>}
      { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
