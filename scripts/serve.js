const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'public');
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

function safePath(urlPath) {
  const cleaned = urlPath.split('?')[0].split('#')[0];
  const normalized = path.normalize(cleaned).replace(/^\.+[\\/]/, '');
  let target = path.join(root, normalized);
  if (cleaned === '/' || cleaned === '') {
    target = path.join(root, 'index.html');
  }
  return target;
}

http.createServer((req, res) => {
  const target = safePath(req.url || '/');
  if (!target.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(target, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(target).toLowerCase();
    const type = contentTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(port, () => {
  console.log('Orbitforge test site running on http://localhost:' + port);
});
