define(function() {
    return Backbone.Model.extend({
        parse: function(response) {
            response.id = response.title.toLowerCase().replace(/\s+/g, '-');

            return response;
        }
    });
});