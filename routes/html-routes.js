// require express and path
const router = require("express").Router();
const path = require("path");

// get excersize html page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
})
//get stats html page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
})

module.exports = router;