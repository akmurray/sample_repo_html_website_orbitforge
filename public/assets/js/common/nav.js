(function () {
  var routes = [
    { key: 'home', href: 'index.html', label: 'Home' },
    { key: 'about', href: 'about.html', label: 'About' },
    { key: 'products', href: 'products.html', label: 'Products' },
    { key: 'dashboard', href: 'dashboard.html', label: 'Dashboard' },
    { key: 'contact', href: 'contact.html', label: 'Contact' },
    { key: 'changelog', href: 'changelog.html', label: 'Changelog' }
  ];

  function renderNav() {
    var root = microdom.bySel('[data-nav-root]');
    if (!root) return;

    var page = (document.body && document.body.getAttribute('data-page')) || '';
    var links = routes
      .map(function (route) {
        var cls = route.key === page ? 'is-active' : '';
        return '<a class="' + cls + '" href="' + route.href + '">' + route.label + '</a>';
      })
      .join('');

    microdom.html(
      root,
      '<nav class="nav">' +
        '<div class="nav__brand">Orbitforge</div>' +
        '<div class="nav__links">' + links + '</div>' +
      '</nav>'
    );
  }

  renderNav();
})();
