define([
    'atGlanceSlider',
    'template/photos-tab/photos-tab',
    'model/photos-tab/photos-tab'
], function(atGlanceSlider, photosTabTemplate, PhotosTabModel) {
    return Backbone.View.extend({
        events: {
            'click .nav-left': 'moveLeft',
            'click .nav-right': 'moveRight',
            'click .nav-top': 'moveUp',
            'click .nav-bottom': 'moveDown'
        },
        template: photosTabTemplate,
        model: new PhotosTabModel(),
        initialize: function() {
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