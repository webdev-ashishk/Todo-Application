import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [listDatas, setListData] = useState([]);
  function handleChange(e) {
    setTodo(e.target.value);
    // console.log(todo);
  }
  function addTodo() {
    //...listData copy all the data form the array
    // Issue is after double click todo added to list !
    // Why this problem arise becoz of asynchronous nature of state .
    // setListData([...listData, todo]);
    // console.log(listData);

    // solve the above issue
    // this will work synchronously
    setListData((listData) => {
      const updatedList = [...listData, todo];
      console.log(updatedList);
      setTodo("");
      return updatedList;
    });
  }
  function handleRemoteTodo(index) {
    const updatedListData = listDatas.filter((element, id) => {
      return index != id;
    });
    setListData(updatedListData);
  }
  function handleRemoveListDatas() {
    setListData([]);
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
        {listDatas.map((listData, index) => {
          return (
            <>
              <ul key={index}>
                <li>
                  {listData}{" "}
                  <button onClick={() => handleRemoteTodo(index)}>
                    remove
                  </button>
                </li>
              </ul>
            </>
          );
        })}
      </div>
      {listDatas.length > 0 && (
        <button onClick={handleRemoveListDatas}>remove-All</button>
      )}
    </>
  );
};

export default Todo;
