app.controller('homeController',['$scope','$http','REST_URI',function($scope,$http,REST_URI){
    
    $scope.questions=[];

    $('.carousel').carousel(
        {
            fullWidgth: true,
            fullHeight: false,
            indicators: true,
            noWrap: false
        }
    );

    $('.carousel-slider').slider({ full_width: true });//slider init

    $scope.openQuesModal = function(){
        $('.carousel').carousel({fullWidth: true});
        $('#quesModal').modal('open');

        $http.post(REST_URI+'/getQuestions').then(function(response){
            console.log('data recieved');
            $scope.questions = response.data;

            console.log($scope.questions);

        },function(error){
            Materialize.toast(error, 4000);
        });
    }

}]);