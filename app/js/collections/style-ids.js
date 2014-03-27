var Styles = Backbone.Collection.extend({

    url: 'https://api.edmunds.com/api/vehicle/v2/acura/ilx/2013?submodel=sedan&fmt=json&api_key=axr2rtmnj63qsth3ume3tv5f',

    initialize: function() {
        this.fetch();
    }

});

var styles = new Styles;