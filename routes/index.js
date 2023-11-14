const express = require("express");
const router = express.Router();
const hero = require("../controllers/Hero");


router.get("/hero", hero.get);
router.post("/hero", hero.create);
router.put("/hero/:id", hero.update);
router.delete("/hero/:id", hero.del);




module.exports = router
