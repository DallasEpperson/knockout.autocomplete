var expect = window.weknowhow.expect;
expect.use(window.unexpected.dom);

var Key = {
    escape: 27,
    up: 38,
    down: 40,
    pageUp: 33,
    pageDown: 34,
    enter: 13,
    tab: 9
};

function clearTestElement() {
    var $testElement = $('#test').find('*');
    $testElement.each(function () {
        ko.cleanNode(this);
    });
}

function useTestElement(html) {
    var container = $('#test');
    container.empty();
    var testElement = $(html).clone();
    testElement.appendTo(container);
    return $(testElement[0]);
}

function getMenu() {
    return $('.floating-menu')[0];
}

function touchStart(element, options) {
    var defaultOptions = { };
    options = $.extend(defaultOptions, options);
    var e = $.Event("touchstart", options);
    element.trigger(e);
}

function touchEnd(element, options) {
    var defaultOptions = { };
    options = $.extend(defaultOptions, options);
    var e = $.Event("touchend", options);
    element.trigger(e);
    return e;
}

function touchMove(element, options) {
    var defaultOptions = { };
    options = $.extend(defaultOptions, options);
    var e = $.Event("touchmove", options);
    element.trigger(e);
}

function click(element, options) {
    var defaultOptions = {
        which: 1,
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("mousedown", options);
    element.trigger(e);
}

function keyDown(element, options) {
    var defaultOptions = {
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("keydown", options);
    element.trigger(e);
}

function keyUp(element, options) {
    var defaultOptions = {
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("keyup", options);
    element.trigger(e);
}

function arrowDown(element, options) {
    var defaultOptions = { which: 40 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

function arrowUp(element, options) {
    var defaultOptions = { which: 38 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

function space(element, options) {
    var defaultOptions = { which: 32 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

function toArray(args) {
    return Array.prototype.slice.call(args);
}

beforeEach(function() {
    $('.floating-menu').remove();
});
