define(['model/vehicle/grade', 'template/vehicle/rating-bar'], function(GradeModel, ratingBarTemplate){
    return Backbone.View.extend({
        className: 'rating-bar container-fluid',
        template: ratingBarTemplate,
        model: new GradeModel(),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template)
        }
    });
});