define([
    'template/tco-tab/tco-tab'
], function(tcoTabTemplate) {
    return Backbone.View.extend({
        template: tcoTabTemplate,
        initialize: function() {},
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});