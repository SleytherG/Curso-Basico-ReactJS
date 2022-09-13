import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton( { openModal, setOpenModal } ) {

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
