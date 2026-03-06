(function () {
  var listEl = microdom.bySel('[data-release-list]');
  if (!listEl) return;

  fetch('assets/data/releases.json')
    .then(function (resp) { return resp.json(); })
    .then(function (items) {
      var rows = (items || []).map(function (item) {
        return (
          '<article class="list__item">' +
            '<strong>v' + item.version + '</strong> (' + item.date + ')<br />' +
            '<span>' + item.notes + '</span>' +
          '</article>'
        );
      });
      microdom.html(listEl, rows.join(''));
    })
    .catch(function () {
      microdom.html(listEl, '<p class="list__item">Unable to load releases.</p>');
    });
})();
