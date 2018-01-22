//import express
var express = require('express');

//create an express app
var app = express();

//import the instagram module for node
var ig = require('instagram-node').instagram();

// configure instagram app with your access_token
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '2273330095.567f51f.28bad2fb4c8e443f9271d796790968db',
});


//tell node where to look for site resources
app.use('/css', express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with your access token
// we'll get to this soon
// SET THE ROUTES
// =================================================== // home page route - our profile's images
app.get('/', function (req, res) {
    // use the instagram package to get popular media
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        res.render('pages/index', {
            grams: medias
        });
    });
});
// START THE SERVER
// ================================================== 
app.listen(8082);
console.log('App started! Look at http://localhost:8080');
