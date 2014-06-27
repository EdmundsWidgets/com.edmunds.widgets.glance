define([
    'template/base/loading'
], function(loadingTemaplte) {
    return Backbone.View.extend({
        className: 'spinner',
        template: loadingTemaplte,
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});