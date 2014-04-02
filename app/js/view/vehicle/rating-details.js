define([
    'template/vehicle/rating-details',
    'view/vehicle/rating-selector'
], function(ratingDetailsTemplate, RatingSelectorView) {

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