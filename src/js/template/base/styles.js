define(function(){
    return _.template('' +
        '<a class="btn dropdown-toggle" data-toggle="dropdown"><%= currentItem.name %><span class="arrow-down"></span></a>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<% _.each(collection, function(el){ %> <li><a data-id="<%= el.id %>" href="#" title="<%= el.name %>"><%= el.name %></a></li><% }) %>' +
        '</ul>' +
    '');
});