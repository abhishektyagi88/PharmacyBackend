const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isPharmacist : {
        type : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model("users", registerSchema);

