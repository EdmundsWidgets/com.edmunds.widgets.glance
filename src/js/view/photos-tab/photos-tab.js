define([
    'template/photos-tab/photos-tab'
], function(photosTabTemplate) {
    return Backbone.View.extend({
        template: photosTabTemplate,
        initialize: function() {},
        render: function() {
            this.$el.html(this.template);
        }
    });
});