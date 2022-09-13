import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton( props ) {

    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onToggleOpenModal = () => {
        setOpenModal(!openModal);
    }

    return(
        <React.Fragment>
            <button 
            className="CreateTodoButton"
            onClick={ onToggleOpenModal }
            >+</button>
        </React.Fragment>
    );
}

export {CreateTodoButton};