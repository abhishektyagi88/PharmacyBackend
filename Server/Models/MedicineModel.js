const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Discount: {
        type: Number,
        required: true,
    },
    ImageURL: {
        type: String,
        required: true,
    },
    Manufacturer: {
        type: String,
        required: true,
    },
    ManufacturingDate : {
        type: String,
        required: true,
    },
    ExpiryDate: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("medicines", MedicineSchema);