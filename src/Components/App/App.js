import React from "react";
import { TodoProvider } from "../../TodoContext/TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro de React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALA", completed: false },
// ];



function App(props) {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
