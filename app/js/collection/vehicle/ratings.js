define(function() {

    return Backbone.Collection.extend({

        comparator: function(model) {
            return model.get('title');
        }

    });

});
