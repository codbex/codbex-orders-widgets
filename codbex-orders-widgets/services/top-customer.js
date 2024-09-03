const widgetData = {
    id: 'top-customer',
    label: 'Top Customer',
    link: '/services/web/codbex-orders-widgets/subviews/top-customer.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--12 fd-col-md--6 fd-col-lg--6 fd-col-xl--6"
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = getWidget;
}
