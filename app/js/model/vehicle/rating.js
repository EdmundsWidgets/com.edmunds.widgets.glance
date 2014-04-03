define([
    'collection/vehicle/sub-rating'
], function(SubratingCollection) {
    return Backbone.Model.extend({
        parse: function(response) {
            response.id = response.title.toLowerCase().replace(/\s+/g, '-');

            response.subRatings = new SubratingCollection(response.subRatings, {
                parse: true
            });

            return response;
        }
    });
});