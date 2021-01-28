const express = require('express');
const router = express.Router();
const {getListPlants, getDetailPlant, postContents} = require('../controllers/plant.controller');

router.get('/',getListPlants); // /plants
router.get('/:id', getDetailPlant)
router.post('/', postContents);

module.exports = router;