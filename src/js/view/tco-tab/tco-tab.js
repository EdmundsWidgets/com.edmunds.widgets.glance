define([
    'dispatcher',
    'template/tco-tab/tco-tab',
    'model/tco-tab/tco-tab'
], function(dispatcher, tcoTabTemplate, TcoTabModel) {
    return Backbone.View.extend({
        events: {
            'click .update-zip': 'onZipChange',
            'click .dropdown-menu a': 'onYearChange'
        },
        template: tcoTabTemplate,
        model: new TcoTabModel(),
        initialize: function() {
            this.model.fetch();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$cells = this.$('.table').find('.years');
            this.$select = this.$('.rating-selector');
            return this;
        },
        onZipChange: function(e) {
            e.preventDefault();
            var data = this.$('input').val(),
                isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(data);
            if (isValid) {
                this.model.fetch({
                    url: this.model.url(data)
                });
            } else {
                alert('Please enter valid zip code');
            }
        },
        onYearChange: function(e) {
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