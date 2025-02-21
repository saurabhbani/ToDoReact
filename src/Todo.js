import React, { useState } from "react";

function Todo(props) {
  const [inputtext, setinputText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleAddClick = () => {
    if (inputtext.trim() !== "") {
      props.addList(inputtext);
      setinputText("");
      setDisabled(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddClick();
    }
  };


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
          onKeyDown={handleKeyDown}
          placeholder="Enter your todo"
        />
       <button
        disabled={disabled}
        className="add-btn"
        onClick={handleAddClick}
      >
        +
      </button>
      </div>
    </>
  );
}

export default Todo;
