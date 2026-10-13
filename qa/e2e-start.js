// Real Tunnel.start() from a cold binary dir (download -> extract -> spawn), then stop.
var Tunnel = require(process.cwd());
var t = new Tunnel();
var opts = { user: process.env.LT_USERNAME, key: process.env.LT_ACCESS_KEY, tunnelName: 'te27044-' + process.env.GITHUB_RUN_ID + '-' + process.env.RUN_N };
var t0 = Date.now();
t.start(opts).then(function() {
  console.log('E2E isRunning=' + t.isRunning() + ' after ' + (Date.now() - t0) + 'ms');
  return t.stop();
}).then(function() { console.log('E2E stopped'); process.exit(0); })
  .catch(function(e) { console.log('E2E FAIL', e && (e.code || e.message || e)); process.exit(1); });
