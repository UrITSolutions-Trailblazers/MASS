app.constant('REST_URI','http://localhost:8086/mass');

app.config(function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home' || '/', {
            templateUrl : 'app/components/home/home.html',
            controller : 'homeController',
            controllerAs : 'homeCtrl'
        }).when('/admin', {
            templateUrl : 'app/components/admin/admin.html',
            controller : 'adminController',
            controllerAs : 'adminCtrl'
        })

        .when('/default', {
            templateUrl: 'app/components/default/default.html'
        });

    $routeProvider.otherwise({ redirectTo: '/default' });
});