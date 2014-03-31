define(['collection/vehicle/ratings'], function(RatingsCollection) {
    return Backbone.Model.extend({
        url: function(styleId) {
            return 'https://api.edmunds.com/api/vehicle/v2/grade/' + styleId;
        },
        parse: function(response) {
            response.ratings = new RatingsCollection(response.ratings);
            return response;
        }
    });
});
