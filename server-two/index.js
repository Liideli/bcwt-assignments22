'use strict';

const {application} = require('express');
const express = require('express');
const app = express();
const port = 3000;

let requestCounter = 0;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/test', (request, response) => {
  console.log('Someone is trying to test me.');
  requestCounter++;
  // Example of using pug
  response.render('test', {
    title: "Pug test page",
    header1: "Pug test page",
    header2: "Counter",
    exampleText: "Page requested " + requestCounter + " times.",
  });
  // basic html as string
  //response.send('<h1>TEST page</h1><p>' + requestCounter + '<p>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
