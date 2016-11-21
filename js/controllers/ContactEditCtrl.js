"use strict";

app.controller("ContactEditCtrl", function ($scope, $location, $routeParams, ContactFactory) {
  $scope.newTask = {};
  let contactId = $routeParams.id;

  ContactFactory.getSingleContact(contactId).then(function(oneContact) {
    oneContact.id = contactId;
    $scope.newTask = oneContact;
  });

  $scope.addNewContact = () => {
    ContactFactory.editContact($scope.newTask).then(function (response) {
      $scope.newTask = {};
      $location.url("/contacts/list");
    });
  };
});
