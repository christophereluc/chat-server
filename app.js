const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// set the home page route
app.get('/', function(req, res) {
    res.send('Test')
});

app.listen(port, function() {
});