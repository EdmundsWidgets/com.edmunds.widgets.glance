define([
    'template/base/base',
    'view/base/styles',
    'view/rating-tab/rating-tab',
    'view/edmunds-says-tab/edmunds-says-tab'
], function(baseTemplate, StylesView, RatingTabView, EdmundsSaysTabView) {
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
            this.edmundsSaysTabView = new EdmundsSaysTabView({
                el: this.ratingTabView.el,
                apiKey: options.apiKey
            });
            this.render();
        },
        render: function() {
            this.$el.html(this.template);
            this.stylesView.setElement(this.$('.list-style-id'));
            this.$('header').after(this.ratingTabView.el);
        },
        ratingTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').children('li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.ratingTabView.render();
        },
        edmundsSaysTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').children('li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.edmundsSaysTabView.load();
        }
    });
});