requirejs.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        backbone: '../../bower_components/backbone/backbone',
        underscore: '../../bower_components/underscore/underscore',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require([
    'app',
    'bootstrap'
], function (App) {
    var app = new App();
    document.body.appendChild(app.el);
});
