const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth Route Working!");
});

module.exports = router; // ✅ Ensure module.exports is used correctly
