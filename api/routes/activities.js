const express = require("express")
const mongoose = require("mongoose")


const router = express.Router();
const Activity = require("../models/activity");



router.post("/", (req, res, next) => {
    // print(res.body)

    const activity = Activity({
        _id: new mongoose.Types.ObjectId(),
        event: req.body.event,
        userId: req.body.userId,
        name: req.body.name,
        age: req.body.age,
        time: req.body.time,
        location: req.body.location


    })

    activity.save()
        .then((snapshot) => {
            res.status(200).json({ "snapshot": snapshot })
        })
        .catch((error) => {
            res.status(500).json({ "error": error })
        })


})

router.patch("/:activityId", (res, req, next) => {

})

router.get("/", (req, res, next) => {

    //basic function for fetching activies , should filter by distance 

    Activity.find()
        .then((result) => {
            res.status(200).json({ "pastimes": result })
        })


})


router.delete("/:activityId", (req, res, next) => {
    const activityId = req.params.activityId

    Activity.deleteOne({ "_id": activityId })
        .then((snapshot) => res.status(200).json({ "snap": snapshot }))
        .catch((error) => res.status(500).json({ "error message": error.message }))
})



module.exports = router