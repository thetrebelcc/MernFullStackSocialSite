const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle:{
        type: String,
        required:true,
        max: 40
    },
    Company:{
        type: String
    }, 
    Website:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    skills: {
        type: [String],
        required
    }
});