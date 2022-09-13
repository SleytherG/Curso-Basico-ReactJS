import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton( props ) {
    const onClickButton = ( text ) => {
        alert(text);
    }

    return(
        <React.Fragment>
            <button 
            className="CreateTodoButton"
            onClick={ () => onClickButton('Aquí deberia abrir el alert') }
            >+</button>
        </React.Fragment>
    );
}

export {CreateTodoButton};