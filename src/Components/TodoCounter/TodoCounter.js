import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {

  return (
    <React.Fragment>
      <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
