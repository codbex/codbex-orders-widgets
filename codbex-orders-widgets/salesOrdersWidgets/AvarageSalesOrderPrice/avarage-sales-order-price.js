const viewData = {
    id: 'avarage-sales-order-price',
    label: 'Avarage Sales Order Price',
    link: '/services/web/codbex-orders-widgets/salesOrdersWidgets/AvarageSalesOrderPrice/avarage-sales-order-price.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}