define([
    'jquery',
    'backbone',
    'dispatcher',
    'template/rating-tab/rating-tab',
    'model/rating-tab/rating-tab',
    'view/rating-tab/content',
    'view/rating-tab/details',
    'template/base/missing-content',
    'template/base/loading'
], function($, Backbone, dispatcher, ratingTabTemplate, RatingTabModel, ContentView, DetailsView, missingContentTemplate, loadingTemplate) {
    return Backbone.View.extend({
        className: 'rating-tab',
        active: false,
        ready: false,
        missingContent: false,
        events: {
            'click .rating-selector': 'renderDetails',
            'click .close-button': 'renderContent'
        },
        model: new RatingTabModel(),
        initialize: function(options) {
            this.options = options;

            this.listenTo(dispatcher, 'onVehicleChange', this.load);
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'sync', this.init);
            this.listenTo(this.model, 'error', this.error);
        },
        render: function() {
            // Cache elements
            this.$currentTab = $('a[data-id="rating-tab"]').parent();
            this.$nextTab = this.$currentTab.next().children();

            if (this.active && this.ready && !this.missingContent) {
                this.$currentTab.removeClass('disabled');
                this.$el.html(ratingTabTemplate(this.model.toJSON()));

                this.contentView = new ContentView({
                    collection: this.model.ratingCollection
                });
            } else if (this.active && this.ready && this.missingContent && this.$nextTab.length > 0) {
                this.$currentTab.addClass('disabled');
                this.$nextTab.click();
            } else if (this.active && this.ready && this.missingContent && this.$nextTab.length === 0) {
                this.$currentTab.removeClass().addClass('disabled');
                this.$el.html(missingContentTemplate);
            }
            return this;
        },
        loading: function() {
            this.ready = false;
            this.missingContent = false;
            this.$el.html(loadingTemplate);
        },
        init: function() {
            this.ready = true;
            this.missingContent = false;
            this.render();
        },
        error: function() {
            this.ready = true;
            this.missingContent = true;
            this.render();
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