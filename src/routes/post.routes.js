const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// CREATE POST (protected)
router.post("/", authMiddleware, createPost);

module.exports = router;


