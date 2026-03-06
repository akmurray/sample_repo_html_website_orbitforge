const fs = require('fs');
const path = require('path');
const { summarizeTasks } = require('../src/summarize');

const root = path.resolve(__dirname, '..');
const tasksPath = path.join(root, 'data', 'tasks.json');
const expectedPath = path.join(root, 'data', 'expected.summary.json');

const tasks = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
const expected = JSON.parse(fs.readFileSync(expectedPath, 'utf8'));
const actual = summarizeTasks(tasks);

const expectedText = JSON.stringify(expected, null, 2);
const actualText = JSON.stringify(actual, null, 2);

if (expectedText !== actualText) {
  console.error('Summary verification FAILED');
  console.error('Expected and actual differ.');
  process.exit(1);
}

console.log('Summary verification passed');
