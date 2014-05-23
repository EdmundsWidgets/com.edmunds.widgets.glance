define([
    'dispatcher',
    'template/rating-tab/rating-bar'
], function (dispatcher, ratingBarTemplate) {
    return Backbone.View.extend({
        className: 'rating-bar container-fluid',
        template: ratingBarTemplate,
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            console.log(123);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});