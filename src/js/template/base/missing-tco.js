define([
    'underscore'
], function(_) {
    return _.template('' +
        '<div class="missing-tco">' +
            '<h3>Ownership Costs</h3>' +
            '<h4>Edmunds True Cost to Own&reg;</h4>' +
            '<p>There is not enough TCO data available at this time to calculate the Edmunds True Cost to Own&reg;. Please check back soon or <a href="http://www.edmunds.com/<%= make %>/<%= modelName %>/<%= year %>/tco.html?style=<%= styleId %>" target="_blank">see more TCO&reg; info.</a></p>' +
        '</div>' +
    '');
});