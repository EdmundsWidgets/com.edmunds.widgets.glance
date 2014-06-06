define(function() {
    return Backbone.Collection.extend({
        parse: function(response) {
            response = this.convertDates(this.roundAverageRating(response));
            return response;
        },
        convertDates: function(data) {
            _.each(data, function(model) {
                var fullDate = new Date(model.created),
                    year = fullDate.getFullYear(),
                    month = fullDate.getMonth(),
                    date = fullDate.getDate();
                model.created = year + '/' + month + '/' + date;
                model.starRating = Math.round(parseFloat(model.averageRating) * 2) * 10;
            });
            return data;
        },
        roundAverageRating: function(data) {
            _.each(data, function(model) {
                model.starRating = Math.round(parseFloat(model.averageRating) * 2) * 10;
            });
            return data;
        }
    });
});