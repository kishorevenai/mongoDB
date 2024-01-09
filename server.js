require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/userModel");
const DBcon = require("./config/dbCon");

DBcon();
app.use(express.json());
app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const newData = {
    username,
    password,
  };
  try {
    const result = await User.create(newData);
    res
      .json({ message: `The user ${result.username} has been created` })
      .status(201);
  } catch (error) {
    res.json({ message: `${error}` }).status(500);
  }
});

app.get("/findspec", async (req, res) => {
  const { username } = req.body;
  try {
    const filter = { username };
    const age = {age:17};
    // const result = await User.find({username:{$regex:/no/i}}).exec()     //finding specific objects refering with starting letter.
    // --
    // const result = await User.find().sort({username:1}).exec()              // sorting the username in alphabets.
    // --
    // const result = await User.find({age:{$lt:'21'}}).lean()              // finding the objects by filtering the age below 21 using $gt
    // --
    // const result = await User.find({username:{$in:usernames}}).lean()              // finding the objects by filtering the age below 21 using $gt
    // --
    // const result = await User.findOneAndUpdate(filter, age, {            // updating the user by findandupdate function.
    //   new: true,
    // }).exec();
    // --
    // const result = await User.findOneAndUpdate(filter,age,{              //updates the object, but if the object doesnt exixts,it pushes a new object in the array.
    //     new:true,
    //     upsert:true
    // })
    // --    
    // const result = await User.updateOne(filter, age).exec()             // updating the age using updateOne.
    // --
    
    if (!result) {
      return res.json({ message: "The user not found" }).status(400);
    }
    res.json(result).status(200);
  } catch (error) {
    return res.json({ message: `${error}` }).status(500);
  }
});

mongoose.connection.once("open", () => {
  app.listen(3500, () => {
    console.log("Mongo db connected");
  });
});
