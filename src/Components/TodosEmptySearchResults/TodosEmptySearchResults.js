import React from "react";

function TodosEmptySearchResults( { searchText }) {
    return (
        <React.Fragment>
            <p>No hay resultados para { searchText }</p>
        </React.Fragment>
    );
}

export { TodosEmptySearchResults }
