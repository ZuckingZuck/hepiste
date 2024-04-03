const express = require('express');
const router = express.Router();
const { loginUser } = require("../controller/Auth");

router.post('/login', loginUser);

module.exports = router;