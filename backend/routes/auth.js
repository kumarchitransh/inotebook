const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//app.get nahi use karenge ab router,get because ye ek particular orute ke liye hai

//creae a user using post "/api/auth post request maar ke user ka data bhejna hai"
router.post(
  "/createuser",
  [
    body("name", "Enter a Vaild Name 😐").isLength({ min: 3 }),
    body("email", "Enter a Valid Email 😐").isEmail(),
    body("password", "Password Must Be of atleast 5 characters 🙂").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are error return bad request and errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist 😅" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      // .then((user) => res.json(user)).catch(err=>{console.log(err);res.json({error:'Please enter a unique email address',message:err.message})});
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred 😬");
    }
  }
);

module.exports = router;
