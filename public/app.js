var jetbrains = angular.module("jetbrains", []);
jetbrains.controller("appController", function ($http) {
    var app = this;
    $http.get("http://localhost:3000").success(function (products) {
        app.products = products;
    })
});
