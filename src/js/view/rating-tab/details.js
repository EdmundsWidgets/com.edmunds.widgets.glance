define([
    'backbone',
    'template/rating-tab/details'
], function(Backbone, detailsTemplate) {
    return Backbone.View.extend({
        el: '.content',
        template: detailsTemplate,
        initialize: function(options) {
            this.options = options || {};
            this.render();
        },
        render: function() {
            this.$el.html(this.template({
                rating: this.model.toJSON(),
                subrating: this.model.get('subRatings').toJSON(),
                make: this.options.make,
                modelName: this.options.modelName,
                year: this.options.year,
                subModel: this.options.subModel
            }));
            return this;
        }
    });
});