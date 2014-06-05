define([
    'dispatcher',
    'template/base/base',
    'view/base/styles',
    'view/rating-tab/rating-tab',
    'view/edmunds-says-tab/edmunds-says-tab',
    'view/consumer-reviews-tab/consumer-reviews-tab',
    'view/tco-tab/tco-tab',
    'view/photos-tab/photos-tab'
], function(dispatcher, baseTemplate, StylesView, RatingTabView, EdmundsSaysTabView, ConsumerReviewsTabView, TcoTabView, PhotosTabView) {
    return Backbone.View.extend({
        className: 'edm-widget',
        template: baseTemplate,
        events: {
            'click a[data-id="rating-tab"]': 'ratingTab',
            'click a[data-id="edmunds-says-tab"]': 'edmundsSaysTab',
            'click a[data-id="consumer-reviews-tab"]': 'consumerReviewsTab',
            'click a[data-id="tco-tab"]': 'tcoTab',
            'click a[data-id="photos-tab"]': 'photosTab'
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
            this.consumerReviewsTabView = new ConsumerReviewsTabView({
                el: this.ratingTabView.el,
                apiKey: options.apiKey
            });
            this.tcoTabView = new TcoTabView({
                el: this.ratingTabView.el,
                apiKey: options.apiKey
            });
            this.photosTabView = new PhotosTabView({
                el: this.ratingTabView.el,
                apiKey: options.apiKey
            });
            this.edmundsSaysTabView.load();
            this.listenTo(dispatcher, 'onVehicleChange', this.resetTabs);
            this.render();
        },
        render: function() {
            this.$el.html(this.template);
            this.stylesView.setElement(this.$('.list-style-id'));
            this.$('header').after(this.ratingTabView.el);
            return this;
        },
        ratingTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').find('li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.ratingTabView.render();
        },
        edmundsSaysTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').find('li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.edmundsSaysTabView.render();
        },
        consumerReviewsTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').find('li').removeClass('active');
            this.$('.edm-navigation').find('[data-id=consumer-reviews-tab]').parent().addClass('active');
            this.$('.edm-navigation').find('.dropdown-toggle').html('Reviews<span class="arrow-down"></span>').parent().addClass('active');
            this.consumerReviewsTabView.render();
        },
        tcoTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').find('li').removeClass('active');
            this.$('.edm-navigation').find('[data-id=tco-tab]').parent().addClass('active');
            this.$('.edm-navigation').find('.dropdown-toggle').html('TCO<span class="arrow-down"></span>').parent().addClass('active');
            this.tcoTabView.render();
        },
        photosTab: function(e) {
            e.preventDefault();
            this.$('.edm-navigation').find('li').removeClass('active');
            this.$('.edm-navigation').find('[data-id=photos-tab]').parent().addClass('active');
            this.$('.edm-navigation').find('.dropdown-toggle').html('Photos<span class="arrow-down"></span>').parent().addClass('active');
            this.photosTabView.render();
        },
        resetTabs: function() {
            this.$('.edm-navigation').find('li').removeClass('active');
            this.$('.edm-navigation').find('[data-id=rating-tab]').parent().addClass('active');
        }
    });
});