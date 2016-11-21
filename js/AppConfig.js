"use strict";

app.run((FIREBASE_CONFIG)=>{
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config($routeProvider => {
  $routeProvider
    .when('/contacts/list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'ContactListCtrl'
    })
    .when('/contacts/new', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ContactNewCtrl'
    })
    .when('/contacts/details/:id', {
      templateUrl: 'partials/contact-details.html',
      controller: 'ContactDetailsCtrl'
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ContactEditCtrl'
    })
    .otherwise('/contacts/list');
});
