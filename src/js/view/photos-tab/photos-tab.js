define([
    'template/photos-tab/photos-tab',
    'collection/photos-tab/photos-tab'
], function(photosTabTemplate, PhotosTabCollection) {
    return Backbone.View.extend({
        events: {
            'click .nav-left': 'moveLeft',
            'click .nav-right': 'moveRight'
        },
        template: photosTabTemplate,
        collection: new PhotosTabCollection(),
        initialize: function() {},
        render: function() {
            this.$el.html(this.template);
            this.$slides = this.$('.slider-controls').find('li');
            this.$sliderContainer = this.$('.slider-controls').find('ul');
            this.$currentSlide = this.$('.active');
            return this;
        },
        moveLeft: function() {},
        moveRight: function() {}
    });
});