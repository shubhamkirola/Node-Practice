const mongoose = require('mongoose');


const traderSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    niche : {
        type : String,
        required : true
    },
    capital : {
        type : Number,
        required : true
    }
});

const Trader = mongoose.model("Trader", traderSchema);
module.exports = Trader;