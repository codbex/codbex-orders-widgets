const viewData = {
    id: 'avarage-purchase-order-price',
    label: 'Avarage Purchase Order Price',
    link: '/services/web/codbex-orders-widgets/purchaseOrdersWidgets/AvaragePurchaseOrderPrice/avarage-purchase-order-price.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}