const express = require("express");

const gameRoutes = express.Router();

// connect to db
const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

// let user enter name at beginning of game
// gameRoutes.route("/").get(async (req, res) => {
//     // let player enter name
//     try {
//         let db_connect = dbo.getDb();
//         let player = {
//             name: req.body.name
//         }
//         const result = db_connect.collection("hangman").insertOne(player);
//         res.jason(result);

//     } catch (err) {
//         throw err;
//     }
});;
