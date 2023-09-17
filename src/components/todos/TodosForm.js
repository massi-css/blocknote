import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";

const TodosForm = (props) => {

  const [title, settitle] = useState('');
const [editrender, seteditrender] = useState(false)

  if(props.mode === 'edit' && !editrender){
    settitle(props.activenote.title)
    seteditrender(true)
  }

  const handleinputchange = (event) => {
    settitle(event.target.value);
  };
  const addnewnotee = (title) => {
    if (!title.trim()) {
      return;
    }
    props.addnewnote(title);
    seteditrender(false)
    settitle("");
  };
  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${props.mode === "filter" ? "active" : ""}`}
        onClick={props.switchmode}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="add a new note..."
          onChange={handleinputchange}
          value={title}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          disabled={!title.trim()}
          onClick={() => addnewnotee(title)}
        >
          {props.mode === 'edit'? 'edit' : 'add'}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
