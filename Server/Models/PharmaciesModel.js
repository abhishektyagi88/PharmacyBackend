const mongoose = require("mongoose");

const PharmaciesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    GSTNumber : {
        type: String,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true,
        unique: true
    },
    Contact: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("pharmacies", PharmaciesSchema);