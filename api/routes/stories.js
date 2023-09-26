const express = require("express")
const router = express.Router();

//getting all the user from database
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "handling get request from user"
    })
})



module.exports = router