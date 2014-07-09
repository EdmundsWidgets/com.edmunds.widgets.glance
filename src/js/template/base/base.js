define(function() {
    return _.template('' +
        '<div class="footer-to-the-bottom">' +
        '<header>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<div class="col-sm-6">' +
        '<h1><%= year %> <%= make %> <%= model %> <%= submodel %></h1>' +
        '</div>' +
        '<div class="col-sm-6">' +
        '<div class="list-style-id btn-group">' +
        '<button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">Loading...</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<ul class="nav nav-pills edm-navigation">' +
        '<li class="active"><a data-id="rating-tab" href="#">Ratings</a></li>' +
        '<li><a data-id="edmunds-says-tab" href="#">Edmunds says</a></li>' +
        '<li class="visible-xs btn-group nav-split-button">' +
        '<button type="button" data-action-id="consumer-reviews-tab" class="btn action">Reviews</button>' +
        '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' +
        '<span class="arrow-down"></span>' +
        '<span class="sr-only">Toggle Dropdown</span>' +
        '</button>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<li><a data-id="consumer-reviews-tab" href="#">Consumer reviews</a></li>' +
        '<li><a data-id="tco-tab" href="#">TCO</a></li>' +
        '<li><a data-id="photos-tab" href="#">Photos</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="hidden-xs"><a data-id="consumer-reviews-tab" href="#">Consumer Reviews</a></li>' +
        '<li class="hidden-xs"><a data-id="tco-tab" href="#">TCO</a></li>' +
        '<li class="hidden-xs"><a data-id="photos-tab" href="#">Photos</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<div class="main-content"></div>' +
        '</div>' +
        '<footer class="container-fluid">' +
        '<div class="row">' +
        '<a class="legacy col-xs-5" href="#">Legal Notice</a>' +
        '<div class="logo col-xs-7"><a href="http://www.edmunds.com" class="pull-right"></a>A service of</div>' +
        '</div>' +
        '</footer>' +
    '');
});