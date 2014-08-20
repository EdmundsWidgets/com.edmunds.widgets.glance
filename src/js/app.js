define([
    'jquery',
    'backbone',
    'dispatcher',
    'template/base/base',
    'view/base/styles',
    'view/rating-tab/rating-tab',
    'view/edmunds-says-tab/edmunds-says-tab',
    'view/consumer-reviews-tab/consumer-reviews-tab',
    'view/tco-tab/tco-tab',
    'view/photos-tab/photos-tab'
], function($, Backbone, dispatcher, baseTemplate, StylesView, RatingTabView, EdmundsSaysTabView, ConsumerReviewsTabView, TcoTabView, PhotosTabView) {
    return Backbone.View.extend({
        className: 'edm-widget',
        events: {
            'click a[data-id="rating-tab"]': 'ratingTab',
            'click a[data-id="edmunds-says-tab"]': 'edmundsSaysTab',
            'click a[data-id="consumer-reviews-tab"]': 'consumerReviewsTab',
            'click a[data-id="tco-tab"]': 'tcoTab',
            'click a[data-id="photos-tab"]': 'photosTab',
            'click button.action': 'onClickSplitButton'
        },
        tabsToDisplay: {
            'rating-tab': 'Rating',
            'edmunds-says-tab': 'Edmunds says',
            'consumer-reviews-tab': 'Consumer Reviews',
            'tco-tab': 'TCO',
            'photos-tab': 'Photos'
        },
        initialize: function(options) {
            this.options = options;

            // Initialization Styles View
            this.stylesView = new StylesView({
                apiKey: options.apiKey,
                make: options.make,
                modelName: options.model,
                submodel: options.submodel,
                year: options.year
            });
            // Initialization Rating Tab View
            this.ratingTabView = new RatingTabView({
                apiKey: this.options.apiKey
            });
            // Initialization Edmunds says Tab View
            this.edmundsSaysTabView = new EdmundsSaysTabView({
                apiKey: options.apiKey,
                make: options.make,
                modelName: options.model,
                submodel: options.submodel,
                year: options.year
            });
            // Initialization Consumer Reviews Tab View
            this.consumerReviewsTabView = new ConsumerReviewsTabView({
                apiKey: this.options.apiKey
            });
            // Initialization TCO Tab View
            this.tcoTabView = new TcoTabView({
                apiKey: this.options.apiKey,
                zipCode: options.zipCode
            });
            // Initialization Photos Tab View
            this.photosTabView = new PhotosTabView({
                apiKey: this.options.apiKey,
                make: options.make,
                modelName: options.model,
                year: options.year,
                submodel: options.submodel
            });

            this.listenTo(dispatcher, 'onVehicleChange', this.resetTabs);
            this.listenTo(dispatcher, 'onNoContent', this.showTooltip);

            this.render();
        },
        render: function() {
            this.$el.html(baseTemplate({
                make: this.options.make,
                model: this.options.model,
                submodel: this.options.submodel,
                year: this.options.year,
                tabsList: this.options.tabsList,
                tabsToDisplay: this.tabsToDisplay,
                windowWidth: $(window).width()
            }));

            // Cache elements
            this.$mainContainer = this.$('.main-content');
            this.$navigation = this.$('.edm-navigation');
            this.$navigationTabs = this.$navigation.find('li');
            this.$navigationFirstTab = this.$navigation.find('a[data-id=' + this.options.tabsList[0] + ']');
            this.$dropdownMenu = this.$('.dropdown-menu');
            this.$modalPanel = this.$('.modal');

            // Set elements for subviews
            this.stylesView.setElement(this.$('.list-style-id'));
            this.ratingTabView.setElement(this.$mainContainer);
            this.edmundsSaysTabView.setElement(this.$mainContainer);
            this.consumerReviewsTabView.setElement(this.$mainContainer);
            this.tcoTabView.setElement(this.$mainContainer);
            this.photosTabView.setElement(this.$mainContainer);
            return this;
        },
        ratingTab: function(e) {
            e.preventDefault();
            this.$navigationTabs.removeClass('active');
            $(e.currentTarget).parent().addClass('active');
            this.resetActiveLinks();
            this.ratingTabView.active = true;
            this.ratingTabView.render();
        },
        edmundsSaysTab: function(e) {
            e.preventDefault();
            this.$navigationTabs.removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.resetActiveLinks();
            this.edmundsSaysTabView.active = true;
            this.edmundsSaysTabView.render();
        },
        consumerReviewsTab: function(e) {
            e.preventDefault();
            this.$navigationTabs.removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.resetActiveLinks();
            this.consumerReviewsTabView.active = true;
            if (this.$dropdownMenu.find('[data-id=consumer-reviews-tab]').length > 0) {
                this.$dropdownMenu.find('li').removeClass('hidden').find('[data-id=consumer-reviews-tab]').parent().addClass('hidden');
                this.$navigation.find('.action').removeData('action-id').data('action-id', 'consumer-reviews-tab').text('Reviews').parent().addClass('active');
            }
            this.consumerReviewsTabView.render();
        },
        tcoTab: function(e) {
            e.preventDefault();
            this.$navigationTabs.removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.resetActiveLinks();
            this.tcoTabView.active = true;
            if (this.$dropdownMenu.find('[data-id=tco-tab]').length > 0) {
                this.$dropdownMenu.find('li').removeClass('hidden').find('[data-id=tco-tab]').parent().addClass('hidden');
                this.$navigation.find('.action').removeData('action-id').data('action-id', 'tco-tab').text('TCO').parent().addClass('active');
            }
            this.tcoTabView.render();
        },
        photosTab: function(e) {
            e.preventDefault();
            this.$navigationTabs.removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.resetActiveLinks();
            this.photosTabView.active = true;
            if (this.$dropdownMenu.find('[data-id=photos-tab]').length > 0) {
                this.$dropdownMenu.find('li').removeClass('hidden').find('[data-id=photos-tab]').parent().addClass('hidden');
                this.$navigation.find('.action').removeData('action-id').data('action-id', 'photos-tab').text('Photos').parent().addClass('active');
            }
            this.photosTabView.render();
        },
        onClickSplitButton: function(e) {
            e.preventDefault();
            var target = $(e.currentTarget);
            switch(target.data('action-id')) {
                case 'consumer-reviews-tab':
                    this.consumerReviewsTabView.active = true;
                    this.$navigation.find('li').removeClass('active');
                    target.parent().addClass('active');
                    this.resetActiveLinks();
                    this.consumerReviewsTabView.active = true;
                    this.consumerReviewsTabView.render();
                    break;
                case 'tco-tab':
                    this.$navigation.find('li').removeClass('active');
                    target.parent().addClass('active');
                    this.resetActiveLinks();
                    this.tcoTabView.active = true;
                    this.tcoTabView.render();
                    break;
                case 'photos-tab':
                    this.$navigation.find('li').removeClass('active');
                    target.parent().addClass('active');
                    this.resetActiveLinks();
                    this.photosTabView.active = true;
                    this.photosTabView.render();
                    break;
            }
        },
        resetTabs: function() {
            this.$navigationTabs.removeClass('active');
            this.$navigationFirstTab.click();
        },
        resetActiveLinks: function() {
            this.ratingTabView.active = false;
            this.edmundsSaysTabView.active = false;
            this.consumerReviewsTabView.active = false;
            this.tcoTabView.active = false;
            this.photosTabView.active = false;
        },
        showTooltip: function() {
            this.$modalPanel.modal('show');
        }
    });
});