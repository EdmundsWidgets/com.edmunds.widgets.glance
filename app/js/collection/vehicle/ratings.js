define([
    'model/vehicle/rating'
], function(RatingModel) {

    return Backbone.Collection.extend({

//        model: new RatingModel(),

        comparator: function(model) {
            return model.get('title');
        }

    });

});
