define([
    'model/vehicle/edmunds-says',
    'template/vehicle/edmunds-says'
], function(EdmundsSaysModel, edmundsSaysTemplate){
    return Backbone.View.extend({
        model: new EdmundsSaysModel(),
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.model.fetch();
        },
        template: edmundsSaysTemplate,
        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});