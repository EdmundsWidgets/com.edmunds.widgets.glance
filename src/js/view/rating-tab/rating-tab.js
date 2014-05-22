define([
    'dispatcher',
    'model/rating-tab/rating-bar',
    'view/rating-tab/rating-bar',
    'view/rating-tab/content'
], function(dispatcher, RatingBarModel, RatingBarView, ContentView) {
    return Backbone.View.extend({
        className: 'main-content',
        model: new RatingBarModel(),
        initialize: function(options) {
            this.options = options || {};
            this.listenTo(dispatcher, 'onVehicleChange', this.load);
            this.ratingBarView = new RatingBarView({
                apiKey: options.apiKey,
                model: this.model
            });
            this.contentView = new ContentView({
                collection: this.model.ratings
            });
        },
        render: function() {
            this.$el.append(this.ratingBarView.el);
            this.$el.append(this.contentView.el);
            return this;
        },
        load: function(styleId) {
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.options.apiKey
                }
            });
        }
    });
});