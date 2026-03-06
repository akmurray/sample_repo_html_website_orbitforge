(function () {
  var kpiRoot = microdom.bySel('[data-kpi-grid]');
  var eventRoot = microdom.bySel('[data-event-list]');
  if (!kpiRoot || !eventRoot) return;

  var kpis = [
    { label: 'Open Tasks', value: 14 },
    { label: 'Deployments Today', value: 3 },
    { label: 'Build Success Rate', value: '97%' },
    { label: 'Active Agents', value: 5 }
  ];

  var events = [
    'Pipeline run #2481 completed successfully',
    'Catalog rebuild committed to main',
    'Agent review requested for UI regression',
    'Nightly smoke checks passed'
  ];

  microdom.html(
    kpiRoot,
    kpis.map(function (kpi) {
      return '<article class="kpi"><div class="kpi__label">' + kpi.label + '</div><div class="kpi__value">' + kpi.value + '</div></article>';
    }).join('')
  );

  microdom.html(
    eventRoot,
    events.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('')
  );
})();
