var WidgetView = Backbone.View.extend({
    el: '.edm-widget',

    template: _.template('' +
        '<header>' +
        '<div class="container-fluid">' +
        '<h1 class="pull-left">2013 Acura ILX sedan</h1>' +
        '<div class="btn-group list-style-id pull-left">' +
        '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' +
        '2.0L 4-cyl. FWD 5-speed Automatic <span class="arrow-down"></span>' +
        '</button>' +
        '<ul class="dropdown-menu list" role="menu">' +
        '<% _.each(this.styleIds, function(id) { %> <li><%= id %></li> <% }); %>' +
        '<li><a href="#">2.0L 4-cyl. FWD 5-speed Automatic</a></li>' +
        '<li><a href="#">2.0L 4-cyl. FWD 5-speed Automatic</a></li>' +
        '<li><a href="#">2.0L 4-cyl. FWD 5-speed Automatic</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<ul class="nav nav-pills edm-navigation">' +
        '<li class="active"><a href="#">Ratings</a></li>' +
        '<li><a href="#">Edmunds says</a></li>' +
        '<li class="dropdown visible-xs">' +
        '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Reviews<span class="arrow-down"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="#">TCO</a></li>' +
        '<li><a href="#">Photos</a></li>' +
        '<li><a href="#">Videos</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="hidden-xs"><a href="#">Consumer Reviews</a></li>' +
        '<li class="hidden-xs"><a href="#">Photos</a></li>' +
        '<li class="hidden-xs"><a href="#">Videos</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</header>' +
    ''),

    initialize: function() {



        this.styleIds = new StyleIds();

        this.listenTo(this.styleIds, 'all', this.render);

        this.styleIds.fetch();

        /*this.list = $('.list');

        this.listenTo(this.model, 'reset', function(){
            console.log(123)
        })

        this.listenTo(styles, 'all', this.render);*/

    },


    render: function() {

        var tpl = this.template;

        this.$el.html(tpl(this.styleIds.toJSON()));

        return this;
    }
});

$(function(){
    var widget = new WidgetView();
});