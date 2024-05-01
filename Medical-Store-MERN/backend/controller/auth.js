const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
let otpMap = new Map();
require("dotenv").config();

exports.sendOtp = async (req, res) => {
  let email = req.body.email;
  let generatedOTP = Math.floor(Math.random() * 1000000);
  otpMap.set(email, { generatedOTP });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alishbajaved205@gmail.com",
      pass: "HarryMetSejal",
    },
  });
  await transporter.sendMail(
    {
      from: "alishbajaved205@gmail.com",
      to: email,
      subject: "OTP for Email Verifaction P-Medics",
      text: "Hey User!",
      html: `<h1>Your OTP for registration at PETHUB</h1>
      <p>Hi ${
        shopName + " " + ownerName
      } Thanks for Registering with us here the OTP Code for your email verification for PETHUB is below:</p><h1>${generatedOTP}</h1>`,
    },
    (err, info) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to send OTP",
        });
      }
      return res.status(200).json({
        message: "OPT sent Successfully",
      });
    }
  );
};
exports.signup = (req, res) => {
  const user = new User(req.body); // Create a new user instance with the request body data

  user.save((err, savedUser) => { // Save the user to the database
    if (err || !savedUser) { // Check if there's an error or if the user wasn't saved
      console.error("Unable to register:", err);
      return res.status(400).json({ error: "Unable to register" });
    }

    console.log("User registered:", savedUser);
    return res.status(200).json({ user: savedUser });
  });
};

exports.signin = (req, res) => {
  console.log("in here");
  const { email, password } = req.body;
  User.findOne({ email: email }).exec((err, user) => {
    if (err || !user) {
      console.log("No User Found");
      return res.status(400).json({
        error: "No User Found",
      });
    }
    if (!user.authenticate(password)) {
      console.log("User Name and Password not matched");
      return res.status(401).json({
        error: "User Name and Password not matched",
      });

    }
    const token = jwt.sign({ user_id: user._id }, process.env.SECRET);
    const { _id, shopName, ownerName, email } = user;
    console.log("LoggedIn");

    return res.json({
      token,
      user: { _id, shopName, ownerName, email },
    });
  });
};
exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token == null) {
    return res.status(401);
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        error: "Access Denied",
      });
    }
    req.user = user;
    next();
  });
};
