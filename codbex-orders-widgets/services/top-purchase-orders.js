const viewData = {
    id: 'top-purchase-orders',
    label: 'Top Purchase Orders',
    link: '/services/web/codbex-orders-widgets/subviews/top-purchase-orders.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}