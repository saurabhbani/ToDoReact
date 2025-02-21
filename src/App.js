import React, { useState } from "react";
import Todo from "./Todo";
import ToDoList from "./ToDOList";
import "./App.css"
function App() {
  const [listToDo, setListToDo] = useState([]);

  const addList = (inputtext) => {
    setListToDo([...listToDo, inputtext]);
  };

  const deleteItem = (key) => {
    const newList = [...listToDo];
    newList.splice(key, 1);
    setListToDo([...newList]);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <Todo addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr/>
        {listToDo.map((listItem, index) => {
          return (
          <ToDoList
          item={listItem}
              index={index}
              key={index}
              deleteItem={deleteItem}
              />
          );
        })}
        </div>
      </div>
    </>
  );
}


export default App;