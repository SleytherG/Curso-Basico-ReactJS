import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import './TodoCounter.css';

function TodoCounter( ) {

  return (
    <React.Fragment>
        <TodoContext.Consumer>
          { ({ completedTodos: completed, totalTodos: total}) => {
            return (
              <h2 className="TodoCounter" >Has completado { completed } de { total } TODOs</h2>
            );
          }}
        </TodoContext.Consumer>
    </React.Fragment>
  );
}

export { TodoCounter };
