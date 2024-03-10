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
                // key는 react권장사항인데 유니크한 값이어야 함
                // 근데 item으로 하면 같은 목록 작성시 오류남
                props.todoList.map((item) => <TodoItem key="{item}" item={item}/>)
            }
        </div>
    );
};

export default TodoBoard;