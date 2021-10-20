const express = require('express');
const app = express();

app.use(logger); // global middleware

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.get("/users", auth, (req, res) => {
    res.send("Users Page");
})


function logger(req, res, next) {
    console.log('Auth');
    next();
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next();
    }
    else {
        res.send('No auth');
    }
}

app.listen(3000);