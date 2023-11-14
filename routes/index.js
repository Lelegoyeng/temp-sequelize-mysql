const express = require("express");
const router = express.Router();
const hero = require("../controllers/Hero");


router.get("/hero", hero.get);
router.post("/hero", hero.create);




module.exports = router
