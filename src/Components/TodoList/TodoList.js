import React from "react";
import './TodoList.css';

function TodoList( { children, onError, onLoading, onEmpty, error, loading, searchedTodos, render, totalTodos, onEmptySearchResults }){

    const renderFunc = render || children;

    return(
        <React.Fragment>
            <section className="TodoList-container">
                { error && onError() }
                { loading && onLoading() }
                { (!loading && !totalTodos) &&  onEmpty() }
                { (!!totalTodos && !searchedTodos?.length) && onEmptySearchResults() }
                { (!loading && !error) && searchedTodos.map(renderFunc) }
                <ul>
                    { children }
                </ul>
            </section>
        </React.Fragment>
    );
}

export { TodoList };
