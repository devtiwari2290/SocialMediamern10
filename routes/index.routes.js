const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Homepage | SocialMedia", user: req.user });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About | SocialMedia" , user: req.user });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact | SocialMedia", user: req.user });
});

router.get("/login", async (req, res) => {
  res.render("login", { title: "Login | SocialMedia", user: req.user });
});

router.get("/register", (req, res, next)=>{
  res.render("register", { title: "Register | SocialMedia", user: req.user });
})

router.get("/forget", (req, res, next)=>{
  res.render("forget", { title: "Forget | SocialMedia", user: req.user });
})


module.exports = router;
