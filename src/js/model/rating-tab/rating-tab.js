define([
    'collection/rating-tab/rating'
], function (RatingCollection) {
    return Backbone.Model.extend({
        url: function (styleId) {
            return 'https://api.edmunds.com/api/vehicle/v2/grade/' + styleId;
        },
        initialize: function() {
            this.ratingCollection = new RatingCollection();
        },
        parse: function (response) {
            this.ratingCollection.reset(response.ratings, {
                summary: response.summary,
                make: response.make.name.toLowerCase(),
                subModel: response.style.submodel.niceName.toLowerCase(),
                year: response.year.year
            });
            response.grade = this.convertGrade(response.grade);
            return response;
        },
        convertGrade: function (grade) {
            switch (grade.toLowerCase()) {
                case 'a':
                    return {
                        grade: 'a',
                        textGrade: 'Excellent!',
                        gradeClass: 'excellent',
                        activeA: 'active'
                    };
                case 'b':
                    return {
                        grade: 'b',
                        textGrade: 'Good',
                        gradeClass: 'good',
                        activeB: 'active'
                    };
                case 'c':
                    return {
                        grade: 'c',
                        textGrade: 'Fair',
                        gradeClass: 'fair',
                        activeC: 'active'
                    };
                case 'd':
                    return {
                        grade: 'd',
                        textGrade: 'Poor',
                        gradeClass: 'poor',
                        activeD: 'active'
                    };
                case 'e':
                    return {
                        grade: 'e',
                        textGrade: 'Bad',
                        gradeClass: 'bad',
                        activeE: 'active'
                    };
                default:
                    return 'N/A';
            }
        }
    });
});