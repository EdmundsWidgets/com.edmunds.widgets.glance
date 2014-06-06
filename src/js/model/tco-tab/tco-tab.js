define(function() {
    return Backbone.Model.extend({
        url: function(zipCode) {
            var zipCode = zipCode || '90404'; //note: Default zipCode
            return 'https://api.edmunds.com/api/tco/v1/details/allnewtcobystyleidzipandstate/200434856/' + zipCode + '/ca?fmt=json&api_key=axr2rtmnj63qsth3ume3tv5f'
        },
        parse: function(response) {
            for (var key in response) {
                if (response.hasOwnProperty(key) && response[key].hasOwnProperty('values')) {
                    response[key].values = this.currencyFormatting(response[key].values);
                }
            }
            response.taxcredit = '$' + response.taxcredit;
            response.tcoTotal = this.currencyFormatting(this.tcoTotal(response));
            return response;
        },
        currencyFormatting: function(listOfValues) {
            var a,
                i;
            if (typeof listOfValues === 'object') {
                for (i = 0; i < listOfValues.length; i++) {
                    listOfValues[i] += '';
                    if (listOfValues[i].length > 3) {
                        a = listOfValues[i].substring(listOfValues[i].length - 3);
                        listOfValues[i] = '$' + listOfValues[i].replace(a, ',' + a);
                    } else {
                        listOfValues[i] = '$' + listOfValues[i];
                    }
                }
            } else if (typeof listOfValues === 'number') {
                listOfValues += '';
                if (listOfValues.length > 3) {
                    console.log(listOfValues.length);
                    a = listOfValues.substring(listOfValues.length - 3);
                    listOfValues = '$' + listOfValues.replace(a, ',' + a);
                } else {
                    listOfValues = '$' + listOfValues;
                }
            }
            return listOfValues;
        },
        tcoTotal: function(data) {
            var sum = 0;
            _.each(data, function(el) {
                    if(el.total) {
                    sum += el.total;
                }
            });
            return sum;
        }
    });
});