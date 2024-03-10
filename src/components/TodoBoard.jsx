import React from "react";
import TodoItem from "./TodoItem";

// 전달 받은 값을 props로 받아올 수 있다
function TodoBoard(props) {

    // console.log("todoBoard", props.todoList);
    return (
        <div>
            <h1> TO DO LIST</h1>
            {
                //javascript 공간
                props.todoList.map((item) => <TodoItem key="{item}" item={item}/>)
            }
        </div>
    );
};

export default TodoBoard;