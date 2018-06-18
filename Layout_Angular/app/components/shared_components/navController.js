app.controller('navController', [
  '$scope', '$cookieStore', '$rootScope','$http',
  function($scope, $cookieStore, $rootScope,$http) {

    $rootScope.currentUser = null;

    $('.button-collapse').sideNav();

    $('#side').sideNav({closeOnClick: true});

    $('#register-side')
        .sideNav({edge: 'right', menuWidth: 400});

    $('#profile-side')
        .sideNav({edge: 'right', menuWidth: 300, closeOnClick: true});

    $('.modal').modal();

    $rootScope.currentUser = $cookieStore.get('currentUser');
    try {
      console.log('User -> ' + $rootScope.currentUser.firstName)
    } catch (error) {
      $rootScope.currentUser = null;
      $cookieStore.remove('currentUser');
      console.log('No user logged in');
      console.log('->'+$rootScope.currentUser);
    }

    $scope.test = function(){
      $http.post('http://localhost:8086/mass/test').then(function(response){
        console.log('Connection established.');
        var val = response.data;
        console.log('Test value -> '+val.testVal);
        console.log('Test status -> '+response.status);
      },function(error){
        console.log('Connect dennied.');
        console.log('Error -> ');
        console.log(error);
      });
    }

  }
]);