import React, {useState} from "react";
import './App.css';
import TodoBoard from "./components/TodoBoard";

// 1. input창
// 2. 추가 버튼
// 3. 삭제버튼


function App() {
  const [inputValue, setInputValue] = useState('');

  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log("im here!", inputValue);
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  return (
    <div className="App">
      <div className="app-container" id="taskList">
        <div className="add-task">
          <input type="text" value={inputValue} id="todo" autoComplete="on" placeholder="Add New Task" className="task-input" onChange={(event) => setInputValue(event.target.value)}/>
          <button className="submit-task" onClick={addItem} title="Add Task" >추가</button>

          {/* 불러온 컴포넌트 안에 전달하고 싶은 값을 전달 할 수 있다 >> props */}
          <TodoBoard todoList={todoList}/>
        </div>
      </div>
      
    </div>
  );
};

export default App;
