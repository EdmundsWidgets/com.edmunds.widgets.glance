define([
    'model/vehicle/grade',
    'view/vehicle/ratings'
], function(GradeModel, RatingsView) {

    var viewOptions = ['apiKey'];

    return Backbone.View.extend({
        tagName: 'section',

        className: 'content container-fluid',

        template: _.template('<div class="row"></div>'),

        itemTemplate: '',

        model: new GradeModel(),

        initialize: function(options) {
            _.extend(this, _.pick(options, viewOptions));
            this.listenTo(this.model, 'change', this.render);
            this.on('setStyleId', this.load);
        },

        render: function() {
            this.$el.html(this.template);
            this.$('.emd-vehicle-grade-summary').text(this.model.get('summary'));
            this.ratingsView = new RatingsView({
                el: this.$('.edm-vehicle-ratings'),
                collection: this.model.get('ratings')
            });
            this.ratingsView.render();
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