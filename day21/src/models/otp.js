const mongoose  = require('mongoose');

const otpSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        trim : true,
    },
    otp:{
        type : Number,
        required : true,
        trim : true,
    }

},{timestamps : true});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;