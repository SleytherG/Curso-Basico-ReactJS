import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton( { openModal, setOpenModal, loading } ) {

    const onToggleOpenModal = () => {
        setOpenModal(!openModal);
    }

    return(
        <React.Fragment>
            <button 
            className="CreateTodoButton"
            onClick={ onToggleOpenModal }
            disabled={loading}
            >+</button>
        </React.Fragment>
    );
}

export {CreateTodoButton};
