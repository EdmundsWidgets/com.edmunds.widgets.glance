define([
    '../../template/tabs/rating-tab',
    'view/vehicle/grade'
], function(ratingTabTemplate, GradeView) {
    return Backbone.View.extend({
        template: ratingTabTemplate,
        initialize: function(options){
            this.gradeView = new GradeView({
                styleId: options.styleId
            });
        },
        render: function() {
            this.$el.html(this.template);
            this.gradeView.setElement('.rating-bar');
            return this;
        }
    });
});