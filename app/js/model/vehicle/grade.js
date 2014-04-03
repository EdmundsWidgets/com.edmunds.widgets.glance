define([
    'collection/vehicle/rating'
], function(RatingCollection) {
    return Backbone.Model.extend({
        url: function(styleId) {
            return 'https://api.edmunds.com/api/vehicle/v2/grade/' + styleId;
        },
        parse: function(response) {
            response.ratings = new RatingCollection(response.ratings, {
                parse: true
            });

            return response;
        }
    });
});