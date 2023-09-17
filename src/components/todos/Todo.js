import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Todo = (props) => {
  return (
    <div className={`todos-todo ${props.todo.done ? "done" : ""}`}>
      <div className="todos-todo_icon">
        <FeatherIcon
          icon={props.todo.done ? "check-circle" : "circle"}
          onClick={() => props.toggletodo(props.todo.id)}
        />
      </div>
      <div className="todos-todo_text">{props.todo.title}</div>
      <div className={`todos-todo_cta ${props.mode === 'edit' ? 'hidden' : ''}`}>
        <div
          className="todos-todo_cta-edit"
          onClick={() => props.editmode(props.todo)}
        >
          <FeatherIcon icon="edit" size="20" />
        </div>
        <div className="todos-todo_cta-delete">
          <FeatherIcon
            icon="trash-2"
            size="20"
            onClick={() => props.deletenote(props.todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
