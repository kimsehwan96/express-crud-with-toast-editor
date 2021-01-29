const express = require('express');
const router = express.Router();
const {getListPlants, getDetailPlant, postContents} = require('../controllers/plant.controller');

router.post('/',postContents);
router.get('/',getListPlants); // /plants
router.get('/:id', getDetailPlant)

module.exports = router;