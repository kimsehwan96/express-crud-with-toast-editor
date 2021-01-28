const path = require('path');

const getListPlants = (req, res) => {
    res.json({
        result : [
            "HI!"
        ]
    })
}

const getDetailPlant = (req, res) => {
    res.json({
        result : [
            req.params
        ]
    })
}
module.exports = {getListPlants, getDetailPlant};