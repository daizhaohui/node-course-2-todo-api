var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = new express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{

    var todo = new Todo({
        text:JSON.stringify(req.body),
        completedAt:1
    });

    todo.save(function(err,doc){
       if(err){
           console.log('unable to save todo:',err)
           res.send(err);
       } else {
           console.log('todo saved:',doc);
           res.send(doc);
       }
    });

});

app.listen(3000,()=>{
    console.log('Started on port:3000')
})


module.exports = {app}