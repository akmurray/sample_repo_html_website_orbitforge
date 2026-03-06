(function () {
  var nameEl = microdom.bySel('[data-contact-name]');
  var msgEl = microdom.bySel('[data-contact-msg]');
  var submitEl = microdom.bySel('[data-contact-submit]');
  var resultEl = microdom.bySel('[data-contact-result]');
  if (!nameEl || !msgEl || !submitEl || !resultEl) return;

  microdom.on(submitEl, 'click', function () {
    var name = (nameEl.value || '').trim();
    var msg = (msgEl.value || '').trim();

    if (!name || !msg) {
      microdom.html(resultEl, 'Please provide both name and message.');
      return;
    }

    microdom.html(resultEl, 'Thanks, ' + name + '. Message queued for review.');
    nameEl.value = '';
    msgEl.value = '';
  });
})();
