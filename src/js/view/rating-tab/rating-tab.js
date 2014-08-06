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

            this.listenTo(dispatcher, 'onVehicleChange', this.load);
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'sync', this.render);
        },
        loading: function() {
            this.$el.html(this.loadingView.render().el);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            this.contentView = new ContentView({
                collection: this.model.ratingCollection
            });

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
                model: this.model.ratingCollection.get(id),
                make: this.model.ratingCollection.make,
                modelName: this.model.ratingCollection.modelName,
                year: this.model.ratingCollection.year,
                subModel: this.model.ratingCollection.subModel
            });
        },
        renderContent: function() {
            this.contentView.render();
        }
    });
});