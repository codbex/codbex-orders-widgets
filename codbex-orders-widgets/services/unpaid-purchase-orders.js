const widgetData = {
    id: 'unpaid-purchase-orders',
    label: 'Unpaid Purchase Orders',
    link: '/services/web/codbex-orders-widgets/subviews/unpaid-purchase-orders.html',
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