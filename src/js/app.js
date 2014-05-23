define([
    'template/base/base',
    'view/base/styles',
    'view/rating-tab/rating-tab'
], function(baseTemplate, StylesView, RatingTabView) {
    return Backbone.View.extend({
        className: 'edm-widget',
        template: baseTemplate,
        events: {
            'click a[data-id="rating-tab"]': 'ratingTab',
            'click a[data-id="edmunds-says-tab"]': 'edmundsSaysTab'
        },
        initialize: function(options) {
            this.stylesView = new StylesView({
                apiKey: options.apiKey,
                submodel: options.submodel
            });
            this.ratingTabView = new RatingTabView({
                apiKey: options.apiKey
            });
            this.render();
        },
        render: function() {
            this.$el.html(this.template);
            this.stylesView.setElement(this.$('.list-style-id'));
            this.$('header').after(this.ratingTabView.render().el);
        },
        ratingTab: function(e) {
            e.preventDefault();
            console.log('Rating tab');
        },
        edmundsSaysTab: function(e) {
            console.log('Edmunds says tab');
            e.preventDefault();
        }
    });
});