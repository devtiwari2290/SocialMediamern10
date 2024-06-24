const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true["Name must required"],
        trim:true
    },

    password:String,

    avatar:{
        type:String,
        default:"https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"

    },

    email:{
        type:String,
        required:true["Email must required"],
        unique:true
    },

});

userSchema.plugin(plm);     

const UserCollection = mongoose.model("user", userSchema);

module.exports = UserCollection;