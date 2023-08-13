import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [listData, setListData] = useState([]);
  function handleChange(e) {
    setTodo(e.target.value);
    // console.log(todo);
  }
  function addTodo() {
    //...listData copy all the data form the array
    setListData([...listData, todo]);
    console.log(todo);
    setTodo("");
  }
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="add todo..."
          onChange={handleChange}
          value={todo}
        />
        <button onClick={addTodo}>add Todo</button>
      </div>
    </>
  );
};

export default Todo;
