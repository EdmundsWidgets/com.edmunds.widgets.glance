define([
    '../../modules/base/dispatcher',
    'template/vehicle/rating-bar',
    'model/vehicle/grade'
], function(dispatcher, ratingBarTemplate, GradeModel) {
    return Backbone.View.extend({
        className: 'rating-bar container-fluid',
        template: ratingBarTemplate,
        model: new GradeModel(),
        initialize: function(options) {
            this.options = options || {};
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(dispatcher, 'onVehicleChange', this.load);
        },
        render: function() {
            console.log(this.model)
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        load: function(styleId) {
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.options.apiKey
                }
            })
        }
    });
});


//define([
//    'model/vehicle/grade',
//    'collection/vehicle/rating',
//    'view/vehicle/rating-selector'
//], function(GradeModel, RatingCollection, RatingSelectorView) {
//
//    var viewOptions = ['apiKey'];
//
//    return Backbone.View.extend({
//        tagName: 'section',
//        className: 'content',
//        template: _.template('' +
//            '<div class="container-fluid">' +
//            '<div class="row">' +
//            '<div class="rating-details-container"></div>' +
//            '<div class="rating-selectors-container">' +
//            '<div class="rating-selectors"></div>' +
//            '<div class="col-xs-12">' +
//            '<div class="rating-summary">' +
//            '<h4>Rating summary</h4>' +
//            '<p></p>' +
//            '</div>' +
//            '</div>' +
//            '</div>' +
//            '</div>' +
//            '</div>' +
//        ''),
//
////        model: new GradeModel(), note: Delete this later
//
//        initialize: function(options) {
//            _.extend(this, _.pick(options, viewOptions));
//            this.listenTo(this.model, 'change', this.render);
//            this.on('setStyleId', this.load);
//        },
//
//        render: function() {
//            this.$el.html(this.template);
//            this.$('p').text(this.model.get('summary'));
//            this.ratingSelectorView = new RatingSelectorView({
//                el: this.$('.rating-selectors'),
//                collection: this.model.get('ratings')
//            });
//            this.ratingSelectorView.render();
//            return this;
//        },
//
//        load: function(styleId) {
//            this.$el.html('Loading...');
//            this.model.fetch({
//                url: this.model.url(styleId),
//                data: {
//                    api_key: this.apiKey
//                },
//                dataType: 'jsonp'
//            });
//            return this;
//        }
//
//    });
//
//});