const express = require("express");
const { addMedicine } = require("../controller/medicinecontroller");
const router = express.Router();

router.post("/medicine", addMedicine);

module.exports = router;

