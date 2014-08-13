define([
    'backbone',
    'template/rating-tab/content'
], function(Backbone, contentTemplate) {
    return Backbone.View.extend({
        el: '.content',
        template: contentTemplate,
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template({
                collection: this.collection.toJSON(),
                summary: this.collection.summary
            }));
            return this;
        }
    });
});