var express = require('express');
var app = express();

app.get('/posts/', function(req, res) {
    var id = req.params.id;
    res.send("You requested all of the posts");
});
app.get('/posts/new', function(req, res) {
    var id = req.params.id;
    res.send("You requested new posts");
});
app.post('/posts/', function(req, res) {
    var id = req.params.id;
    res.send("You posted to /posts/");
});
app.get('/posts/:id', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});
app.get('/posts/:id/edit', function(req, res) {
    var id = req.params.id;
    res.send("You requested to edit post" + id);
});
app.put('/posts/:id', function(req, res) {
    var id = req.params.id;
    res.send("You updated post " + id);
});
app.delete('/posts/:id', function(req, res) {
    var id = req.params.id;
    res.send("You deleted post " + id);
});

module.exports = app;