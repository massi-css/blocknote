import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.note.map((notee) => (
        <Todo
          todo={notee}
          key={notee.id}
          toggletodo={props.toggletodo}
          deletenote={props.deletenote}
          editmode={props.editmode}
          mode={props.mode}
        />
      ))}
      {props.note.length === 0 && (
        <h3 className="no-todos"> there isn't any note for the moment </h3>
      )}
    </div>
  );
};

export default Todos;
