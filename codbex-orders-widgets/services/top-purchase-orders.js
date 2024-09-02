const widgetData = {
    id: 'top-purchase-orders',
    label: 'Top Purchase Orders',
    link: '/services/web/codbex-orders-widgets/subviews/top-purchase-orders.html',
    lazyLoad: true,
    order: 10
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}