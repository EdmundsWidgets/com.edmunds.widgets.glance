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
        '<a href="#" class="btn btn-primary pull-left">Update</a>' +
        '</div>' +
        '<div class="vehicle-info-container col-xs-12">' +
        '<div class="vehicle-info">' +
        '<p>Vehicle Tested: 2013 Acura ILX Sedan (2.0L 4-cyl. FWD 5-speed Automatic)</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<section class="content container-fluid">' +
        '<h4>5 Year Details</h4>' +
        '<div class="rating-selector hidden-md">' +
        '<div class="category">5 Yr Total</div>' +
        '<div class="arrow-right"></div>' +
        '<div class="text-grade">$11.440</div>' +
        '</div>' +
        '<table class="table">' +
        '<thead class="hidden-xs">' +
        '<tr>' +
        '<th class="hidden-xs"></th>' +
        '<th class="hidden-xs">Year 1</th>' +
        '<th class="hidden-xs">Year 2</th>' +
        '<th class="hidden-xs">Year 3</th>' +
        '<th class="visible-md">Year 4</th>' +
        '<th class="visible-md">Year 5</th>' +
        '</tr>' +
        '</thead>' +
        '<tfoot>' +
        '<tr>' +
        '<td>True Cost to Own &reg;</td>' +
        '<td>$11.440</td>' +
        '<td class="hidden-xs">$11.440</td>' +
        '<td class="hidden-xs">$11.440</td>' +
        '<td class="visible-md">$11.440</td>' +
        '<td class="visible-md">$11.440</td>' +
        '</tr>' +
        '</tfoot>' +
        '<tbody>' +
        '<tr>' +
        '<td>Depreciation</td>' +
        '<td><%= depreciation.values[0] %></td>' +
        '<td class="hidden-xs"><%= depreciation.values[1] %></td>' +
        '<td class="hidden-xs"><%= depreciation.values[2] %></td>' +
        '<td class="visible-md"><%= depreciation.values[3] %></td>' +
        '<td class="visible-md"><%= depreciation.values[4] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Taxes & Fees</td>' +
        '<td><%= taxandfees.values[0] %></td>' +
        '<td class="hidden-xs"><%= taxandfees.values[1] %></td>' +
        '<td class="hidden-xs"><%= taxandfees.values[2] %></td>' +
        '<td class="visible-md"><%= taxandfees.values[3] %></td>' +
        '<td class="visible-md"><%= taxandfees.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Financing</td>' +
        '<td><%= financing.values[0] %></td>' +
        '<td class="hidden-xs"><%= financing.values[1] %></td>' +
        '<td class="hidden-xs"><%= financing.values[2] %></td>' +
        '<td class="visible-md"><%= financing.values[3] %></td>' +
        '<td class="visible-md"><%= financing.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Fuel</td>' +
        '<td><%= fuel.values[0] %></td>' +
        '<td class="hidden-xs"><%= fuel.values[1] %></td>' +
        '<td class="hidden-xs"><%= fuel.values[2] %></td>' +
        '<td class="visible-md"><%= fuel.values[3] %></td>' +
        '<td class="visible-md"><%= fuel.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Insurance</td>' +
        '<td><%= insurance.values[0] %></td>' +
        '<td class="hidden-xs"><%= insurance.values[1] %></td>' +
        '<td class="hidden-xs"><%= insurance.values[2] %></td>' +
        '<td class="visible-md"><%= insurance.values[3] %></td>' +
        '<td class="visible-md"><%= insurance.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Maintenance</td>' +
        '<td><%= maintenance.values[0] %></td>' +
        '<td class="hidden-xs"><%= maintenance.values[1] %></td>' +
        '<td class="hidden-xs"><%= maintenance.values[2] %></td>' +
        '<td class="visible-md"><%= maintenance.values[3] %></td>' +
        '<td class="visible-md"><%= maintenance.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Repairs</td>' +
        '<td><%= repairs.values[0] %></td>' +
        '<td class="hidden-xs"><%= repairs.values[1] %></td>' +
        '<td class="hidden-xs"><%= repairs.values[2] %></td>' +
        '<td class="visible-md"><%= repairs.values[3] %></td>' +
        '<td class="visible-md"><%= repairs.values[3] %></td>' +
        '</tr>' +
        '<tr>' +
        '<td>Tax Credit</td>' +
        '<td><%= taxcredit %></td>' +
        '<td class="hidden-xs"><%= taxcredit %></td>' +
        '<td class="hidden-xs"><%= taxcredit %></td>' +
        '<td class="visible-md"><%= taxcredit %></td>' +
        '<td class="visible-md"><%= taxcredit %></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</section>' +
        '</div>' +
    '');
});