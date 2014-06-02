define(function() {
    return _.template('' +
        '<div class="tco-tab"><div class="rating-bar container-fluid"> <div class="row"> <div class="rating-container col-xs-12"> <div class="input-group zip-code pull-left"> <input type="text" class="form-control" placeholder="zip"> </div> <p class="pull-left">Santa Monica, CA</p> <a href="#" class="btn btn-primary pull-left">Update</a> </div> <div class="vehicle-info-container col-xs-12"> <div class="vehicle-info"><p>Vehicle Tested: 2013 Acura ILX Sedan (2.0L 4-cyl. FWD 5-speed Automatic)</p></div> </div> </div> </div> <section class="content container-fluid"> <h4>5 Year Details</h4> <div class="rating-selector hidden-md"> <div class="category">5 Yr Total</div> <div class="arrow-right"></div> <div class="text-grade">$47,802</div> </div> <table class="table"> <thead class="hidden-xs"> <tr> <th>Some</th> <th>Test</th> </tr> </thead> <tfoot> <tr> <td>True Cost to Own &reg;</td> <td>$47,802</td> </tr> </tfoot> <tbody> <tr> <td>Depreciation</td> <td>$13,107</td> </tr> <tr> <td>Taxes & Fees</td> <td>$2,769</td> </tr> <tr> <td>Financing</td> <td>$2,381</td> </tr> <tr> <td>Fuel</td> <td>$11,525</td> </tr> <tr> <td>Insurance</td> <td>$13,030</td> </tr> <tr> <td>Maintenance</td> <td>$3,942</td> </tr> <tr> <td>Repairs</td> <td>$1,048</td> </tr> <tr> <td>Tax Credit</td> <td>$0</td> </tr> </tbody> </table> </section></div>' +
    '');
});