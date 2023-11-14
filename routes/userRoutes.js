const express = require("express");
const router = express.Router();
const { processRegister } = require("../controllers/userControllers");

router.post("/process-register", processRegister); // signup process

module.exports = router;
