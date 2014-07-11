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
            this.options = options || {};
//            this.listenTo(dispatcher, 'onVehicleChange', this.resetTabs);
            this.render();
        },
        render: function() {
            this.$el.html(this.template({
                make: this.options.make,
                model: this.options.model,
                submodel: this.options.submodel,
                year: this.options.year
            }));

            //Initialization Styles View
            this.stylesViewInitialization();

//            this.ratingTabView = new RatingTabView({
//                apiKey: this.options.apiKey
//            });
//            this.edmundsSaysTabView = new EdmundsSaysTabView({
//                el: this.ratingTabView.el,
//                apiKey: this.options.apiKey
//            });
//            this.consumerReviewsTabView = new ConsumerReviewsTabView({
//                el: this.ratingTabView.el,
//                apiKey: this.options.apiKey
//            });
//            this.tcoTabView = new TcoTabView({
//                el: this.ratingTabView.el,
//                apiKey: this.options.apiKey
//            });
//            this.photosTabView = new PhotosTabView({
//                el: this.ratingTabView.el,
//                apiKey: this.options.apiKey
//            });
//            this.$('header').after(this.ratingTabView.el);
            return this;
        },

        stylesViewInitialization: function() {
            this.stylesView = new StylesView({
                el: this.$('.list-style-id'),
                apiKey: this.options.apiKey,
                make: this.options.make,
                modelName: this.options.model,
                submodel: this.options.submodel,
                year: this.options.year
            });
        }


//        ratingTab: function(e) {
//            e.preventDefault();
//            this.$('.edm-navigation').find('li').removeClass('active');
//            $(e.currentTarget).parent('li').addClass('active');
//            this.ratingTabView.render();
//        },
//        edmundsSaysTab: function(e) {
//            e.preventDefault();
//            this.$('.edm-navigation').find('li').removeClass('active');
//            $(e.currentTarget).parent('li').addClass('active');
//            this.edmundsSaysTabView.model.fetch();
//        },
//        consumerReviewsTab: function(e) {
//            e.preventDefault();
//            this.$('.edm-navigation').find('li').removeClass('active');
//            this.$('.edm-navigation').find('[data-id=consumer-reviews-tab]').parent().addClass('active');
//            this.$('.edm-navigation').find('.dropdown-toggle').html('Reviews<span class="arrow-down"></span>').parent().addClass('active');
//            this.consumerReviewsTabView.render();
//        },
//        tcoTab: function(e) {
//            e.preventDefault();
//            this.$('.edm-navigation').find('li').removeClass('active');
//            this.$('.edm-navigation').find('[data-id=tco-tab]').parent().addClass('active');
//            this.$('.edm-navigation').find('.dropdown-toggle').html('TCO<span class="arrow-down"></span>').parent().addClass('active');
//            this.tcoTabView.model.fetch();
//        },
//        photosTab: function(e) {
//            e.preventDefault();
//            this.$('.edm-navigation').find('li').removeClass('active');
//            this.$('.edm-navigation').find('[data-id=photos-tab]').parent().addClass('active');
//            this.$('.edm-navigation').find('.dropdown-toggle').html('Photos<span class="arrow-down"></span>').parent().addClass('active');
//            this.photosTabView.model.fetch();
//        },
//        resetTabs: function() {
//            this.$('.edm-navigation').find('li').removeClass('active');
//            this.$('.edm-navigation').find('[data-id=rating-tab]').parent().addClass('active');
//        }
    });
});