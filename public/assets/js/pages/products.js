(function () {
  var listEl = microdom.bySel('[data-product-list]');
  var filterEl = microdom.bySel('[data-product-filter]');
  if (!listEl || !filterEl) return;

  var products = [];

  function render(items) {
    if (!items.length) {
      microdom.html(listEl, '<p class="list__item">No products found.</p>');
      return;
    }

    var rows = items.map(function (item) {
      return (
        '<article class="list__item">' +
          '<strong>' + item.name + '</strong><br />' +
          '<span>Plan: ' + item.plan + '</span><br />' +
          '<span>Price: $' + item.price + '/mo</span>' +
        '</article>'
      );
    });

    microdom.html(listEl, rows.join(''));
  }

  function applyFilter() {
    var query = (filterEl.value || '').toLowerCase().trim();
    var filtered = products.filter(function (item) {
      return item.name.toLowerCase().indexOf(query) >= 0;
    });
    render(filtered);
  }

  fetch('assets/data/products.json')
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
      products = Array.isArray(data) ? data : [];
      render(products);
    })
    .catch(function () {
      microdom.html(listEl, '<p class="list__item">Failed to load products.</p>');
    });

  microdom.on(filterEl, 'input', applyFilter);
})();
