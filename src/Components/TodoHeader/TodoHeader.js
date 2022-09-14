import React from "react";

function TodoHeader({ children, loading }) {
    // const cloneElement = React.cloneElement(children, { loading: loading })
    // const childrenElements = React.Children.toArray(children).map(child => React.cloneElement(child, {loading: loading}));

    return (
        <header>
            { React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, {loading: loading}))
            }
        </header>
    );
}

export { TodoHeader };
