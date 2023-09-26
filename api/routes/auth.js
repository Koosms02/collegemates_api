const express = require("express")
const router = express.Router()
const twilio = require("twilio")
require('dotenv').config();
//middleware to check if the use is logged in


console.log(process.env.TWILIO_ACCOUNT_SID)
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER


//function for generating the digits
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
//inputing phone number
router.post("/phonenumber",async (req, res) => {
    const phonenumber = req.body.phonenumber

    //send the otp using libraries like fast2send and twilio
    const finalOTP = generateVerificationCode();
    twilioClient.messages.create({
        body: `hi , here is your otp ${finalOTP}`,
        to : phonenumber,
        from: twilioPhoneNumber
    }).then(messages => {
        console.log(messages)
    }).catch(error => {
        console.log(error + "while sending the OTP")
    })

    res.status(200).json({
        "phonenumber": phonenumber,
        "message":"OPT sent!"
    })
    
})

//verifying the token sent
router.post("/otp", (req, res) => {
    

    //respose from here will be used to trigger signup or login 
})

//sign up 
router.post("/signup", (req, res) => {
    
})

//login otherwise
router.post("/login", (req, res) => {
    
})
module.exports = router 