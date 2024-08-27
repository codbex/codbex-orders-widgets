const widgetData = {
    id: 'top-customer',
    label: 'Top Customer',
    link: '/services/web/codbex-orders-widgets/subviews/top-customer.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}