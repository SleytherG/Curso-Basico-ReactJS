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
import {TodosError} from "../TodosError/TodosError";
import {TodosEmpty} from "../TodosEmpty/TodosEmpty";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodosEmptySearchResults} from "../TodosEmptySearchResults/TodosEmptySearchResults";
import {ChangeAlert } from "../ChangeAlert/ChangeAlert";


function App() {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmpty={() => <TodosEmpty/>}
                onEmptySearchResults={() => <TodosEmptySearchResults searchText={searchValue}/>}
                // render={(todo) => (
                //     <TodoItem
                //         key={todo.text}
                //         text={todo.text}
                //         completed={todo.completed}
                //         onComplete={() => completeTodo(todo.text)}
                //         onDelete={() => deleteTodo(todo.text)}
                //     />
                // )}
            >
                {todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
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
                loading={loading}
            />
            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
    );
}


export default App;
