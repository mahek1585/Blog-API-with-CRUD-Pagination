const Post = require("../models/post.model");

// CREATE POST
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // validation
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const post = await Post.create({
      title,
      content,
      author: req.user.userId, // JWT se aaya
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post" });
  }
};

module.exports = {
  createPost,
};
