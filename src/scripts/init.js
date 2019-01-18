// auto binding
(function () {

    function init(elem) {
        var bindName = elem.getAttribute('data-bind');
        var bindCtrl = window[bindName] || null;
        if (bindCtrl !== null)
            bindCtrl.apply(elem)
    }

    function install(context) {
        context.querySelectorAll('[data-bind]').forEach(init);
    }

    install(document);

})();
