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

const postContents = (req, res) => {
    console.log(req);
    res.json({
        result : "temp"
    })
}
module.exports = {getListPlants, getDetailPlant, postContents};