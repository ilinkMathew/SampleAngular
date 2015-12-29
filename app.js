var app = angular.module('BlankApp', ['ngMaterial'])
.config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
})
