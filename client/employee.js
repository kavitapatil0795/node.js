const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/quotes', (req, res) => {
    console.log(req.body)
  
  })
  var db
const MongoClient = require('mongodb').MongoClient
console.log("before connect");
MongoClient.connect('mongodb://localhost:27017/testdb', (err, client) => {
    console.log("into connect");
    if (err) return console.log(err)
    //console.log("after error")

    db = client.db('testdb')
    // ... start the server
    app.listen(3000, function () {''
        console.log('listening on 3000')
    })