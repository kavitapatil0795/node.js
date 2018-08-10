console.log('May Node be with you');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/login-kavita.html')
//     // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//     // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
//     // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//     // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })
  //register API
// app.post('/register', (req, res) => {
//   console.log(req.body)
  
//     // Validation
    
//     db.collection('users').save(req.body, (err, result) => {
//         if (err){
//             res.send({"status":"Error while registration!"});
//         } 
//         console.log('saved to database')
//         res.send({"status":"Sucess"});
//     })
   
    
// })
// //login API
// app.post('/login', (req, res) => {
//     console.log(req.body)
    

// })
// //employee API
// app.post('/employee', (req, res) => {
//     console.log(req.body)
//     db.collection('employees').save(req.body, (err, result) => {
//         if (err){
//             res.send({"status":"Error while registration!"});
//         } 

//         console.log('saved to database')
//         res.send({"status":"Sucess"});
//     })
   

// })

var db
const MongoClient = require('mongodb').MongoClient
console.log("before connect");
MongoClient.connect('mongodb://localhost:27017/testdb', (err, client) => {
    console.log("into connect");
    if (err) return console.log(err)
    //console.log("after error")

    db = client.db('testdb')
    
    // ... start the server
app.listen(3000, function () {
        console.log('listening on 3000')
    })

    // db.collection('student').insertOne({name:"navya",age:28},(err, result) => {
    //     if (err) return console.log(err)
    //     console.log('insert done')
    // })
    // db.collection('student').insertMany([{name:"rakesh",age:31},{name:"savita",age:28}],(err, result) =>{
    //     if (err) return console.log(err)
    //     console.log('insert many done')
    // })
    //     db.collection('student').deleteOne({},(err, result) =>{
    //     if(err) return console.log(err)
    //     console.log('delete done')
    // })

db.collection('student').updateMany({name:"deepa"},{$set:{name:"dee"}},{upsert:true,multi:true},(err, result) => {
        if (err) return console.log(err)
        console.log('update done')
    })

   var cursor= db.collection('student').find();
   cursor.each(function(err,doc){
       console.log(doc)

   })
        
       
       



   
    // app.post('/quotes', (req, res) => {

    //     console.log(JSON.stringify(req.body));

    //     db.collection('quotes').save(req.body, (err, result) => {
    //         if (err) return console.log(err)

    //         console.log('saved to database')
    //         res.redirect('/')
    //     })

        // /res.send({"status":"Sucess", ""})
    // })
    //insert operation
    // var query3 = [{name: "neelu", quote: "b" },{name:"vihu",quote:"b"}]
    // db.collection('quotes').insertMany(query3, function (err, result) {
    //     if (err) return console.log(err)
    //     console.log('inserted record')
    //     console.log('after')
    // })
    //update operation
    // var myquery = { "name": "neelu" }
    // var value = [{ $set: { "name": "kavi" } }]
    // db.collection('quotes').updateOne(myquery, value, (err, result) => {
    //     if (err) return console.log(err)
    //     console.log('update database')
    // })

    // delete operation
    // var query = [{ name: "mant" },{name: "neelu"}]
    // db.collection('quotes').deleteOne(query, function (err, result) {
    //     if (err) return console.log(err)
    //     console.log('document deleted')
    // })
    // var query1 = { quote: "sdfsd" }
    // db.collection('quotes').deleteOne(query1, function (err, result) {
    //     if (err) return console.log(err)
    //     console.log("result "+result.toString())
    //     console.log('document deleted')
    // })
    //upsert operation
    // var criteria = { name: "deepa" }
    // var update = { $set:{name: "ayush" } }
    // db.collection('quotes').updateOne(criteria, update, { upsert: true }, (err, result) => {
    //     if (err) return console.log(err)
    //     console.log('upsert  done')
    // })
    
})