app = angular.module('MainApp', ["ngRoute", "chart.js"])

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "views/table.htm"
    }).when("/tables", {
        templateUrl : "views/table.htm"
    }).when("/charts", {
        templateUrl : "views/chart.htm"
    })
});