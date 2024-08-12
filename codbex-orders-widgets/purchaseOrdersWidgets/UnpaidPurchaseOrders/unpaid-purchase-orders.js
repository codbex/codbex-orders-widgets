const viewData = {
    id: 'unpaid-purchase-orders',
    label: 'Unpaid Purchase Orders',
    link: '/services/web/codbex-orders-widgets/purchaseOrdersWidgets/Unpaid Purchase Orders/unpaid-purchase-orders.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}