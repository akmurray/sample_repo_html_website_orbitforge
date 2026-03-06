#!/usr/bin/env bash
set -euo pipefail
node --check scripts/serve.js
node --check public/assets/js/common/nav.js
node --check public/assets/js/pages/products.js
node --check public/assets/js/pages/dashboard.js
node --check public/assets/js/pages/contact.js
node --check public/assets/js/pages/changelog.js
node scripts/verify_summary.js
echo "orbitforge smoke passed"
