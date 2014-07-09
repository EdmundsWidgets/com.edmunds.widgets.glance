define([
    'model/edmunds-says-tab/edmunds-says-tab',
    'template/edmunds-says-tab/edmunds-says-tab',
    'view/base/loading'
], function(EdmundsSaysTabModel, edmundsSaysTabTemplate, LoadingView) {
    return Backbone.View.extend({
        el: '.main-content',
        template: edmundsSaysTabTemplate,
        model: new EdmundsSaysTabModel(),
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
                model: this.model.toJSON(),
                cons: this.model.get('con'),
                pros: this.model.get('pro'),
                introduction: this.model.get('introduction')
            }));
            return this;
        }
    });
});