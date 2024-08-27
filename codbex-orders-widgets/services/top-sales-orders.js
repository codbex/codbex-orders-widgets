const widgetData = {
    id: 'top-sales-orders',
    label: 'Top Sales Orders',
    link: '/services/web/codbex-orders-widgets/subviews/top-sales-orders.html',
    lazyLoad: true,
    order: 11
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}