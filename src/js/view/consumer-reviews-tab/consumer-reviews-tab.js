define([
    'collection/consumer-reviews-tab/consumer-reviews-tab'
], function(ConsumerReviewsCollection) {
    return Backbone.View.extend({
        el: '.main-content',
        events: {
            'click .rating-selector': 'renderDetails',
            'click .close-button': 'renderContent'
        },
        collection: new ConsumerReviewsCollection(),
        initialize: function() {},
        render: function() {
            return this;
        }
    })
});