define([
    'dispatcher',
    'template/rating-tab/rating-tab',
    'model/rating-tab/rating-tab',
    'view/rating-tab/content',
    'view/rating-tab/details',
    'view/base/loading'
], function(dispatcher, ratingTabTemplate, RatingTabModel, ContentView, DetailsView, LoadingView) {
    return Backbone.View.extend({
        className: 'rating-tab',
        events: {
            'click .rating-selector': 'renderDetails',
            'click .close-button': 'renderContent'
        },
        model: new RatingTabModel(),
        template: ratingTabTemplate,
        initialize: function(options) {
            this.options = options || {};

            this.loadingView = new LoadingView();

            this.contentView = new ContentView({
                collection: this.model.ratingCollection
            });

            this.listenTo(dispatcher, 'onVehicleChange', this.load);
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'sync', this.init);
        },
        loading: function() {
            this.$el.html(this.loadingView.render().el);
        },
        init: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            this.contentView.setElement(this.$('.content')).render();

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
            this.detailsView = new DetailsView({
                model: this.model.get('ratings').get(id),
                make: this.model.get('ratings').make,
                carModel: this.model.get('ratings').model,
                year: this.model.get('ratings').year,
                subModel: this.model.get('ratings').subModel
            });
            this.$('.content').html(this.detailsView.render().el);
        },
        renderContent: function() {
            this.contentView.render();
        }
    });
});