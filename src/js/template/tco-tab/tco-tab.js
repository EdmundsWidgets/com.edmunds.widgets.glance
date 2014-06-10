define(function() {
    return _.template('' +
        '<div class="tco-tab">' +
        '<div class="rating-bar container-fluid">' +
        '<div class="row">' +
        '<div class="rating-container col-xs-12">' +
        '<div class="input-group zip-code pull-left">' +
        '<input type="text" class="form-control" placeholder="zip">' +
        '</div>' +
        '<p class="pull-left">Santa Monica, CA</p>' +
        '<a href="#" class="btn btn-primary pull-left update-zip">Update</a>' +
        '</div>' +
        '<div class="vehicle-info-container col-xs-12">' +
        '<div class="vehicle-info">' +
        '<p>Based on a 5-year estimate with 15,000  miles driven per year.</p>' +
        '<div class="row">' +
        '<p class="col-sm-6 col-md-6 true-cost-to-own">' +
        'True Cost To Own<span><%= tcoTotal %></span>' +
        '</p>' +
        '</div>' +
        '<div class="row">' +
        '<p class="col-sm-6 col-md-6 6 true-cash-price">' +
        'Total Cash Price <a href="#" class="true-cash-price-icon"></a><span><%= tcoTotal %></span>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<section class="content container-fluid">' +
        '<h4>5 Year Details</h4>' +
        '<div class="btn-group">' +
        '<button class="rating-selector visible-xs visible-sm btn dropdown-toggle" data-toggle="dropdown">' +
        '<div class="category">5 Yr Total</div>' +
        '<div class="arrow-down"></div>' +
        '<div class="text-grade"><%= tcoTotal %></div>' +
        '</button>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<li><a href="#">Year 1</a></li>' +
        '<li><a href="#">Year 2</a></li>' +
        '<li><a href="#">Year 3</a></li>' +
        '<li><a href="#">Year 4</a></li>' +
        '<li><a href="#">Year 5</a></li>' +
        '<li><a href="#">5 Yr Total</a></li>' +
        '</ul>' +
        '</div>' +
        '<table class="table">' +
        '<thead class="hidden-xs">' +
        '<tr>' +
        '<th class="hidden-xs"></th>' +
        '<th class="hidden-xs">Year 1</th>' +
        '<th class="hidden-xs">Year 2</th>' +
        '<th class="hidden-xs">Year 3</th>' +
        '<th class="hidden-xs hidden-sm">Year 4</th>' +
        '<th class="hidden-xs hidden-sm">Year 5</th>' +
        '<th class="hidden-xs hidden-sm">5 Yr Total</th>' +
        '</tr>' +
        '</thead>' +
        '<tfoot>' +
        '<tr>' +
        '<td>True Cost to Own &reg;</td>' +
        '<td class="year-1 hidden-xs"><%= totalOneYear %></td>' +
        '<td class="year-2 hidden-xs"><%= totalTwoYears %></td>' +
        '<td class="year-3 hidden-xs"><%= totalThreeYears %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= totalFourYears %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= totalFiveYears %></td>' +
        '<td class="year-total hidden-sm"><%= tcoTotal %></td>' +
        '</tr>' +
        '</tfoot>' +
        '<tbody>' +
        '<tr>' +
        '<td>Depreciation</td>' +
        '<td class="year-1 hidden-xs"><%= depreciation.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= depreciation.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= depreciation.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= depreciation.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= depreciation.values[4] %></td>' +
        '<td class="year-total hidden-sm"><%= depreciation.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Taxes & Fees</td>' +
        '<td class="year-1 hidden-xs"><%= taxandfees.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= taxandfees.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= taxandfees.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= taxandfees.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= taxandfees.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= taxandfees.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Financing</td>' +
        '<td class="year-1 hidden-xs"><%= financing.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= financing.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= financing.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= financing.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= financing.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= financing.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Fuel</td>' +
        '<td class="year-1 hidden-xs"><%= fuel.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= fuel.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= fuel.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= fuel.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= fuel.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= fuel.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Insurance</td>' +
        '<td class="year-1 hidden-xs"><%= insurance.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= insurance.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= insurance.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= insurance.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= insurance.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= insurance.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Maintenance</td>' +
        '<td class="year-1 hidden-xs"><%= maintenance.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= maintenance.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= maintenance.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= maintenance.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= maintenance.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= maintenance.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Repairs</td>' +
        '<td class="year-1 hidden-xs"><%= repairs.values[0] %></td>' +
        '<td class="year-2 hidden-xs"><%= repairs.values[1] %></td>' +
        '<td class="year-3 hidden-xs"><%= repairs.values[2] %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= repairs.values[3] %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= repairs.values[3] %></td>' +
        '<td class="year-total hidden-sm"><%= repairs.total %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Tax Credit</td>' +
        '<td class="year-1 hidden-xs"><%= taxcredit %></td>' +
        '<td class="year-2 hidden-xs"><%= taxcredit %></td>' +
        '<td class="year-3 hidden-xs"><%= taxcredit %></td>' +
        '<td class="year-4 hidden-xs hidden-sm"><%= taxcredit %></td>' +
        '<td class="year-5 hidden-xs hidden-sm"><%= taxcredit %></td>' +
        '<td class="year-total hidden-sm"><%= taxcredit %></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</section>' +
        '</div>' +
    '');
});