class Page {

    constructor() {
        this.ctrls = {}
    }

    init(elem) {
        var bindName = elem.getAttribute('data-bind');
        var bindCtrl = this.ctrls[bindName] || null;
        if (bindCtrl !== null)
            bindCtrl.apply(elem)
    }

    install(context) {
        context.querySelectorAll('[data-bind]').forEach(this.init, this);
    }

    addCtrl(name, ctrl) {
        this.ctrls[name] = ctrl
    }

}

export default Page;
