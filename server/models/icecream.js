const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const iceCream = new Schema({
    name:String,
    type:String,
    color:String
})

module.exports = mongoose.model("IceCream", iceCream);