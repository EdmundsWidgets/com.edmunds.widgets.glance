define([
    'atGlanceSlider',
    'template/photos-tab/photos-tab',
    'model/photos-tab/photos-tab',
    'view/base/loading'
], function(atGlanceSlider, photosTabTemplate, PhotosTabModel, LoadingView) {
    return Backbone.View.extend({
        events: {
            'click .nav-left': 'moveLeft',
            'click .nav-right': 'moveRight',
            'click .nav-top': 'moveUp',
            'click .nav-bottom': 'moveDown',
            'click .slider-controls ul li': 'onClickChange',
            'click a[data-id="all"]': 'renderAll',
            'click a[data-id="interior"]': 'renderInterior',
            'click a[data-id="exterior"]': 'renderExterior'
        },
        template: photosTabTemplate,
        model: new PhotosTabModel(),
        initialize: function() {
            this.loadingView = new LoadingView();
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'sync', this.render);
        },
        loading: function() {
            this.$el.html(this.loadingView.render().el);
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
            this.slider.resetSlider();
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
            this.slider.resetSlider();
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
            this.slider.resetSlider();
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
        },
        onClickChange: function(e) {
            this.slider.onClickChange(e);
        }
    });
});