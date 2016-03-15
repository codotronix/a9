(function(){
    angular.module('app', ['ngRoute'])
    
    /*****************************************************************************
     * The Route
     *****************************************************************************/    
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/home', {
            templateUrl:'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/library', {
            templateUrl:'partials/library.html',
            controller:'libraryCtrl'
        })
        .when('/exam', {
            templateUrl:'partials/exam.html',
            controller:'examCtrl'
        })
        .when('/about', {
            templateUrl:'partials/about.html',
            controller:'aboutCtrl'
        })
        .when('/login', {
            templateUrl:'partials/login.html',
            controller:'loginCtrl'
        })
        .when('/register', {
            templateUrl:'partials/register.html',
            controller:'registerCtrl'
        })
        .when('/', {
            redirectTo: '/home'
        })
        .otherwise({
            redirectTo: '/'
        });        
    }])
    
    /***********************************************************************
     * mainCtrl
     ***********************************************************************/
    .controller('mainCtrl', ["$scope", "$timeout", function ($scope, $timeout) {
        $scope.pageClass = "home";
        
        
    }])
    
    /***********************************************************************
     * homeCtrl
     ***********************************************************************/
    .controller('homeCtrl', ["$scope", "$http", function ($scope, $http) {
        $scope.$parent.pageClass = "home";
        
        $http.get('data/lists/courseList.json').then(function(res){
            $scope.courses = res.data;
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        
    }])
    
    /***********************************************************************
     * libraryCtrl
     ***********************************************************************/
    .controller('libraryCtrl', ["$scope", function ($scope) {
        $scope.$parent.pageClass = "library";
        
        
    }])
    
    /***********************************************************************
     * examCtrl
     ***********************************************************************/
    .controller('examCtrl', ["$scope", function ($scope) {
        $scope.$parent.pageClass = "exam";
    }])
    
    /***********************************************************************
     * aboutCtrl
     ***********************************************************************/
    .controller('aboutCtrl', ["$scope", function ($scope) {
        $scope.$parent.pageClass = "about";
    }])
    
    /***********************************************************************
     * loginCtrl
     ***********************************************************************/
    .controller('loginCtrl', ["$scope", function ($scope) {
        $scope.$parent.pageClass = "login";
    }])
    
    /***********************************************************************
     * registerCtrl
     ***********************************************************************/
    .controller('registerCtrl', ["$scope", function ($scope) {
        $scope.$parent.pageClass = "register";
    }])
    
    
})();