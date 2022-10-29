import { Fragment, useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState("");
  
  const onSubmitForm = async e => {
    e.preventDefault();
    if (!description) return;

    try {
      const body = { description };
      await fetch('http://localhost:5000/todos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Pern Todo List</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button type="submit" className="btn btn-success mx-3">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;