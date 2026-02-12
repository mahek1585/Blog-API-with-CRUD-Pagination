const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/auth.controller");

router.post("/signup", signup);

router.post("/login", login);

router.get("/check", (req, res) => {
  res.send("AUTH ROUTE OK");
});


module.exports = router;