const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")


const User = require("../models/user")



//getting all the user from database
router.get("/", (req, res, next) => {

    res.status(200).json({
        message: "handling get request from user"
    })
})

//creating a user

router.post("/", (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    })

    console.log(user)

    user.save().then(result => {
        console.log(result)
    }).catch(err => console.log("error:" + err))


    res.status(200).json({
        message: "handling get request from user",
        userInfo: user
    })
})

module.exports = router