const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")




// mongodb+srv://collegemates11:<password>@cluster0.2sytgaa.mongodb.net/?retryWrites=true&w=majority
const userRoutes = require('./api/routes/user')
const usersRoutes = require('./api/routes/users')
const storiesRoutes = require('./api/routes/stories')
const activityRoutes = require('./api/routes/activities')
const authRoutes = require("./api/routes/auth")


mongoose.connect("mongodb+srv://collegemates11:" + process.env.MANGO_ATLAS_PW + "@cluster0.2sytgaa.mongodb.net/?retryWrites=true&w=majority")

app.use(morgan("dev"))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//handing the cors policies

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*")

    res.header([" Origin , X-Requested-With , Content-Type , Accept , Authorization ", "*"])

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE , PATCH')
        return res.status(200).json({
            message: "cors policies passed successfully"
        })

    }

    next()
})
//this are the route middleware
app.use('/auth' , authRoutes)
app.use('/user', userRoutes)
app.use('/users', usersRoutes)
app.use('/stories', storiesRoutes)
app.use('/activities', activityRoutes)



//handling the error if no route is passed
app.use((req, res, next) => {
    const error = new Error("NOT FOUND")
    error.status = 404
    next(error)
})

//handling error beyond routes and out own errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)

    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app