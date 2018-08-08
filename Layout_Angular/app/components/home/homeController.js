app.controller('homeController', ['$scope', '$http', 'REST_URI', '$route',
    function ($scope, $http, REST_URI, $route) {

        /**
         * Materialize CSS JQuery functions.
         */
        $(document).ready(function () {
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true
            });

            $("#nav-home").addClass("active");

            $("nav").addClass("transparent")
            $(window).scroll(function () {
                if ($(document).scrollTop() > 50) {
                    $("nav").removeClass("transparent")
                } else {
                    if($route.current.$$route.originalPath === '/home')
                        $("nav").addClass("transparent");
                }
            });
        });

        /**
         * Angular functions.
         */
        $scope.questions = [];

        $scope.openQuesModal = function () {

            $('#quesModal').modal('open');

            $http.post(REST_URI + '/getQuestions').then(function (response) {
                console.log('data recieved');
                $scope.questions = response.data;

                console.log($scope.questions);

            }, function (error) {
                Materialize.toast(error, 4000);
            });
        }

    }]);