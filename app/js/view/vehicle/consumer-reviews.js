define([
    'template/vehicle/consumer-reviews',
    'template/vehicle/consumer-reviews-rating'
], function(consumerReviewsTemplate, consumerReviewsRatingTemplate) {
    return Backbone.View.extend({
        className: 'main-content',
        template: consumerReviewsTemplate,
        ratingTemplate: consumerReviewsRatingTemplate,
        initialize: function() {
        },
        render: function() {
            this.$container = $('.content');
            this.$ratingBar = $('.rating-bar');
            this.$widget = $('.edm-widget');
            this.$widget.removeClass('rating-tab');
            this.$widget.removeClass('edmunds-says');
            this.$widget.addClass('.consumer-reviews');
            this.$ratingBar.html(this.ratingTemplate);
            this.$container.html(this.template);
            return this;
        }
    });
});