define([
    'underscore'
], function (_) {
    return _.template('' +
        '<div class="footer-to-the-bottom">' +
        '<header>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<div class="col-sm-6">' +
        '<h1><%= year %> <%= make %> <%= model %> <%= submodel %></h1>' +
        '</div>' +
        '<div class="col-sm-6">' +
        '<div class="list-style-id btn-group">' +
        '<button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">Loading...</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container-fluid">' +
        '<div class="row">' +
        '<ul class="nav nav-pills edm-navigation">' +
        '<% if (tabsList.length < 4) { %>' +
        '<% _.each(tabsList, function(el, i) { %>' +
        '<li <% if (i === 0) { %>class="active"<% } %>>' +
        '<a data-id="<%= el %>" href="#"><%= tabsToDisplay[el] %></a>' +
        '</li>' +
        '<% }); %>' +
        '<% } else { %>' +
        '<% _.each(tabsList, function(el, i) { %>' +
        '<% if (i < 2) { %>' +
        '<li <% if (i === 0) { %>class="active"<% } %>>' +
        '<a data-id="<%= el %>" href="#"><%= tabsToDisplay[el] %></a>' +
        '</li>' +
        '<% } %>' +
        '<% if (i === 2) { %>' +
        '<li class="visible-xs btn-group nav-split-button">' +
        '<button type="button" data-action-id="<%= el %>" class="btn action"><% if (el === "consumer-reviews-tab") { %>Reviews <% } else { %><%= tabsToDisplay[el] %><% } %></button>' +
        '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' +
        '<span class="arrow-down"></span>' +
        '<span class="sr-only">Toggle Dropdown</span>' +
        '</button>' +
        '<ul class="dropdown-menu" role="menu">' +
        '<% _.each(tabsList.slice(2), function(el, i) { %>' +
        '<li <% if (i === 0) { %>class="hidden"<% } %>><a data-id="<%= el %>" href="#"><%= tabsToDisplay[el] %></a></li>' +
        '<% }); %>' +
        '</ul>' +
        '</li>' +
        '<% _.each(tabsList.slice(2), function(el, i) { %>' +
        '<li class="hidden-xs"><a data-id="<%= el %>" href="#"><%= tabsToDisplay[el] %></a></li>' +
        '<% }); %>' +
        '<% } %>' +
        '<% }); %>' +
        '<% } %>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<div class="main-content"></div>' +
        '</div>' +
        '<footer class="container-fluid">' +
        '<a class="legacy" href="http://www.edmunds.com/about/visitor-agreement.html" target="_blank">Legal Notice</a>' +
        '<div class="logo"><a class="pull-right" href="http://www.edmunds.com" target="_blank"></a>A service of</div>' +
        '</footer>' +
        '');
});