define([
    'dispatcher',
    'template/rating-tab/rating-bar',
    'model/rating-tab/rating-bar'
], function (dispatcher, ratingBarTemplate, RatingBarModel) {
    return Backbone.View.extend({
        className: 'rating-bar container-fluid',
        template: ratingBarTemplate,
        model: new RatingBarModel(),
        initialize: function (options) {
            this.options = options || {};
            this.listenTo(this.model, 'change', this.render);
//            this.listenTo(dispatcher, 'onVehicleChange', this.load);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        load: function (styleId) {
            this.model.fetch({
                url: this.model.url(styleId),
                data: {
                    api_key: this.options.apiKey
                }
            })
        }
    });
});