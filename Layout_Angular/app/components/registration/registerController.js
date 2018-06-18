app.controller('registerController', [
  '$scope', '$rootScope', '$timeout', '$http', 'REST_URI',
  function($scope, $rootScope, $timeout, $http, REST_URI) {

    $scope.user = {};
    $scope.loader = false;

    $scope.register = function() {
      $scope.loader = true;

      $http.post(REST_URI + '/register', $scope.user)
          .then(
              (response) => {
                console.log('Status -> ' + response.status);
                $timeout(function() {
                  $('#register-side').sideNav('hide');
                  Materialize.toast('Registered successfully', 4000);
                  $scope.loader = false;
                }, '1500');
              },
              (error) => {
                $timeout(function() {
                  Materialize.toast('Opps something went wrong', 4000);
                  $scope.loader = false;
                }, '1500');
                console.log(error);
              });
    }
  }
]);