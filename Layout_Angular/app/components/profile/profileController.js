app.controller('profileController', [
  '$scope', '$rootScope', '$cookieStore',
  function($scope, $rootScope, $cookieStore) {

    var me = this;

    me.logout = function() {
      console.log('Logging out');
      $rootScope.currentUser = null;
      $cookieStore.remove('currentUser');
      Materialize.toast('Logged out', 4000);
    }

  }
]);