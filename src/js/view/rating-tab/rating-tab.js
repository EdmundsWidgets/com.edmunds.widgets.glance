define([
    'dispatcher',
    'model/rating-tab/rating-bar',
    'view/rating-tab/rating-bar',
    'view/rating-tab/content'
], function(dispatcher, RatingBarModel, RatingBarView, ContentView) {
    return Backbone.View.extend({
        className: 'main-content',
        events: {
            'click .rating-selector': 'renderDetails'
        },
        model: new RatingBarModel(),
        initialize: function(options) {
            this.options = options || {};
            this.listenTo(dispatcher, 'onVehicleChange', this.load);
            this.listenTo(this.model, 'change', this.init);
        },
        init: function() {
            //note: Is it a good practice to create new instance every time when model is changed?
            this.contentView = new ContentView({
                collection: this.model.get('ratings')
            });
            this.ratingBarView = new RatingBarView({
                model: this.model
            });
            this.render();
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
        },
        renderDetails: function(e) {
            var id = $(e.currentTarget).data('id');

        }
    });
});