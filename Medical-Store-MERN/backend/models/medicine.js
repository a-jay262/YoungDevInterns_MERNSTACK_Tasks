const mongoose = require("mongoose");
const crypto = require("crypto");
const medicineSchema = new mongoose.Schema({
    shopName: String,
    name: String,
    quantity: Number,
    imageDataString: String,
});
module.exports = mongoose.model("Medicine", medicineSchema);


