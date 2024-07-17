const express = require("express");

const gameRoutes = express.Router();

// connect to db
const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

//let user enter name at beginning of game
gameRoutes.route("/").get(async (req, res) => {
    // let player enter name
    try {
        let db_connect = dbo.getDb();
        let player = {
            name: req.body.name
        }
        const result = db_connect.collection("hangman").insertOne(player);
        res.json(result);

    } catch (err) {
        throw err;
    }
});

// Get random work from DB and return
gameRoutes.route("/get-word").get(async (req, res) => {
    try{
        let db_connect = dbo.getDb("hangman");
        const result = await db_connect.collection("words").find({}).toArray();
        const randomWord = result[Math.floor(Math.random() * result.length)]
        res.json(randomWord);
    } catch (err) {
        throw err;
    }
});

// Post winning user to top-scores
gameRoutes.route("/add-user").post(async (req, res) => {
    try{
        let db_connect = dbo.getDb("hangman");
        const insertUser = {
            "username": req.body.username,
            "guesses": req.body.guesses,
            "wordLength": req.body.wordLength,
        }
        const result = await db_connect.collection("hangman").insertOne(insertUser);
        res.json(result);
    } catch (err) {
        throw err;
    }
});

// Get random work from DB and return
gameRoutes.route("/get-top-scores").get(async (req, res) => {
    try{
        //Word length
        let db_connect = dbo.getDb("hangman");
        const result = await db_connect.collection("hangman").find({wordLength:3}).sort({guesses:1}).limit(10).toArray();
        console.log(result)
        res.json(result);
    } catch (err) {
        throw err;
    }
});

// Get random work from DB and return
gameRoutes.route("/get-top-scores/:id").get(async (req, res) => {
    try{
        //Word length
        let db_connect = dbo.getDb("hangman");
        let wordLength = parseInt(req.params.id);
        console.log(wordLength);
        console.log(typeof(wordLength));
        const result = await db_connect.collection("hangman").find({wordLength:wordLength}).sort({guesses:1}).limit(10).toArray();
        console.log(result)
        res.json(result);
    } catch (err) {
        throw err;
    }
});

module.exports = gameRoutes;