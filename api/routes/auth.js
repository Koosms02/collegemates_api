const express = require("express")
const router = express.Router()
const twilio = require("twilio")
require('dotenv').config();
//middleware to check if the use is logged in


const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

let OTP = null;
//function for generating the digits
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

//inputing phone number
router.post("/phonenumber", async (req, res) => {
    const phonenumber = req.body.phonenumber
    OTP = generateVerificationCode()

    //send the otp using libraries like fast2send and twilio
    // const finalOTP = generateVerificationCode();
    // twilioClient.messages.create({
    //     body: `hi , here is your otp ${OTP}`,
    //     to : phonenumber,
    //     from: twilioPhoneNumber
    // }).then(messages => {
    //     console.log(messages)
    // }).catch(error => {
    //     console.log(error + "while sending the OTP")
    // })

    res.status(200).json({
        "phonenumber": phonenumber,
        "message": OTP
    })

})

//verifying the token sent
router.post("/otp", (req, res) => {
    const phonenumber = req.body.phonenumber
    const id = req.body.id


    res.status(200).json({
        "phonenumber": phonenumber,
        "OTP": OTP
    })

    //respose from here will be used to trigger signup or login 
})

//sign up 
router.post("/signup", (req, res) => {

})

//login otherwise
router.post("/login", (req, res) => {

})
module.exports = router 