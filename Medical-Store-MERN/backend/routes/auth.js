const express = require("express");
const { signup, signin } = require("../controller/auth");
const router = express.Router();

const { sendEmail, verifyOTP } = require("../services/sendEmail");


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/sendEmail", sendEmail);
router.post("/verify-otp", verifyOTP);

module.exports = router;

