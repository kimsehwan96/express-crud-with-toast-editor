const path = require('path');
const models = require('../models');

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
    // console.log(req.body.title);
    // console.log(req.body.contents);
    models.Posting.create({
        title : req.body.title,
        contents : req.body.contents
    }).then(()=> {
        res.json({
            "result" : `creat success`
        })
    }).catch(err =>{
        console.log("error occuerd"),
        // console.log(err);
        res.json({
            "result" : "failed"
        })
    })
}
module.exports = {getListPlants, getDetailPlant, postContents};