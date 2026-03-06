(function () {
  var dom = {
    bySel: function (selector, root) {
      return (root || document).querySelector(selector);
    },
    bySelAll: function (selector, root) {
      return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    },
    on: function (el, eventName, handler) {
      if (el) {
        el.addEventListener(eventName, handler);
      }
    },
    html: function (el, value) {
      if (el) {
        el.innerHTML = value;
      }
    }
  };

  window.microdom = dom;
})();
