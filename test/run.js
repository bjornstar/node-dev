const tap = require('tap');

const run = require('./utils/run');

tap.test('Restart the server', function (t) {
  run('server.js', t.end.bind(t));
});

tap.test('Supports vm functions', function (t) {
  run('vmtest.js', t.end.bind(t));
});

tap.test('Supports vm functions with missing file argument', function (t) {
  run('vmtest.js nofile', t.end.bind(t));
});
