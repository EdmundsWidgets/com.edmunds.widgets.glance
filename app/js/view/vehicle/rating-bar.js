define([
    'model/vehicle/grade',
    'template/vehicle/rating-bar'
], function(GradeModel, ratingBarTemplate){
    var viewOptions = ['apiKey'];
    return Backbone.View.extend({
        className: 'rating-bar',
        template: ratingBarTemplate,
        model: new GradeModel(),

        initialize: function(options) {
            _.extend(this, _.pick(options, viewOptions));
            this.listenTo(this.model, 'change', this.render);
            this.on('setStyleId', this.load);
        },

        load: function(styleId) {
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.apiKey
                }
            });
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});