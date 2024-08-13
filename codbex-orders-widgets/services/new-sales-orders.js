const viewData = {
    id: 'new-sales-orders',
    label: 'New Sales Orders',
    link: '/services/web/codbex-orders-widgets/salesOrdersWidgets/NewSalesOrders/new-sales-orders.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}