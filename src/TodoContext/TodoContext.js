import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {

    // const [ todos, saveTodos ] = useLocalStorage('TODOS_V1', []);
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if ( !searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }



  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);

    const newTodos = [...todos];
    if ( !!newTodos[todoIndex].completed ) {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
      return;
    } 
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log('Render (antes del useEffect)');
  
  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos]);
  // console.log('Render (luego del useEffect)');

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };