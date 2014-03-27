var StyleIds = Backbone.Collection.extend({

    model: StyleId,

    url: 'https://api.edmunds.com/api/vehicle/v2/acura/ilx/2013?submodel=sedan&fmt=json&api_key=axr2rtmnj63qsth3ume3tv5f',

    parse: function(response) {
        var styles = response.styles;
        for (var i = 0; i < styles.length; i++) {

            var styleList = [];

            styleList[styleList.length - 1] = styles[i].name;

            /*var currentName = styles[i].name;
            var styleList = [];*/

            /*styleList[i] = styles[i].name;*/
        }
    }

});