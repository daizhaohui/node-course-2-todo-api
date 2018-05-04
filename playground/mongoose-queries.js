const mongoose = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '5aebca771e713113c6d2a891';

if(ObjectID.isValid(id)) {
    Todo.findById(id).then(todos => {
        if (todos) {
            console.log('Todos:', todos)
        } else {
            console.log('Todos:', [])
        }
    }).catch(e => {
        console.log('Error:', e);
    });
} else {
    console.log('Invalid id:',id);
}