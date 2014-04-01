define(['collection/vehicle/ratings'], function(RatingsCollection) {
    return Backbone.Model.extend({
        url: function(styleId) {
            return 'https://api.edmunds.com/api/vehicle/v2/grade/' + styleId;
        },
        parse: function(response) {
            response.ratings = new RatingsCollection(response.ratings);
            response.grade = this.convertGrade(response.grade);
            return response;
        },
        convertGrade: function(grade) {
            switch (grade.toLowerCase()) {
                case 'a':
                    return {
                        grade: 'a',
                        textGrade: 'excellent'
                    };
                case 'b':
                    return {
                        grade: 'b',
                        textGrade: 'good'
                    };
                case 'c':
                    return {
                        grade: 'c',
                        textGrade: 'fair'
                    };
                case 'd':
                    return {
                        grade: 'd',
                        textGrade: 'poor :('
                    };
                case 'e':
                    return {
                        grade: 'e',
                        textGrade: 'bad :\'('
                    }
                default:
                    return 'N/A';
            }
        }
    });
});
