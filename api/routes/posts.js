const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/post");

router.post("/createpost", (req, res, next) => {
    const post = new Post( req.body)
    post.save().then((result) => {
      console.log(result);
      res.status(201).json({
        success: true,
        message: "post added",
        data: result,
    })
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
      console.log(err);
    });
  
})

router.get("/", (req, res, next) => {

    
    Post.find()
        .select("title cover tech_stack post_description application_deadline post_type created_by")
        .exec()
        .then((result) => {
            console.log(result)
            res.status(201).json({
                success: true,
                message: "All posts were fetched",
                data: result,
            })
            
        })
        .catch((err) => {
            res.status(400).json({
              message: err,
            });
          });

})



router.get("/:postId", (req, res, next) => {
    const postId = req.params.postId;
    
    Post.findById(postId)
    .exec()
        .then((result) => {
            const Post = result;
            res.status(201).json({
                success: true,
                message: "Post was fetched",
                data: Post,
            })
            
        })
        .catch((err) => {
            res.status(400).json({
              message: err,
            });
          });


});
module.exports = router;