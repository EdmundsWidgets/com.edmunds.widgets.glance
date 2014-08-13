define([
    'backbone',
    'template/base/loading'
], function(Backbone, loadingTemplate) {
    return Backbone.View.extend({
        className: 'spinner',
        template: loadingTemplate,
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});