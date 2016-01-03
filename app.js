var app = angular.module('ServiceApp', ['ngMaterial','ngRoute'])
.config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red')
    .backgroundPalette('blue-grey'); 
})
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/Create',{
        templateUrl:'templates/Create.html',
        controller:'createController'
    
    }).
    when('/Fix',{
        templateUrl:'templates/Fix.html'
    })
    .when('/LookUp',{
        templateUrl:'templates/LookUp.html'
    })
    .otherwise({
       redirectTo:'/' 
    });

}])

.controller('createController',['$scope',function($scope){
 console.log("create ctrl");
    $scope.homePageView = false;
    $scope.createView = function(){
    $scope.homePageView = false;
    console.log("create view:"+$scope.homePageView);
};    return $scope.homePageView;
//$scope.createView();
}])
.controller('MainController',['$scope',function($scope){
   
    //$scope.homePageView = false;
    console.log($scope.homePgeView);
}]);    