const dashboard = angular.module('new-sales-orders', ['ideUI', 'ideView']);

dashboard.controller('NewSalesOrdersController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
    $scope.state = {
        isBusy: true,
        error: false,
        busyText: "Loading...",
    };

    $scope.openPerspective = function (perspective) {
        if (perspective === 'sales-orders') {
            messageHub.postMessage('launchpad.switch.perspective', { perspectiveId: 'sales-orders' }, true);
        }
    }

    $scope.today = new Date();

    const orderServiceUrl = "/services/ts/codbex-orders-widgets/api/OrderService.ts/orderData";
    $http.get(orderServiceUrl)
        .then(function (response) {
            $scope.OrderData = response.data;
            calculateGrossProfit();
        });

    async function getOrderData() {
        try {
            const response = await $http.get("/services/ts/codbex-widgets/api/OrderService.ts/orderData");
            return response.data;
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    }

    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.topSalesOrders = orderData.TopSalesOrders;
    });

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

}]);