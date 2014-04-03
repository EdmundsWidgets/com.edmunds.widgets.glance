define(function() {
    return _.template('' +
        '<div class="rating-details">' +
        '<div class="rating-title col-xs-12">' +
        '<div class="letter-grade small <%= grade.gradeClass %>"><%= grade.grade %></div>' +
        '<div class="category"><%= title %></div>' +
        '<div class="text-grade"><%= grade.textGrade %></div>' +
        '<div class="close-button"></div>' +
        '</div>' +
        '<hr class="col-sm-12"/>' +
        '<p class="description"><%= summary %></p>' +
        '<div class="edmunds-rating-strips">' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>A<span class="strip"></span>Build Quality (vs. $)</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>A<span class="strip"></span>Features (vs. $)</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>A<span class="strip"></span>Cost</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>A<span class="strip"></span>MPG</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>B<span class="strip good"></span>Warranty</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<p>B<span class="strip good"></span>Ownership</p>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12">' +
        '<a href="#" class="btn btn-primary btn-primary-dark">Read full review <span class="hidden-xs">on Edmunds.com</span></a>' +
        '</div>' +
        '</div>' +
    '')
});