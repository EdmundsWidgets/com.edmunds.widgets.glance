define([
    'collection/vehicle/styles',
    'template/vehicle/styles'
], function(StylesCollection, stylesTemplate) {
    return Backbone.View.extend({
        className: 'btn-group',
        collection: new StylesCollection(),
        template: stylesTemplate,
        listTemplate: _.template('' +
            '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' +
            '<%= name %> <span class="arrow-down"></span>' +
            '</button>' +
            '<ul class="dropdown-menu" role="menu">' +
            '</ul>' +
        ''),
        initialize: function(options) {
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({
                data: {
                    api_key: options.apiKey,
                    submodel: options.submodel
                },
                reset: true
            });
        },
        render: function() {
            var firstItem = this.collection.at(0).toJSON();
            this.$el.html(this.listTemplate(firstItem));
            this.collection.each(this.add, this);
            this.trigger('onVehicleChange', firstItem['id']);
            return this;
        },
        add: function(model) {
            this.$('ul').append(this.template(model.toJSON()));
        },
        onVehicleChange: function() {

        }
    });
});


/*
define(['collection/vehicle/styles', 'template/vehicle/styles'], function(StylesCollection, stylesTemplate) {
    var viewOptions = ['apiKey', 'submodel'];
    return Backbone.View.extend({
        tagName: 'ul',
        attributes: {
            class: 'dropdown-menu',
            role: 'menu'
        },
        collection: new StylesCollection(),
        template: stylesTemplate,

        initialize: function(options) {
            _.extend(this, _.pick(options, viewOptions));
            this.listenTo(this.collection, 'reset', this.render);
            this.load();
        },
        render: function() {
            var firstItem = this.collection.at(0).toJSON();
            this.$el.empty();
            $('.list-style-id button').html(firstItem.name + '<span class="arrow-down"></span>');
            this.trigger('change');
            this.collection.each(this.add, this);
            this.$el.find('li').on('click', $.proxy(this.onClick, this));
            return this;
        },
        add: function(model) {
            var item = this.template(model.toJSON());
            this.$el.append(item);
            return this;
        },
        load: function() {
            this.collection.fetch({
                data: {
                    api_key:    this.apiKey,
                    submodel:   this.submodel
                },
                reset: true
            });
            return this;
        },
        onClick: function(e) {
            e.preventDefault();
            var el = $(e.currentTarget);
            var model = this.collection.get(el.data('id'));
            $('.list-style-id button').html(el.text() + '<span class="arrow-down"></span>');
            this.trigger('change', model);
        }
    });
});*/
