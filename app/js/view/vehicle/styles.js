define(['collection/vehicle/styles', 'template/vehicle/styles'], function(StylesCollection, stylesTemplate) {
    var viewOptions = ['apiKey', 'submodel'];
    return Backbone.View.extend({
        collection: new StylesCollection(),
        template: stylesTemplate,
        events: {
            'click': 'onClick'
        },
        initialize: function(options) {
            _.extend(this, _.pick(options, viewOptions));
            this.listenTo(this.collection, 'reset', this.render);
            this.load();
        },
        render: function() {
            this.$el.empty();
            this.collection.each(this.add, this);
            return this;
        },
        add: function(model) {
            var item = this.template(model.toJSON());
            $('ul.dropdown-menu').append(item);
            return this;
        },
        load: function() {
            this.collection.fetch({
                data: {
                    api_key:    this.apiKey,
                    submodel:   this.submodel
                },
                reset: true,
                dataType: 'jsonp'
            });
            return this;
        },
        onClick: function(e) {
            var model = this.collection.get(this.$el.val());
            this.trigger('change', model);
        }
    });
});