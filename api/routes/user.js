const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const ObjectId = mongoose.ObjectId


const User = require("../models/user")



//getting all the user from database
router.get("/", (req, res, next) => {

    res.status(200).json({
        message: "handling get request from user"
    })
})

//creating a user

router.post("/", (req, res, next) => {
    // User.updateOne({ "_id": req.params.userid }, { $set: { "name": "Annah" } })
    //     .then(doc => res.status(200).json({
    //         "message": doc,
    //     }))
    // User.findOne({ "_id": req.params.userid }).then((snap) => res.status(200).json({ "message": snap }))

    // .then((snapshot) => res.status(200)
    //     .json({ "user": snapshot }))

    const user = new User({
        _id: req.body.id != null ? new mongoose.Types.ObjectId() : ObjectId(req.body.id),
        name: req.body.name,
        age: req.body.age,
        name: req.body.name,
        birthday: req.body.birthday,
        age: req.body.age,
        university: req.body.university,
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
        elo: req.body.elo
    })

    // console.log(user)

    user.save().then(result => {
        res.status(200).json({ "message": "data_saved" })
    }).catch(err => res.status(500).json({ "error": err }))

})


//delete users
router.delete('/:userid', (req, res, next) => {
    console.log(req.params.userid)

    User.findByIdAndDelete({ "_id": req.params.userid })
        .then((results) => {
            console.log(results)
            res.status(200).json({ "message": "delete successfull" })
        })
        .catch((err) => { res.status(500).json({ "error": err }) })
    // user.delete
})

//update the user

router.patch("/:userId", (req, res, next) => {

    const id = req.params.userId

    const operation = req.body.operation
    /**
     * req should contain the purpose of calling this end point
     * "updating the likedById"
     * "updating my profile"
     * ""
     * 
     */

    if (operation == "updateLikedById") {
        User.findByIdAndUpdate({ "_id": id }, { $addToSet: { "likedByIds": ["_"] } }, { new: true })
            .then((result) => { res.status(200).json({ "results": result }) })
            .catch((error) => res.status(500).json({ "error": error }))
    } else {
        res.status(200).json({
            message: "User updating their profiles",
            id: id,
        })

    }
})




module.exports = router