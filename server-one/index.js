'use strict';

const express = require('express');
const app = express();
const port = 3000;

let requestCounter = 0;


app.get("/catinfo", (req, res) => {
    const cat = {
      name: "Frank",
      birthdate: "2010-12-25",
      weight: 5,
    };
    res.json(cat);
  });

app.get("/test", (request, response) => {
    console.log('Someone is trying to test me');
    requestCounter;
    // Example using pug
    response.render('test', {
    title: "Pug test page",
    header1: "Pug test page",
    header2: "Counter",
    exampleText: "PAge requested " + requestCounter + "times."
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use(express.static('public'));
app.set('view engine', 'pug');