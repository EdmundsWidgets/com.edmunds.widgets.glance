define([
    'template/photos-tab/photos-tab',
    'collection/photos-tab/photos-tab'
], function(photosTabTemplate, PhotosTabCollection) {
    return Backbone.View.extend({
        template: photosTabTemplate,
        collection: new PhotosTabCollection(),
        initialize: function() {},
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});