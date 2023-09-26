const express = require("express")
const router = express.Router()
//middleware to check if the use is logged in

//inputing phone number
router.post("/phonenumber",async (req, res) => {
    const phonenumber = req.body.phonenumber

    //send the otp using libraries like fast2send and twilio
    
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