import React from "react";
import {useTodos} from "../../CustomHooks/useTodos";
import {TodoHeader} from "../TodoHeader/TodoHeader";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {SkeletonLoader} from "../SkeletonLoader/SkeletonLoader";
import {TodoItem} from "../TodoItem/TodoItem";
import {Modal} from "../../Modal/Modal";
import {TodoForm} from "../TodoForm/TodoForm";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";


function App(props) {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && new Array(4).fill().map((item, index) => (<SkeletonLoader key={index}/>))}
                {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm
                        setOpenModal={setOpenModal}
                        addTodo={addTodo}
                    />
                </Modal>
            )}
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}


export default App;
