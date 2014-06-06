define([
    'dispatcher',
    'template/tco-tab/tco-tab',
    'model/tco-tab/tco-tab'
], function(dispatcher, tcoTabTemplate, TcoTabModel) {
    return Backbone.View.extend({
        events: {
            'click .update-zip': 'onZipChange'
        },
        template: tcoTabTemplate,
        model: new TcoTabModel(),
        initialize: function() {
            this.model.fetch();
            this.listenTo(this.model, 'change', this.render);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
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
        }
    });
});