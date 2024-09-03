const widgetData = {
    id: 'new-sales-orders',
    label: 'New Sales Orders',
    link: '/services/web/codbex-orders-widgets/subviews/new-sales-orders.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--12 fd-col-md--6 fd-col-lg--6 fd-col-xl--6"
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}