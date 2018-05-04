const mongoose = require('mongoose');

var User = mongoose.model('User',new mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim:true
    }
}));

module.exports = {User};