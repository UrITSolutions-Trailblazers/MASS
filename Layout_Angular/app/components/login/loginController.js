app.controller('loginController', [
  '$scope', '$rootScope', '$cookieStore', '$http', 'REST_URI',
  function($scope, $rootScope, $cookieStore, $http, REST_URI) {
    $scope.user = {};
    $scope.loader = false;
    $scope.login = function() {
      $scope.loader = true;
      $http.post(REST_URI + '/login', $scope.user)
          .then(
              (response) => {
                console.log('Response -> ' + response.data);
                console.log('Status -> ' + response.status);
                var currentUser = response.data;
                $cookieStore.put('currentUser', currentUser);
                $rootScope.currentUser = currentUser;
                $('#login-modal').modal('close');
                $scope.loader = false;
                Materialize.toast('Hi ' + currentUser.firstName, 4000);
              },
              (error) => {
                console.log('Error -> ' + error);
                $scope.loader = false;
                Materialize.toast('Oopps wrong cridentials', 4000);
              });
    }
  }
]);