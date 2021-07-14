const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const College = require("../models/college");

router.post("/", (req, res, next) => {
  const college = new College({
    _id: req.id,
    college_name: req.college,
  });
  college
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
      console.log(err);
    });
  res.status(201).json({
    message: "data added",
  });
});

router.get("/", (req, res, next) => {
  College.find()
    .exec()
    .then((result) => {
      const colleges_data = result[0];
      console.log(colleges_data["colleges"]);

      res
        .status(201)
        .json({
          data: colleges_data,
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    });
});

router.get("/:collegeID", (req, res, next) => {
  College.find()
    .exec()
    .then((result) => {
      const colleges_data = result[0];
      //   console.log(colleges_data["colleges"])
      colleges_data["colleges"].map((college) => {
        // console.log(college);
        if (req.params.collegeID == college["id"]) {
          console.log(college["college"]);
          const name = college["college"];
          res.status(201).json({
            data: name,
          });
        }
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

module.exports = router;
