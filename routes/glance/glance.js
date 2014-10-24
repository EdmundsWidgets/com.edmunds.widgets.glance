exports.configurator = function(req, res) {
    console.log(req);
    res.render('glance/configure', {
        title: 'Edmunds Widgets - Edmunds At A Glance Widget',
        url: req.protocol + '://' + req.headers.host,
        debug: req.query.debug === 'true',
        portal: req.query.portal === 'true'
    });
};

exports.about = function(req, res) {
    res.render('glance/about', {
        title: 'Edmunds Widgets - About Edmunds At A Glance Widget',
        debug: req.query.debug === 'true',
        portal: req.query.portal === 'true'
    });
};