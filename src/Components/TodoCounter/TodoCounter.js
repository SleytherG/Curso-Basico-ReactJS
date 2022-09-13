import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h2 className="TodoCounter">
        Has completado {completed} de {total} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
