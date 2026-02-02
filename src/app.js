const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// test route
app.get("/", (req, res) => {
  res.send("Blog API running...");
});

module.exports = app; 
