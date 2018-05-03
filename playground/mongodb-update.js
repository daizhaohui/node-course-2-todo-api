const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect Mongodb Server.');
    }
    console.log('connect to mongodb server.');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5aea6496feb55b2cb0a8a5a5')},
        {
            $set:{
                completed:true
            }
        },
        {
            returnOriginal:false
        }).then(result=>{
            console.log(result);
    });

    client.close();
});