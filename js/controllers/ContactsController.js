"use strict";

app.controller("ContactsController", ($scope, ContactFactory) => {

    $scope.newContact = {};
    $scope.contacts = [];

  let getContacts = () => {
      ContactFactory.getContactList().then(fbContacts => {
        $scope.contacts = fbContacts;
      });
    };

    getContacts();

    $scope.addNewContact = () => {
        ContactFactory.postNewContact($scope.newContact).then(contactId => {
          getContacts();
            $scope.newContact = {};
        });
    };

    $scope.deleteContact = (contactId) => {
        ContactFactory.deleteContact(contactId).then(() => {
          getContacts();
        });
    };
});
