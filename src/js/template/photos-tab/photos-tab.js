define(function() {
    return _.template('' +
        '<div class="photos-tab">' +
        '<div class="rating-bar container-fluid">' +
        '<div class="row">' +
        '<div class="rating-container col-xs-12">' +
        '<div class="btn-group visible-xs clearfix">' +
        '<button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown"> All <span class="caret"></span> </button>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<li><a href="#">Interior</a></li>' +
        '<li><a href="#">Exterior</a></li>' +
        '<li><a href="#">Color Options</a></li>' +
        '</ul>' +
        '</div>' +
        '<ul class="nav nav-pills hidden-xs">' +
        '<li><a href="#">All</a></li>' +
        '<li><a href="#">Interior</a></li>' +
        '<li><a href="#">Exterior</a></li>' +
        '<li><a href="#">Color Options</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="content photos-tab">' +
        '<div class="list-photos visible-xs">' +
        '<ul>' +
        '<li><img src="img/slider_1.png" alt="slider"/></li>' +
        '<li><img src="img/slider_2.png" alt="slider"/></li>' +
        '<li><img src="img/slider_3.png" alt="slider"/></li>' +
        '<li><img src="img/slider_4.png" alt="slider"/></li>' +
        '</ul>' +
        '</div>' +
        '<div class="slider-wrapper hidden-xs">' +
        '<div class="slider-viewport">' +
        '<img src="img/slider_main.png" alt="slider"/>' +
        '</div>' +
        '<div class="slider-controls">' +
        '<ul>' +
        '<li><a href="#"><img src="img/slider_1.png" alt="slider"/></a></li>' +
        '<li><a href="#"><img src="img/slider_2.png" alt="slider"/></a></li>' +
        '<li><a href="#"><img src="img/slider_3.png" alt="slider"/></a></li>' +
        '</ul>' +
        '<div class="nav-left visible-sm"></div>' +
        '<div class="nav-right visible-sm"></div>' +
        '<div class="nav-top visible-md"></div>' +
        '<div class="nav-bottom visible-md"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
    '');
});