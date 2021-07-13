import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("Title or Description cannot be null");

        addTodo(title, desc);

    };
    return (
        <div className="container">
            <h3 className="my-3">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter the description here" value={desc} onChange={(e) => { setDesc(e.target.value) }}></textarea>
                </div>
                <button type="submit" className="btn btn-success">Add New Item</button>
            </form>
        </div>
    )
}
