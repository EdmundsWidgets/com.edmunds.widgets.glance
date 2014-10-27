/**
 * Created by Ivan_Kauryshchanka on 10/23/2014.
 */
var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    url = require('url'),
    masheryApi = require('./routes/api/mashery'),

    http = require('http'),
    path = require('path'),

    fs = require('fs'),
    ejs = require('ejs');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/libs', express.static(path.join(__dirname, 'bower_components')));
});

app.use('/glance', express.static(path.join(__dirname, 'public/glance')));
app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/glance/configure', routes.glance.configurator);
app.get('/glance/configure/about', routes.glance.about);


app.get('/api/keyvalidate', masheryApi.keyValidate);

app.get('/dealer/sendlead', masheryApi.sendLead);

app.get('/loader-glance.js', function(req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    res.render('loader-glance', {
        baseUrl: req.protocol + '://' + req.headers.host
    });
});
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
