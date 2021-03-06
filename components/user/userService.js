(function () {
    'use strict';

    angular
      .module('statusApp')
      .factory('User', UserService);

    function UserService($firebaseObject) {

        function newUserRef(user) {
            var ref = new Firebase("https://status-update-app.firebaseio.com/users/" + user.uid);
            return $firebaseObject(ref);
        }

        function getUserData(user) {
            var ref = new Firebase("https://status-update-app.firebaseio.com/users/" + user);
            return $firebaseObject(ref);
        }

        function getLoggedInUser() {
            var user = localStorage.getItem('firebase:session::status-update-app');
            if (user) {
                return JSON.parse(user);
            }
        }

        return {
            newUserRef: newUserRef,
            getUserData: getUserData,
            getLoggedInUser: getLoggedInUser
        }

    }

})();