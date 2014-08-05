define([
    'template/rating-tab/content',
    'collection/rating-tab/rating'
], function(contentTemplate, ContentCollection) {
    return Backbone.View.extend({
        template: contentTemplate,
        initialize: function() {
//            this.listenTo(this.collection, 'reset', function(models, options){
//                this.options = options || {};
//                this.render(options);
//            });
        },
        render: function(options) {
            this.$el.html(this.template({
                collection: this.collection.toJSON(),
                summary: this.collection.summary
            }));
            return this;
        }
    });
});