define(function() {
    return _.template('' +
        '<div class="footer-to-the-bottom">' +
        '<header>' +
        '<div class="container-fluid">' +
        '<h1 class="pull-left">2013 Acura ILX sedan</h1>' +
        '<div class="btn-group list-style-id pull-left">' +
        '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><%- collection[0].name %><span class="arrow-down"></span></button>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<% _.each(collection, function(el) { %> <li data-id="<%= el.id %>"><a href="#"><%= el.name %></a></li> <% }); %>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<ul class="nav nav-pills edm-navigation">' +
        '<li class="active"><a data-id="rating-tab" href="#">Ratings</a></li>' +
        '<li><a data-id="edmunds-says-tab" href="#">Edmunds says</a></li>' +
        '<li class="dropdown visible-xs">' +
        '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Reviews<span class="arrow-down"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="#">TCO</a></li>' +
        '<li><a href="#">Photos</a></li>' +
        '<li><a href="#">Videos</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="hidden-xs"><a href="#">Consumer Reviews</a></li>' +
        '<li class="hidden-xs"><a href="#">Photos</a></li>' +
        '<li class="hidden-xs"><a href="#">Videos</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<div class="main-content"></div>' +
        '</div>' +
        '<footer class="container-fluid">' +
        '<div class="row">' +
        '<a class="legacy col-xs-5" href="#">Legal Notice</a>' +
        '<div class="logo col-xs-7"><a href="http://www.edmunds.com" class="pull-right"></a>Build by</div>' +
        '</div>' +
        '</footer>' +
    '');
});