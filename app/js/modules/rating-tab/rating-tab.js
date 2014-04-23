define([
    'modules/rating-tab/view/rating-bar'
], function(RatingBarView) {
    return Backbone.View.extend({
        className: 'main-content',
        initialize: function(options) {
            this.ratingBarView = new RatingBarView({
                apiKey: options.apiKey
            });
        },
        render: function() {
            this.$el.append(this.ratingBarView.el);
            return this;
        }
    });
});