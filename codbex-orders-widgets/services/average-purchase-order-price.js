const widgetData = {
    id: 'average-purchase-order-price',
    label: 'Average Purchase Order Price',
    link: '/services/web/codbex-orders-widgets/subviews/average-purchase-order-price.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--12 fd-col-md--6 fd-col-lg--6 fd-col-xl--6"
};

function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = getWidget;
}

export { getWidget }
