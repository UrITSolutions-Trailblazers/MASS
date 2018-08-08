app.controller('navController', [
  '$scope', '$cookieStore', '$rootScope', '$http',
  function ($scope, $cookieStore, $rootScope, $http) {

    /**
     * Materialize CSS JQuery functions
     */
    $(document).ready(function () {
      $('.button-collapse').sidenav();
      $('#side').sidenav({ closeOnClick: true });
      $('#register-form').sidenav({ edge: 'right'});
      $('#profile-nav').sidenav({ edge: 'right', closeOnClick: true });
      $('.modal').modal({});

      $('#register-side').click(() => {
        $('#register-form').sidenav('open');
      })

      $('#profile-side').click(() => {
        $('#profile-nav').sidenav('open');
      })
    });


    /**
     * Angular functions
     */
    $scope.$on('$routeChangeStart', function ($event, next, current) {
      $('nav').removeClass("transparent");
      $('#nav-admin').removeClass('active');
      $('#nav-home').removeClass('active');
    });

    $rootScope.currentUser = null;
    $rootScope.currentUser = $cookieStore.get('currentUser');
    try {
      console.log('User -> ' + $rootScope.currentUser.firstName)
    } catch (error) {
      $rootScope.currentUser = null;
      $cookieStore.remove('currentUser');
      console.log('No user logged in');
      console.log('->' + $rootScope.currentUser);
    }

    $scope.test = function () {
      $http.post('http://localhost:8086/mass/test').then(function (response) {
        console.log('Connection established.');
        var val = response.data;
        console.log('Test value -> ' + val.testVal);
        console.log('Test status -> ' + response.status);
      }, function (error) {
        console.log('Connect dennied.');
        console.log('Error -> ');
        console.log(error);
      });
    }

  }
]);