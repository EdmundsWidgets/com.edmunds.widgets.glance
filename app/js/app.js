define([
    'template/base',
    'view/tabs/rating-tab',
    'view/tabs/edmunds-says-tab',
    'collection/vehicle/styles'
], function(baseTemplate, RatingTabView, EdmundsSaysTabView, StylesCollection) {
    return Backbone.View.extend({
        className: 'edm-widget',
        template: baseTemplate,
        events: {
            'click a[data-id="rating-tab"]': 'ratingTab',
            'click a[data-id="edmunds-says-tab"]': 'edmundsSaysTab'
        },
        collection: new StylesCollection(),
        initialize: function(options) {
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({
                data: {
                    api_key:    options.apiKey,
                    submodel:   options.submodel
                },
                reset: true
            });
        },
        render: function() {
            this.$el.html(this.template({
                collection: this.collection.toJSON()
            }));
            this.ratingTabView = new RatingTabView({
                el: this.$('.main-content')
            });
        },
        ratingTab: function(e) {
            e.preventDefault();

        },
        edmundsSaysTab: function(e) {
            e.preventDefault();
        }
    });
});

/*
define([
    'view/vehicle/styles',
    'view/vehicle/grade',
    'view/vehicle/rating-bar',
    'view/vehicle/edmunds-says',
    'template/vehicle/header',
    'template/vehicle/footer'
], function(StylesView, GradeView, RatingBarView, EdmundsSaysView, headerTemplate, footerTemplate) {

    return Backbone.View.extend({

        className: 'edm-widget rating-tab',

        events: {
            'click .edm-navigation a[data-id="edmunds-says"]': 'edmundsSays'
        },

        initialize: function(options) {
            this.initializeStylesView(options);
//            this.initializeGradeView(options);
            this.initializeRatingBarView(options);
        },

        initializeStylesView: function(options) {
            this.stylesView = new StylesView({
                apiKey: options.apiKey,
                submodel: options.submodel
            });
            this.listenTo(this.stylesView, 'change', this.onVehicleStyleChange);
        },

        */
/*initializeGradeView: function(options) { note: Delete this later
            this.gradeView = new GradeView({
                apiKey: options.apiKey
            });
        },*//*


        initializeRatingBarView: function(options) {
            this.ratingBarView = new RatingBarView({
                apiKey: options.apiKey
            });
        },

        render: function() {
            this.$el.append(headerTemplate);
            this.$el.append(this.ratingBarView.el);
            this.$('.list-style-id').append(this.stylesView.el);
            this.$el.append(footerTemplate);
//            this.$el.append(this.gradeView.el);
            return this;
        },

        onVehicleStyleChange: function(*/
/*style*//*
) {
            var styleId = 200434856; // style.get('id');
//            this.gradeView.trigger('setStyleId', styleId);
            this.ratingBarView.trigger('setStyleId', styleId);
        },

        edmundsSays: function(e) {
            e.preventDefault();
            this.$('.edm-navigation li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            this.edmundsSaysView = new EdmundsSaysView({
                el: '.content'
            });
        }

    });

});*/
