app.controller('adminController', [
  '$http', '$scope', 'REST_URI',
  function($http, $scope, REST_URI) {
    
    $scope.ques = {};
    $scope.loader = false;
    $scope.openQuesModal =
        function() {
      $('#questionModal').modal('open');
    }

    $scope.addQuestion = function() {
      $scope.loader = true;
      $http.post(REST_URI + '/addQuestion', $scope.ques)
          .then(
              function(response) {
                $('#questionModal').modal('close');
                $scope.loader = false;
                $scope.ques = {};
                Materialize.toast('Question added successfully.', 4000);
              },
              function(error) {
                $scope.loader = false;
                Materialize.toast('Question not added successfully.', 4000);
              });
    }

  }
]);
