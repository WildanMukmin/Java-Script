// setting express
const express = require("express");
const app = express();
const port = 3000;

// setting mongose
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://wildan:wildan123@contact.yubovxi.mongodb.net/");
const UserSchema = new mongoose.Schema({
    nama: "string",
    nohp: "string",
    email: "string",
});
const UserModel = mongoose.model("Users", UserSchema);

// setting routes
app.get("/", (req, res) => {
    UserModel.find({})
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            console.log(error);
        });
});

// setting server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
