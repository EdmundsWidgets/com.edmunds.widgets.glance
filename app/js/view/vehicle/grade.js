define([
    'model/vehicle/grade',
    'view/vehicle/rating-selector'
], function(GradeModel, RatingSelectorView) {

    var viewOptions = ['apiKey'];

    return Backbone.View.extend({
        tagName: 'section',

        className: 'content container-fluid',

        template: _.template('' +
            '<div class="row">' +
            '<div class="rating-selectors-container"></div>' +
            '<div class="col-xs-12">' +
            '<div class="rating-summary">' +
            '<h4>Rating summary</h4>' +
            '<p></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
        ''),

        model: new GradeModel(),

        initialize: function(options) {
            _.extend(this, _.pick(options, viewOptions));
            this.listenTo(this.model, 'change', this.render);
            this.on('setStyleId', this.load);
        },

        render: function() {
            this.$el.html(this.template);
            this.$('p').text(this.model.get('summary'));
            this.ratingSelectorView = new RatingSelectorView({
                el: this.$('.rating-selectors-container'),
                collection: this.model.get('ratings')
            });
            this.ratingSelectorView.render();
            return this;
        },

        load: function(styleId) {
            this.$el.html('Loading...');
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.apiKey
                },
                dataType: 'jsonp'
            });
            return this;
        }

    });

});