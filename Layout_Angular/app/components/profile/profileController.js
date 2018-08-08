app.controller('profileController', [
  '$scope', '$rootScope', '$cookieStore',
  function($scope, $rootScope, $cookieStore) {

    var me = this;

    me.logout = function() {
      console.log('Logging out');
      $rootScope.currentUser = null;
      $cookieStore.remove('currentUser');
      $('#profile-nav').sidenav('close');
      M.toast({html: 'Logged out'});
    }

  }
]);