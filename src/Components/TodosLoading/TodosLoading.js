import React from "react";
import {SkeletonLoader} from "../SkeletonLoader/SkeletonLoader";

function TodosLoading() {
    return (
        <React.Fragment>
            { new Array(4).fill().map((item, index) => (<SkeletonLoader key={index}/>))}
        </React.Fragment>
    );
}
export { TodosLoading };
