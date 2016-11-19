"use strict";

app.controller("NavController", ($scope) => {
    $scope.navItems = [
        {
            name: "Logout"
        }, {
            name: "All Contacts"
        }, {
            name: "New Contact"
        }
    ];
});
