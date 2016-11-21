"use strict";

app.controller("ContactNewCtrl", function ($scope, $location, ContactFactory) {

  $scope.newContact = {};

  $scope.addNewContact = () => {
    ContactFactory.postNewContact($scope.newContact).then(contactId => {
      $location.url("/contacts/list");
      $scope.newContact = {};
    });
  };
});
