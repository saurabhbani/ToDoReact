import React from "react";

function ToDoList(props) {
  return (
    <>
      <li className="list-item">
        {props.item}
        <span
          className="icons"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        >
          <i class="fa-solid fa-trash icon-delete"></i>
        </span>
      </li>
    </>
  );
}

export default ToDoList;