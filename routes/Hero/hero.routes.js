const express = require("express");
const router = express.Router();

const Hero = require("../../controllers/Hero");


router.get("/hero", Hero.get);

