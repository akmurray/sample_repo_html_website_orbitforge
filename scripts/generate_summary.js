const fs = require('fs');
const path = require('path');
const { summarizeTasks } = require('../src/summarize');

const root = path.resolve(__dirname, '..');
const tasksPath = path.join(root, 'data', 'tasks.json');
const outPath = path.join(root, 'data', 'expected.summary.json');

const tasks = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
const summary = summarizeTasks(tasks);

fs.writeFileSync(outPath, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
console.log(`Wrote ${outPath}`);
