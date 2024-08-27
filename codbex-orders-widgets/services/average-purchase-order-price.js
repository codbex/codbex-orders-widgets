const widgetData = {
    id: 'average-purchase-order-price',
    label: 'Average Purchase Order Price',
    link: '/services/web/codbex-orders-widgets/subviews/average-purchase-order-price.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}