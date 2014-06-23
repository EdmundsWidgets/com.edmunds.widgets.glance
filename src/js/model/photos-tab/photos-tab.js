define(function() {
    return Backbone.Model.extend({
        url: 'http://api.edmunds.com/api/media/v2/photos/honda/accord/2013/sedan?api_key=axr2rtmnj63qsth3ume3tv5f',
        parse: function(response) {
            var interior = _.where(response, {
                subType: 'interior'
            }),
                exterior = _.where(response, {
                subType: 'exterior'
            }),
                baseUrl = 'http://media.ed.edmunds-media.com';
            response.interior = _.map(interior, function(el) {
                return baseUrl + el.id.replace('dam/photo', '') + '_500.jpg';
            });
            response.exterior = _.map(exterior, function(el) {
                return baseUrl + el.id.replace('dam/photo', '') + '_500.jpg';
            });
            response.all = _.union(response.exterior, response.interior);
            this.preLoader(response.interior);
            this.preLoader(response.exterior);
            this.preLoader(response.all);
            return response;
        },
        preLoader: function(array) {
            var loadedImages = 0;
            function load() {
                $('<img>').load(function() {
                    loadedImages++;
                    if (loadedImages === array.length) {
                        return array;
                    } else {
                        load();
                    }
                }).error(function() {
                    array.splice(loadedImages, 1);
                    if (loadedImages === array.length) {
                        return array;
                    } else {
                        load();
                    }
                }).attr('src', array[loadedImages]);
            }
            load();
        }
    });
});