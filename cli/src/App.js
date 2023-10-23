import React from "react";
import PostCreate from "./PostCreate";

const App = () => {
  return (
    // Add container class to div to make it center in middle
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
};
export default App;
