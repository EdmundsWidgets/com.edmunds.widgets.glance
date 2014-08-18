define([
    'backbone',
    'model/edmunds-says-tab/edmunds-says-tab',
    'template/edmunds-says-tab/edmunds-says-tab',
    'template/base/missing-content',
    'template/base/loading'
], function(Backbone, EdmundsSaysTabModel, edmundsSaysTabTemplate, missingContentTemplate, LoadingTemplate) {
    return Backbone.View.extend({
        active: false,
        ready: false,
        missingContent: false,
        model: new EdmundsSaysTabModel(),
        initialize: function(options) {
            this.options = options;

            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'sync', this.init);
            this.listenTo(this.model, 'error', this.error);

            this.load();
        },
        render: function() {
            if (this.active && this.ready && !this.missingContent) {
                this.$el.html(edmundsSaysTabTemplate({
                    model: this.model.toJSON(),
                    cons: this.model.get('con'),
                    pros: this.model.get('pro'),
                    introduction: this.model.get('introduction'),
                    make: this.options.make,
                    modelName: this.options.modelName,
                    year: this.options.year,
                    submodel: this.options.submodel
                }));

                // Cache elements
                this.$widget = $('.edm-widget');
                this.$header = $('header');
                this.$ratingBar = $('.rating-bar');
                this.$content = $('.content');
                this.$footer = $('footer');

                this.contentHeight = this.$widget.outerHeight() - this.$header.outerHeight() - this.$ratingBar.outerHeight() - this.$footer.outerHeight() - 22;
                this.$content.height(this.contentHeight);

            } else if (this.active && this.ready && this.missingContent) {
                this.$el.html(missingContentTemplate);
            }
            return this;
        },
        loading: function() {
            this.$el.html(LoadingTemplate);
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
        load: function() {
            this.model.fetch({
                data: {
                    model: this.options.modelName,
                    make: this.options.make,
                    year: this.options.year,
                    api_key: this.options.apiKey
                }
            });
        }
    });
});