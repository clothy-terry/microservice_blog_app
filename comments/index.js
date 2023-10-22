const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

// {postId1:[comment1, comment2], postId2:[], ...}
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// post a comment on post id (':id')
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

//testing
//Post: http://localhost:4001/posts/123/comments, 123 just some postid
// header:Content-type: application/json
// Body: {"content":"This is a comment"}, the 'content' keyword is important
app.listen(4001, () => {
  console.log('Listening on 4001');
});
