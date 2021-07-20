const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res, next) => {
  const user = new User({
      _id: req.headers.uid,
      name: req.body.name,
      photoURL: req.body.photoURL,
      email: req.body.email,
      acedemic_year: "",
      graduating_year: "",
      current_college: "",
      resume: "",
      linkedin: "",
      github: "",
      gitlab: "",
      website:"",
      desc: "",
      posts_created: [],
      posts_applied: [],
      // req.body.posts_applied,
      posts_saved: []
  });
  user.save()
  .then(result=>{
    console.log(result);
    res.status(201).json({
      message: "User Created",
    });
  }).catch((err) => {
    res.status(400).json({
      message: err,
    });
    console.log(err);
  });
});

//patch user
//get user
router.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  
  User.findById(userId)
  .exec()
      .then((result) => {
          const user = result;
          res.status(201).json({
              success: true,
              message: "User was fetched",
              data: user,
          })
          
      })
      .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });


});

module.exports = router;
