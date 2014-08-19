define([
    'dispatcher',
    'template/tco-tab/content',
    'model/tco-tab/content'
], function(dispatcher, contentTemplate, TcoModel) {
    return Backbone.View.extend({
        events: {
            'click .tco-years a': 'onYearChange'
        },
        template: contentTemplate,
        model: new TcoModel(),
        initialize: function(options) {
            this.options = options;
            this.listenTo(this.model, 'change', this.render);
            this.load(options.styleId)
        },
        render: function() {
            this.$el.html(this.template({
                model: this.model.toJSON()
            }));
            this.$cells = this.$('.table').find('.years');
            this.$select = this.$('.rating-selector');
            return this;
        },
        load: function(style) {
            this.model.fetch({
                url: this.model.url(style, this.options.zipCode, this.options.stateCode),
                data: {
                    api_key: this.options.apiKey,
                    fmt: 'json'
                }
            });
        },
        onYearChange: function (e) {
            e.preventDefault();
            if ($(e.currentTarget).data('id') === 'year-1-3' || $(e.currentTarget).data('id') === 'year-4-total') {
                this.$select.find('.category').text($(e.currentTarget).text());
                this.$select.find('.text-grade').empty();
                this.$cells.addClass('hidden-sm');
                this.$cells.filter('.' + $(e.currentTarget).data('id')).removeClass('hidden-sm');
            } else {
                this.$select.find('.category').text($(e.currentTarget).text());
                this.$select.find('.text-grade').text(this.$('tfoot').find('.' + $(e.currentTarget).data('id')).text());
                this.$cells.addClass('hidden-xs');
                this.$cells.filter('.' + $(e.currentTarget).data('id')).removeClass('hidden-xs');
            }
        }
    });
});