var jetbrains = angular.module("jetbrains", []);
jetbrains.controller("appController", function ($http) {
    var app = this;
    var url = "http://localhost:3000";
    app.saveProduct = function (newProduct) {
        $http.post(url + "/add", {name: newProduct}).success(function () {
            loadProducts()
        })
    };
    function loadProducts() {
        $http.get(url).success(function (products) {
            app.products = products;
        })
    }

    loadProducts();
});
