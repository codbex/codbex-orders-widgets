const viewData = {
    id: 'top-purchase-orders',
    label: 'Top Purchase Orders',
    link: '/services/web/codbex-orders-widgets/purchaseOrdersWidgets/TopPurchaseOrders/top-purchase-orders.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}