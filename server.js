'use strict';

var express = require('express');
var multer  = require('multer');
var upload = multer();

var app = express();

app.get('/', function(req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

app.post('/file-size', upload.single('file'), function(req,res){
    res.json(req.file.size);
});

app.listen(process.env.PORT || 3000);