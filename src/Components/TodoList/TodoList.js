import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <React.Fragment>
            <section>
                <ul>
                    { props.children}
                </ul>
            </section>
        </React.Fragment>
    );
}

export { TodoList };