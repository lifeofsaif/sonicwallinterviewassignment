app = angular.module('MainApp', ["ngRoute", "chart.js"])

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "views/table.htm"
    }).when("/employees", {
        templateUrl : "views/table.htm"
    }).when("/analytics", {
        templateUrl : "views/chart.htm"
    })
});