const viewData = {
    id: 'average-sales-order-price',
    label: 'Average Sales Order Price',
    link: '/services/web/codbex-orders-widgets/subviews/average-sales-order-price.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}