const express = require('express')
const cors = require('cors')
const { connectToDB, getDB } = require('./db')
const { ObjectId } = require('mongodb')

const app = express()

app.use(cors())
app.use(express.json())

let port = 8080;

let db;

connectToDB((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
        db = getDB()
    }
    else {
        console.log("Error connecting to MongoDB Client")
    }
})


// GET
app.get('/getAllUsers', async function(req, res) {
    try {
        let users = []

        db.collection('users')
        .find()
        .forEach((user) => users.push(user))
        .then(() => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(400).json("error getting users")
        })
    }
    catch (err) {
        res.status(500).json("error")
    }
})

app.get('/getAllPosts', async function(req, res) {
    let posts = []

    db.collection('posts')
    .find()
    .forEach((post) => posts.push(post))
    .then(() => {
        res.status(200).json(posts)
    })
    .catch((err) => {
        res.status(400).json(`Error: ${err}`)
    })
})

// POST
app.post('/createNewUser', async function(req, res) {
    try {
        db.collection('users')
        .insertOne(req.body)
        .then(() => {
            res.status(201).json("Successfully created new user")
        })
        .catch((err) => {
            res.status(400).json(`Error creating user: ${err}`)
        })
    }
    catch (err) {
        res.status(500).json("error")
    }
})

app.post('/createNewPost', async function(req, res) {
    db.collection('posts')
    .insertOne(req.body)
    .then(() => {
        res.status(201).json("Successfully created post")
    })
    .catch((err) => {
        res.status(400).json(`Error: ${err}`)
    })
})


// PATCH
app.patch('/updateUser/:id', async function(req, res) {
    try {
        db.collection('users')
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body})
        .then(() => {
            res.status(200).json("Successfully updated user")
        })
        .catch((err) => {
            res.status(400).json(`Error updating user: ${err}`)
        })
    }
    catch (err) {
        res.status(500).json(`error: ${err}`)
    }
})

// make endpoints to update posts
// edit body
// edit/remove image
// add/delete/edit comments
// add/remove likes


// DELETE
app.delete('/deleteUser/:id', async function(req, res) {
    try {
        db.collection('users')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(() => {
            res.status(200).json("Successfully deleted user")
        })
        .catch((err) => {
            res.status(400).json(`Error deleting user: ${err}`)
        })
    }
    catch (err) {
        res.status(500).json(`Error: ${err}`)
    }
})