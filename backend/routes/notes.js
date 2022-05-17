const express = require("express");
const router = express.Router();

//app.get nahi use karenge ab router,get because ye ek particular orute ke liye hai

router.get("/", (req, res) => {
  res.json([]);
});

module.exports = router;
