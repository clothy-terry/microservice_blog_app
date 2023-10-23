const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
// If we make any change to our code spcace,
// the server will restart cuz we are using nodeman
// and the server data storage will be cleared
const app = express();
app.use(bodyParser.json());
const posts = {};
app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/posts', (req, res) => {
    const id  = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {id, title};
    res.status(201).send(posts[id]);
    //tell user that we have now create a new post
});

// http://localhost:4000, test on local Postman
app.listen(4000, ()=> {
    console.log('listening on 4000');
})