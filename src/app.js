const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");
const postRoutes = require("./routes/post.routes");



const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/posts", postRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Blog API running...");
});

module.exports = app; 
