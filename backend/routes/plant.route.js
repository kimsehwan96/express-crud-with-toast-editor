const express = require('express');
const router = express.Router();
const {getListPlants, getDetailPlant} = require('../controllers/plant.controller');

router.get('/',getListPlants); // /plants
router.get('/:id', getDetailPlant)

module.exports = router;