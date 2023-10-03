const express = require("express")
const router = express.Router();

const User = require("../models/user")
//getting all the user from database
router.get("/", (req, res, next) => {

    User.find()
        .sort({ elo: -1 })
        .then(results => res.status(200).json({ "message": results }))
        .catch(err => res.status(500).json({ "error": err }))

})

//when a user creates an account

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "handling post request from user"
    })
})

// //when a user creates an account
router.post("/:userId", (req, res, next) => {
    const id = req.params.userId
    res.status(200).json({
        message: "handling post request from user",
        id: id,
    })
})


//when a user update the information

router.patch("/:userId", (req, res, next) => {
    const id = req.params.userId
    res.status(200).json({
        message: "User updating their profiles",
        id: id,
    })
})

module.exports = router