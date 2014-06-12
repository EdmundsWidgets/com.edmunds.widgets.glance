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
            'click .nav-bottom': 'moveDown',
            'click a[data-id="all"]': 'renderAll',
            'click a[data-id="interior"]': 'renderInterior',
            'click a[data-id="exterior"]': 'renderExterior'
        },
        template: photosTabTemplate,
        model: new PhotosTabModel(),
        initialize: function() {
            this.listenTo(this.model, 'change', this.test);
            this.model.fetch();
        },
        test: function() {
            console.log(123)
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template({
                items: this.model.toJSON().all
            }));
            this.slider = new atGlanceSlider();
            return this;
        },
        renderAll: function(e) {
            e.preventDefault();
            this.$('.photos-navigation').find('li').removeClass('active');
            this.$('.photos-navigation').find('[data-id=all]').parent().addClass('active');
            this.$('.photos-navigation').find('.dropdown-toggle').html('All <span class="caret"></span>').parent().addClass('active');
            this.$el.empty();
            this.$el.html(this.template({
                items: this.model.toJSON().all
            }));
            return this;
        },
        renderInterior: function(e) {
            e.preventDefault();
            this.$('.photos-navigation').find('li').removeClass('active');
            this.$('.photos-navigation').find('[data-id=interior]').parent().addClass('active');
            this.$('.photos-navigation').find('.dropdown-toggle').html('Interior <span class="caret"></span>').parent().addClass('active');
            this.$el.empty();
            this.$el.html(this.template({
                items: this.model.toJSON().interior
            }));
            return this;
        },
        renderExterior: function(e) {
            e.preventDefault();
            this.$('.photos-navigation').find('li').removeClass('active');
            this.$('.photos-navigation').find('[data-id=exterior]').parent().addClass('active');
            this.$('.photos-navigation').find('.dropdown-toggle').html('Exterior <span class="caret"></span>').parent().addClass('active');
            this.$el.empty();
            this.$el.html(this.template({
                items: this.model.toJSON().exterior
            }));
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