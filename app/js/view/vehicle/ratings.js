define(['template/vehicle/grade-rating-title'], function(ratingTitleTemplate) {

    return Backbone.View.extend({

        className: 'emd-vehicle-ratings',

        template: ratingTitleTemplate,

        initialize: function() {

        },

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