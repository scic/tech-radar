module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    
    frameworks: ['jasmine'],
    
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/underscore/underscore-min.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ]
  });
};