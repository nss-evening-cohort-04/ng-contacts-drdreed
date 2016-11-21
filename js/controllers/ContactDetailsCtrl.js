"use strict";

app.controller("ContactDetailsCtrl", function ($scope, $routeParams, ContactFactory) {
  $scope.selectedContact = {};
  let contactId = $routeParams.id;

  ContactFactory.getSingleContact(contactId).then(oneContact => {
    console.log("contactId", contactId);
    oneContact.id = contactId;
    $scope.selectedContact = oneContact;
  });
});
