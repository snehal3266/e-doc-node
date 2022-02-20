var express = require("express");

var bodyparser = require("body-parser");
const { json } = require("body-parser");
const Documents = require("../models/Documents");

var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let documents = new Documents();
    if(body.data.id != ""){
    documents = await Documents.findById(body.data.id);
    }
    documents.title= body.data.title;
    documents.malecontent= body.data.malecontent;
    documents.femalecontent= body.data.femalecontent;
    documents.save().then(result=>{
        res.end(JSON.stringify(result));
    },err=>{
        res.end(JSON.stringify(err));
    });
});
router.post("/list",async(req,res)=>{
    let documents = await Documents.find();
    res.json({data:documents});
});
router.post("/get",async(req,res)=>{
    let body = req.body;
    let documents = await Documents.findById(body.data.id);
    res.json({data:documents});
});
router.post("/delete",async(req,res)=>{
    let body = req.body;
    await Documents.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status":"success"
        }
    }
    res.end(JSON.stringify(data));
});
module.exports = router;