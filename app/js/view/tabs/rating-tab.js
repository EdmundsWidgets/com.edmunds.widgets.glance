define([
    'view/vehicle/grade'
], function(GradeView) {
    return Backbone.View.extend({
        className: 'main-content',
        initialize: function(options) {
            this.gradeView = new GradeView({
                apiKey: options.apiKey
            });
        },
        render: function() {
            return this;
        }
    });
});