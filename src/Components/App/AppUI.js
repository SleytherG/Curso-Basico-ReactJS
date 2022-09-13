import React from "react";
import {TodoContext} from "../../TodoContext/TodoContext";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoItem} from "../TodoItem/TodoItem";
import {TodoList} from "../TodoList/TodoList";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {Modal} from "../../Modal/Modal";
import {TodoForm} from "../TodoForm/TodoForm";
import {SkeletonLoader} from "../SkeletonLoader/SkeletonLoader";
import {TodoHeader} from "../TodoHeader/TodoHeader";

function AppUI() {
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
        setSearchValue
    } = React.useContext(TodoContext);

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
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};
