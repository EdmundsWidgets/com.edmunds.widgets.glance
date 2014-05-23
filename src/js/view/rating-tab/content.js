define([
    'template/rating-tab/content'
], function(contentTemplate) {
    return Backbone.View.extend({
        template: contentTemplate,
        initialize: function() {
//            this.listenTo(this.collection, 'reset', this.render);
//            this.collection.on('reset', this.render);
        },
        render: function() {
            console.log(this.model.toJSON().ratings);
            this.$el.html(this.template({
                collection: this.model.ratings
            }));
            return this;
        }
    });
});