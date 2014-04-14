define([
    'template/rating-tab'
], function(ratingTabTemplate) {
    return Backbone.View.extend({
        template: ratingTabTemplate,
        initialize: function(){
            this.render();
        },
        render: function() {
            this.$el.html(this.template);
        }
    });
});