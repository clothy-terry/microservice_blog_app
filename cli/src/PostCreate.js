// import useState Hook
import React, { useState } from "react";
// imort axios to send actual request
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    // form onSubmit function will send submit itself by default
    // we need to prevent it
    event.preventDefault();

    // Make post comment request to our post service on 4000
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    // Empty out the form input field after submission
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
