define([
    'dispatcher',
    'model/consumer-reviews-tab/consumer-reviews-tab',
    'view/consumer-reviews-tab/reviews-list',
    'view/consumer-reviews-tab/full-review'
], function(dispatcher, ConsumerReviewsModel, ReviewsListView, FullReviewView) {
    return Backbone.View.extend({
        events: {
            'click .consumer-review': 'renderFullReview',
            'click .list-reviews': 'render'
        },
        model: new ConsumerReviewsModel(),
        initialize: function(options) {
            this.options = options || {};
            this.listenTo(this.model, 'change', this.init);
            this.listenTo(dispatcher, 'onVehicleChange', this.load);
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.reviewsListView.render().el);
            return this;
        },
        load: function (styleId) {
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.options.apiKey,
                    pagesize: 50 //note: This number should be over 100 or it should be created pagination for the reviews list
                }
            });
        },
        init: function() {
            this.reviewsListView = new ReviewsListView({
                collection: this.model.get('reviews'),
                averageRating: this.model.get('averageRating'),
                reviewsCount: this.model.get('reviewsCount')
            });
        },
        renderFullReview: function (e) {
            var id = $(e.currentTarget).data('id');
            this.fullReviewView = new FullReviewView({
                model: this.model.get('reviews').get(id)
            });
            this.$('.content').html(this.fullReviewView.render());
        }
    })
});