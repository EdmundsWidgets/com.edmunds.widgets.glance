define([
    'template/rating-tab/content'
], function(contentTemplate) {
    return Backbone.View.extend({
        template: contentTemplate,
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});