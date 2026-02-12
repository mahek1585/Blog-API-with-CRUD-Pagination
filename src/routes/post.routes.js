const express = require("express");
const router = express.Router();

const { createPost, getAllPosts } = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth.middleware");

// CREATE POST (protected)
router.post("/", authMiddleware, createPost);

// GET ALL POSTS (public)
router.get("/", getAllPosts);

module.exports = router;
