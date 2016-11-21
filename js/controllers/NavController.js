"use strict";

app.controller("NavController", function ($scope) {
    $scope.navItems = [
        {
            name: "Logout",
            url: "#/logout"
        }, {
            name: "All Contacts",
            url: "#/contacts/list"
        }, {
            name: "New Contact",
            url: "#/contacts/new"
        }
    ];
});
