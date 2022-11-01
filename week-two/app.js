'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  //console.log(req);
  res.send('From this endpoint you can get cats.');
});

app.get('/cat/:catId', (req, res) => {
  //console.log(req.params);
  res.send('From this endpoint you can get cat with id ' + req.params.catId);
});

app.get('/user', (req, res) => {
  res.send('From this endpoint you can get users.');
});

app.post('/cat', (req, res) => {
  //console.log(req);
  res.send('From this endpoint you can add more cats');
});

app.put('/cat', (res, req) => {
  //console.log(req);
  res.send('From this endpoint you can replace cats');
}); 

app.delete('/cat', (res, req) => {
  //console.log(req);
  res.send('From this endpoint you can delete cats');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
