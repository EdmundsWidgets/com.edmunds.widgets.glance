var allTestFiles = [];
var TEST_REGEXP = /.spec\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src/js',
  paths: {
      jquery: '../../bower_components/jquery/dist/jquery',
      backbone: '../../bower_components/backbone/backbone',
      underscore: '../../bower_components/underscore/underscore',
      bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
  },

  // dynamically load all test files
  deps: allTestFiles
});
require(['jquery', 'underscore', 'backbone'], function () {
    // we have to kickoff jasmine, as it is asynchronous
    window.__karma__.start()
});