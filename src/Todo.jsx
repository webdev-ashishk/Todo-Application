import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  function handleChange(e) {
    setTodo(e.target.value);
    console.log(todo);
  }
  function addTodo() {
    alert("working");
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
