import React, { useState } from "react";
import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";

// const initialData = [
//   { id: 1, title: "cool", done: false },
//   { id: 2, title: " hmm", done: true },
//   { id: 3, title: " hello world", done: false },
//   { id: 4, title: "hehe ", done: true },
// ];
const initialData = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("note"))
  : [];

const TodoList = (props) => {
  const [note, setnote] = useState(initialData);
  // modes : filter / add / edit
  const [mode, setmode] = useState("add");

  const [activenote, setactivenote] = useState(null);

  const setlocalstorage = () => {
    localStorage.setItem("note", JSON.stringify(note));
  };

  props.togglelength(note.length);

  const toggletodo = (id) => {
    const newdata = note.map((td) => {
      if (td.id === id) {
        td.done = !td.done;
      }
      return td;
    });
    setnote(newdata);
  };

  const deletenote = (id) => {
    const newdata = note.filter((td) => td.id !== id);
    setnote(newdata);
  };

  const addnewnote = (title) => {
    if (mode !== "edit") {
      const newnote = {
        id: new Date().getTime(),
        title,
        done: false,
      };
      setnote([newnote, ...note]);
    } else if (mode === "edit") {
      const newnote = note.map((nt) => {
        if (nt.id === activenote.id) {
          nt.title = title;
        }
        return nt;
      });
      setnote(newnote);
      setmode("add");
    }
  };

  const switchmode = () => {
    if (mode === "edit") {
      return;
    }
    if (mode === "filter") {
      setmode("add");
    } else {
      setmode("filter");
    }
  };

  const editmode = (noteedit) => {
    setmode("edit");
    setactivenote(noteedit);
  };

  let currentnote = [...note];
  if (mode === "filter") {
    currentnote = note.filter((nt) => nt.done === false);
  }
  if (mode === "edit") {
    currentnote = [activenote];
  }

  setlocalstorage();

  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosForm
            addnewnote={addnewnote}
            switchmode={switchmode}
            mode={mode}
            activenote={activenote}
          />
          <Todos
            note={currentnote}
            toggletodo={toggletodo}
            deletenote={deletenote}
            editmode={editmode}
            mode={mode}
            activenote={activenote}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
