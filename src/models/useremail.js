const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id")
            }
        }
    }
})

//new collection
const User = mongoose.model("User", userSchema);

module.exports = User;