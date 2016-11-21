"use strict";

app.controller("ContactListCtrl", function ($scope, ContactFactory) {

    $scope.contacts = [];

    let getContacts = () => {
        ContactFactory.getContactList().then(fbContacts => {
            $scope.contacts = fbContacts;
        });
    };

    getContacts();

    $scope.deleteContact = (contactId) => {
        ContactFactory.deleteContact(contactId).then(() => {
            getContacts();
        });
    };
});
