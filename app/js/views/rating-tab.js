var RatingTab = Backbone.View.extend({
    template: _.template('<div class="rating-bar container-fluid">' +
        'Hello World' +
        '</div>'),
    render: function() {
        this.$el.html(this.template);
        console.log(this.options);
        return this;
    }
});