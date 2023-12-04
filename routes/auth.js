//auth.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// User sign-in
router.post('http://localhost:3000/auth/signin', AuthController.signin);
// User signout 
router.get('/signout', AuthController.signout);

module.exports = router;