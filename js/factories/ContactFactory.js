"use strict";

app.factory("ContactFactory", ($q, $http, FIREBASE_CONFIG) => {

    const getContactList = () => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`).success(response => {
                let contacts = [];
                if (response) {
                    Object.keys(response).map(key => {
                        response[key].id = key;
                        contacts.push(response[key]);
                    });
                }
                resolve(contacts);
            }).error(errorResponse => reject(errorResponse));
        });
    };

    const postNewContact = (newContact) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
                    JSON.stringify({
                        name: newContact.name,
                        email: newContact.email,
                        birthday: newContact.birthday,
                        phone: newContact.phone,
                        mobile: newContact.mobile
                    }))
                .success(postResponse => resolve(postResponse))
                .error(errorResponse => reject(errorResponse));
        });
    };

    const deleteContact = (contactId) => {
        console.log({
            contactId
        });
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
                .success(deletedResponse => resolve(deletedResponse))
                .error(errorResponse => reject(errorResponse));
        });
    };
    return {
        getContactList,
        postNewContact,
        deleteContact
    };
});
