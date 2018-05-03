const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect Mongodb Server.');
    }
    console.log('connect to mongodb server.');
    const db = client.db('TodoApp');

    db.collection('Todos').deleteMany({text:'Eat launch.'}).then(result=>{
        console.log(result);
    })

    client.close();
});