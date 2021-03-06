var myApp = angular.module('myApp', ['ngRoute', 'dashBoard', 'programLevel', 'lobView', 'projectSummary', 'viewProfile', 'projectExecution', 'myPage']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    
    $routeProvider    
    .when('/dashboard', {
        templateUrl: 'index.html'
    })
    .when('/dashboardView', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/programView', {
        templateUrl: 'views/programLevel.html',
        controller: 'programLevelController'
    })
    .when('/lobView', {
        templateUrl: 'views/lobView.html',
        controller: 'lobViewController'
    })
    .when('/projectSummary', {
        templateUrl: 'views/projectSummary.html',
        controller: 'projectSummaryController'
    })
    .when('/projectExecution', {
        templateUrl: 'views/projectExecution.html',
        controller: 'projectExecutionController'
    })
    .when('/viewProfile', {
        templateUrl: 'views/viewProfile.html',
        controller: 'viewProfileController'
    })
    .when('/myPage', {
        templateUrl: 'views/myPage.html',
        controller: 'myPageController'
    })
    .otherwise({redirectTo: '/'});
}]);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.colorList = ['#D91E18', '#9B59B6', '#26A65B', '#D35400', '#6C7A89', '#03C9A9', '#2b597b'];
    
    $scope.applyTheme = function(theme) {
      $scope.selectedBorder = theme;
      $scope.theme = {
          background: theme          
      }
    };
    
}]);