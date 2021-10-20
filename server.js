const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.get("/users", (req, res) => {
    res.send("Users Page");
})

function logger(req, res, next) {
    console.log('log');
}

app.listen(3000);