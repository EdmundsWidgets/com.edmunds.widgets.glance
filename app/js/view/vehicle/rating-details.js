define([
    'template/vehicle/rating-details'
], function(ratingDetailsTemplate) {

    return Backbone.View.extend({
        template: ratingDetailsTemplate,
        events: {
            'click .close-button': 'close'
        },
        render: function() {
            this.$el.html(this.template(this.model));
        },
        close: function() {
            this.trigger('close');
        }
    });
});