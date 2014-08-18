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
    var apiKey = 'axr2rtmnj63qsth3ume3tv5f',
        make = 'acura',
        model = 'ilx',
        year = 2013,
        submodel = 'sedan',
        zipCode = 60408,
        tabsList = [
            'rating-tab',
            'edmunds-says-tab',
            'consumer-reviews-tab'
//            'tco-tab',
//            'photos-tab'
        ];
    var app = new App({
        apiKey: apiKey,
        make: make,
        model: model,
        year: year,
        submodel: submodel,
        zipCode: zipCode,
        tabsList: tabsList
    });
    document.body.appendChild(app.el);
});
