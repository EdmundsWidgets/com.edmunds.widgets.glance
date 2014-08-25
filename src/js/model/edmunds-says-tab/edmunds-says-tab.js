define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        url: 'https://api.edmunds.com/v1/content/editorreviews',
        parse: function (response) {
            response = response.editorial;
            response.con = response.con.replace('<p>', '').replace('</p>', '').split('; ');
            response.pro = response.pro.replace('<p>', '').replace('</p>', '').split('; ');
            if (response.introduction) {
                response.introduction = response.introduction.replace(/\s<p>.*/g, '');
            } else {
                response.introduction = response.review;
            }
            response.introduction = response.introduction.replace(/\s<p>.*/g, '');
            return response;
        }
    });
});