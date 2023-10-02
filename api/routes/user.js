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

router.post("/:userid", (req, res, next) => {



    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        name: req.body.name,
        birthday: req.body.birthday,
        age: req.body.age,
        university: req.body, university,
        course: req.body.course,
        residence: req.body.residence,
        location: req.body.location,
        verified: req.body.verified,
        Photos: req.body.Photos,
        interest: req.body.interest,
        bio: req.body.bio,
        gender: req.body.gender,
        preference: req.body.preference,
        status: req.body.status,
        preferredDistance: req.body.preferredDistance,
        preferredAgeRange: req.body.preferredAgeRange,
        likedIds: req.body.likedByIds,
        disLikedIds: req.body.disLikedIds,
        likedByIds: req.body.likedByIds,
        locality: req.body.locality,
    })

    // console.log(user)

    // user.save().then(result => {
    //     console.log(result)
    // }).catch(err => console.log("error:" + err))


    // res.status(200).json({
    //     message: "handling get request from user",
    //     // userInfo: user
    // })
})

module.exports = router