Package.describe({
  name: 'vigorwebsolutions:mocha',
  summary: 'Run Meteor package or app tests with Mocha',
  git: 'https://github.com/arist0tl3/meteor-mocha.git',
  documentation: '../README.md',
  version: '0.4.6',
  testOnly: true,
});

Package.onUse(function onUse(api) {
  api.use([
    'vigorwebsolutions:mocha-core@1.0.2',
    'ecmascript@0.3.0',
  ]);

  api.use([
    'meteortesting:browser-tests@0.1.1'
  ], 'server');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
