const express = require("express")
const router = express.Router();

const User = require("../models/user")
const fetchUser = require("../user_cases/fetchuser")
//getting all the user from database
router.get("/", (req, res, next) => {

    const currentUserId = req.body.id
    /** 
     * request must container gender preference , agerange preference , current user id
     * 
     * how the fetch algorithm work 
     * 
     * fetch all the user where the current userId is not in likedByIds and disLikedIds
     * disLikedIds initially containers its own id.
     * 
     * 
     */

    //call the function for fetching users
    fetchUser.fetchUsers(User, currentUserId, res, req)

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

    const operation = req.body.operation
    /**
     * req should contain the purpose of calling this end point
     * "updating the likedById"
     * "updating my profile"
     * ""
     * 
     */

    if (operation == "updateLikedById") {
        User.findById({ "_id": id })
    } else {
        res.status(200).json({
            message: "User updating their profiles",
            id: id,
        })

    }
})




module.exports = router