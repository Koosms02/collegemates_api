const express = require("express")
const router = express.Router()
const twilio = require("twilio")
const mongoose = require("mongoose")
require('dotenv').config();
//middleware to check if the use is logged in


const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

const User = require("../models/user")

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
    /**
     * req must contain the phone number ,otp and Id if it exists
     * id === "" 
     */

    const phonenumber = req.body.phonenumber
    const id = req.body.id
    console.log(phonenumber)
    User.find({ "phonenumber": phonenumber })
        .then(results => {
            const userinfo = results[0]
            if (userinfo.phonenumber) {
                //user have an account 
                res.send({
                    route: 'homescreen',
                    token: results[0]._id
                })
            } else {
                //user does not have an account

                const user = User({ _id: new mongoose.Types.ObjectId, phonenumber: phonenumber })

                user.save().then(results => { }).catch(err => {

                })

                res.send({
                    route: 'userdata screen'
                })
            }

        })
        .catch(err => res.status(500).json({
            "error": "There was an error"
        }))

    if (id === "") {
        //user is not registered
        const user = User({
            _id: new mongoose.Types.ObjectId,
            phonenumber: phonenumber
        })

        // user.save()
        //     .then(res => { res.status(200).json({ message: "user created and saved successfully" }) })
        //     .catch(err => { res.status(200).json({ err: err }) })

    } else {
        //check for user name 
        // User.findById(id).then(doc => print(doc))
    }
    // res.status(200).json({
    //     "phonenumber": phonenumber,
    //     "OTP": OTP
    // })

    //respose from here will be used to trigger signup or login 
})

//sign up 
router.post("/signup", (req, res) => {

})

//login otherwise
router.post("/login", (req, res) => {

})
module.exports = router 