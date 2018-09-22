const express = require('express');
const data = require('./data/data.json');
// const daa = require('./data/bardata.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get('/data', function(req, res){
  res.json(data);
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
  console.log(`Server is running on port ${app.get('port')}`);
});
