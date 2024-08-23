const dashboard = angular.module('top-purchase-orders', ['ideUI', 'ideView']);

dashboard.controller('TopPurchaseOrdersController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
    $scope.state = {
        isBusy: true,
        error: false,
        busyText: "Loading...",
    };

    async function getProductData() {
        try {
            const response = await $http.get("/services/ts/codbex-orders-widgets/api/ProductService.ts/productData");
            return response.data;
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    async function getOrderData() {
        try {
            const response = await $http.get("/services/ts/codbex-orders-widgets/api/OrderService.ts/orderData");
            return response.data;
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    }


    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.topPurchaseOrders = orderData.TopPurchaseOrders;
    });

    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.$apply(function () {
            $scope.topCustomers = orderData.TopCustomers;
        });
    });

    angular.element($document[0]).ready(async function () {
        const productData = await getProductData();
        $scope.$apply(function () {
            $scope.topProductsByUnits = productData.TopProductsByUnits;
            $scope.topProductsByRevenue = productData.TopProductsByRevenue;
            $scope.displayedProducts = $scope.topProductsByUnits; // Default display
        });
    });

}]);