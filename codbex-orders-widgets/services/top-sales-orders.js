const viewData = {
    id: 'top-sales-orders',
    label: 'Top Sales Orders',
    link: '/services/web/codbex-orders-widgets/salesOrdersWidgets/Top Sales Orders/top-sales-orders.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}