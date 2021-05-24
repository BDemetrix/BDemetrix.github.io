(function () {
    function extractHostname(url) {
        var hostname;
        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        return hostname;
    };

    function clientParams() {
        return currentScript().src.replace(/^[^\?]+\??/, '').split(/[;&]/)
    };

    function currentScript() {
        return document.currentScript || (function () {
            var scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })()
    };

    function getPath() {
        var path = [];
        path.push(extractHostname(window.location.href));
        if (top !== self) {
            path.push(extractHostname(document.referrer));
        }
        if ("undefined" == typeof window.location.ancestorOrigins || !(window.location.ancestorOrigins instanceof DOMStringList) || window.location.ancestorOrigins.length == 0) {
            return path;
        }
        path.push(extractHostname(window.location.ancestorOrigins.item(window.location.ancestorOrigins.length - 1)))
        return path
    }

    var path = getPath();
    var params = clientParams();
    (new Image()).src = 'https://ad-eu.p.otm-r.com/dr?' + params.join('&') + "&d=" + encodeURIComponent(path.join());

})();
