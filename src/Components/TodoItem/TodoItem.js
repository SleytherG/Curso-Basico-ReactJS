import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <React.Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active' }`} 
                onClick={ props.onComplete }
                >
                    <i className="bi bi-check-lg"></i>
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
                    {props.text}
                </p>
                <span className="Icon Icon-delete"
                onClick={ props.onDelete }
                >
                    <i className="bi bi-x-lg"></i>
                </span>
            </li>
        </React.Fragment>
    );    
}

export { TodoItem };
