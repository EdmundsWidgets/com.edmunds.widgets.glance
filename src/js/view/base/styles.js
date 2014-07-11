define([
    'dispatcher',
    'collection/base/styles',
    'template/base/styles'
], function(dispatcher, StylesCollection, stylesTemplate) {
    return Backbone.View.extend({
        collection: new StylesCollection(),
        template: stylesTemplate,
        events: {
            'click a': 'getStyleId'
        },
        initialize: function(options) {
            this.options = options || {};
            this.listenTo(this.collection, 'reset', this.render);
            this.load(options.make, options.modelName, options.year);
        },
        render: function() {
            var firstItem = this.collection.at(0).toJSON();
            this.$el.html(this.template({
                collection: this.collection.toJSON(),
                currentItem: firstItem
            }));
            dispatcher.trigger('onVehicleChange', firstItem.id);
            return this;
        },
        load: function(make, model, year) {
            this.collection.fetch({
                url: this.collection.url(make, model, year),
                dataType: 'json',
                data: {
                    api_key: this.options.apiKey,
                    submodel: this.options.submodel
                },
                reset: true
            });
        },
        getStyleId: function(e) {
            e.preventDefault();
            var target = $(e.currentTarget),
                styleId = target.data('id');
            this.$('.btn').html(target.text() + '<span class="arrow-down"></span>');
            dispatcher.trigger('onVehicleChange', styleId);
        }
    });
});