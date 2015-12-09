var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var DAO = require('../DAO');
var noticeHandler = require('../control/noticeHandler.js');
var gridder = require('../DAO/gridder');


router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/contact', function(req, res, next) {
    res.render('contact');
});
router.get('/training', function(req, res, next) {
    DAO.pullTable(function(myDocs){
        console.log(JSON.stringify(myDocs[0]));
        res.render('training', {myArray : myDocs});
    });});


router.get('/notice', function(req, res, next) {
    DAO.pullTable(function(myDocs){
        console.log(JSON.stringify(myDocs[0]));
        res.render('notice', {myArray : myDocs});
    });
});




router.get('/upload', function(req, res, next) {
    res.render('upload');
});

router.post('/upload', function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields){
    if(err){
      throw err;
    }
      noticeHandler.handleAddNotice(fields);
      res.redirect('/');
  })
});



module.exports = router;
