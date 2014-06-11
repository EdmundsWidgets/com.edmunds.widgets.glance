define([
    'atGlanceSlider',
    'template/photos-tab/photos-tab',
    'collection/photos-tab/photos-tab'
], function(atGlanceSlider, photosTabTemplate, PhotosTabCollection) {
    return Backbone.View.extend({
        events: {
            'click .nav-left': 'moveLeft',
            'click .nav-right': 'moveRight',
            'click .nav-top': 'moveUp',
            'click .nav-bottom': 'moveDown'
        },
        template: photosTabTemplate,
        model: new PhotosTabCollection(),
        initialize: function() {
//            this.slider = new atGlanceSlider();
            this.model.fetch();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.slider = new atGlanceSlider();
            return this;
        },
        moveLeft: function() {
            this.slider.moveLeft();
        },
        moveRight: function() {
            this.slider.moveRight();
        },
        moveUp: function() {
            this.slider.moveUp();
        },
        moveDown: function() {
            this.slider.moveDown();
        }
    });
});