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
        fileId: String,
        url: String,
        thumbnailUrl: String,
    },

    email:{
        type:String,
        required:true["Email must required"],
        unique:true
    },

    otp:{
        type:Number,
        default:0
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    socketId: String,

});

userSchema.plugin(plm);     

const UserCollection = mongoose.model("user", userSchema);

module.exports = UserCollection;