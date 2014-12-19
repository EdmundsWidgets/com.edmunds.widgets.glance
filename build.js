({
    appDir: 'src/glance',
    baseUrl: './js',
    dir: 'edmunds-glance/glance',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        jquery: 'libs/jquery-2.1.0',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        bootstrap: './libs/bootstrap'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
})