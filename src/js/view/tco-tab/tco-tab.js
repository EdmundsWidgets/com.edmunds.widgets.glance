define([
    'template/tco-tab/tco-tab',
    'model/tco-tab/tco-tab'
], function(tcoTabTemplate, TcoTabModel) {
    return Backbone.View.extend({
        template: tcoTabTemplate,
        model: new TcoTabModel(),
        initialize: function() {
            this.model.fetch();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});