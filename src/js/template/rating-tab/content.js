define(function() {
    return _.template('' +
        '<section class="content container-fluid">' +
        '<div class="row">' +
        '<% _.each(collection, function(el) { %><div class="col-xs-12 col-sm-6 col-md-4"><div class="rating-selector"><div class="letter-grade small excellent"><%= el.id %></div><div class="category"><%= el.id %></div><div class="arrow-right"></div><div class="text-grade">Excellent</div></div></div><% }) %>' +
        '<div class="col-xs-12">' +
        '<div class="rating-summary">' +
        '<h4>Rating summary</h4>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum eius ex inventore non sit velit. Accusamus amet ea excepturi explicabo id minus, nobis numquam odio qui, quibusdam soluta suscipit!</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
    '');
});