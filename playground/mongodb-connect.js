const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect Mongodb Server.');
    }
    console.log('connect to mongodb server.');
     const db = client.db('TodoApp');
    console.log(new ObjectID());

    db.collection('Todos').find({_id: new ObjectID('5aea6496feb55b2cb0a8a5a5')}).toArray().then(docs=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    });

    client.close();
});