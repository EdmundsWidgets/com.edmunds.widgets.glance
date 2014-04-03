define(function() {
    return Backbone.Model.extend({
        parse: function(response) {
            var id = response.title.toLowerCase().replace(/\s+/g, '-');
            this.set('id', id);
            return response;
        }
    });
});