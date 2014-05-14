var app = angular.module('szalekApp', []);

app
    .controller("ProductListCtrl", function ($scope, $http) {

        $scope.pageTitle = "Product List";

        $http.get('products.json').success(function (data) {
            $scope.products = data;
        });

    })
    .directive('btbwProductList', function () {
        return {
            restrict: 'E',
            scope: {
                items: '=items'
            },
            templateUrl: 'tpl/product-list.tpl.html'
        };
    });
;