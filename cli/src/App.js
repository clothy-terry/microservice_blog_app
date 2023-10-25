import React from "react";
import PostCreate from "./PostCreate";
import PostList from './PostList';

const App = () => {
  return (
    // Add container class to div to make it center in middle
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr/>
      <h1>Post</h1>
      <PostList />
    </div>
  );
};
export default App;
