import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro de React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALA", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const [ error, setError ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);
  const [ item, setItem ] = React.useState( initialValue );
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        
        if ( !localStorageItem ) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500);
  });

 


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App(props) {
 
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
   <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos} 
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    toggleCompleteTodo={toggleCompleteTodo}
    deleteTodo={deleteTodo}
   />
  );
}

export default App;
