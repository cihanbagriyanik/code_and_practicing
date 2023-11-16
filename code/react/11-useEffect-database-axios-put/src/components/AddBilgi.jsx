import React from "react";
import { useState } from "react";
import EditBilgi from "./EditBilgi";

const AddBilgi = ({ postBilgi }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //backend e yolla
    // axios.post(url,{title:title,description:desc}) //! Bu islem sadece best practice icin babada(Home) yapilir asagidaki gibi buraya gonderilir

    postBilgi({ title: title, description: desc });

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger display-6">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            value={title}
            placeholder="Enter your title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="desc"
            type="text"
            placeholder="Enter your description"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
