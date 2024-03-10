import React from "react";

function TodoItem(props) {

    return (
        <li className="todo-item">
            {props.item}
        </li>
    );
};

export default TodoItem;