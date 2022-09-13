import React from "react";
import './TodoList.css';

function TodoList( { children }){
    return(
        <React.Fragment>
            <section>
                <ul>
                    { children }
                </ul>
            </section>
        </React.Fragment>
    );
}

export { TodoList };
