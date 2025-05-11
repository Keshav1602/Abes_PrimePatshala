// POST : /api/v1/auth/opts (email in the body)

const Otp = require("../../../../models/otp");
const { sendOtpEmail } = require("../../../../utils/email-Helper");
const bcrypt = require("bcryptjs");

const sendOtpController = async (req, res) => {
    try{
    const {email} = req.body;
    const otpExist = await Otp.find({email}).sort({createdAt : -1}).limit(1);
    if(otpExist.length > 0 && otpExist[0].createdAt > Date.now() - 1000*60*10){
        return res.status(400).send({
            status : 'fail',
            message : `otp already sent minutes ${Math.ceil(-1*(otpExist[0].createdAt - Date.now())/1000/60)} ago`
        })
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    await sendOtpEmail({otp,email});
    const salt = await bcrypt.genSalt(10);
    console.log("salt" , salt);
    const hash = await bcrypt.hash(otp + "" , salt);
    console.log("hash" , hash);
    Otp.create({email,otp});

    res.status(201).send({
        status : 'success',
        message : "otp send successfully"
    })
    }
    catch(err){
        console.log("---------------");
        console.log("Error in sendOtpController",err.message);
        console.log("---------------");

        res.status(500);
        res.json({
            status:'fail',
            message : 'Internal server error'
    })

    }
};

module.exports = { sendOtpController };

