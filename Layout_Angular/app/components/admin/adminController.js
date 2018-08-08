app.controller('adminController', [
  '$http', '$scope', 'REST_URI',
  function ($http, $scope, REST_URI) {

    /**
     * Materialize CSS JQuery functions.
     */
    $(document).ready(function () {
      $('.modal').modal();
      $('#nav-admin').addClass('active');
    });

    /**
     * Angular functions.
     */
  }
]);
