import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        return alert("Title or description cannot be empty");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
};

  return (
    <div className="container my-3">
      <h3> Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter To do title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder="Enter To do description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
