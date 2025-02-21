import React, { useState } from "react";

function Todo(props) {
  const [inputtext, setinputText] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <div className="input-container">
        <input
          className="input-box-todo"
          type="text"
          value={inputtext}
          onChange={(e) => {
            setinputText(e.target.value);
            setDisabled(e.target.value.trim() === "");
          }}
          placeholder="Enter your todo"
        />
        <button
          disabled={disabled}
          className="add-btn"
          onClick={() => {
            props.addList(inputtext);
            setinputText("");
            setDisabled(true); 
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Todo;