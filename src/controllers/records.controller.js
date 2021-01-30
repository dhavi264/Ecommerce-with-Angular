const { Expansion } = require("@angular/compiler");
const db = require("../models");
const Records = db.records;
exports.create = (req, res) => {
    if (!req.body.title){
        res.status(400).send({message:"constent"});
        return;
    }
    const Records = new Records({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published?req.body.published:false
    });
    tutorial.save(records)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message|| " cannot send data"
        });
    });
};
