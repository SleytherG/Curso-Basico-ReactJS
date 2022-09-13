import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <React.Fragment>
      <TodoContext.Consumer>
        {({ searchValue, setSearchValue }) => {
          const onSearchValueChange = (event) => {
            console.log(event.target.value);
            setSearchValue(event.target.value);
          };

          return (
            <input
              className="TodoSearch"
              placeholder="Cebolla"
              value={searchValue}
              onChange={onSearchValueChange}
            />
          );
        }}
      </TodoContext.Consumer>
    </React.Fragment>
  );
}

export { TodoSearch };
