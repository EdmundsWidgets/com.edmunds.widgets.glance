define(['template/vehicle/rating-selector'], function(ratingSelector) {

    return Backbone.View.extend({

        template: ratingSelector,

        render: function() {
            this.$el.empty();
            this.collection.each(this.add, this);
            return this;
        },

        add: function(rating) {
            var item = this.template(rating.toJSON());
            this.$el.append(item);
            return this;
        }

    });

});