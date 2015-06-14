/* Run with: node radarDataGen.js
 * 
 * This will overwrite the file at app/scripts/services/radarData.js
*/

'use strict';

// The title of your radar
var title = 'Javascript Technology Radar';

// List of your categories
var categories = ['Tools', 'Techniques', 'Platforms', 'Languages & Frameworks'];

// The status names with description
var statusDefinitions = [
  {
    label: 'Adopt',
    text: 'These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area.'
  },
  {
    label: 'Trial or Alternative',
    text: 'To be used in smallscale projects. Or technolgies that have a better alternative for most use cases.'
  },
  {
    label: 'Assess',
    text: 'Try these out.',
  },
  {
    label: 'Hold',
    text: 'Don\'t start with it now. Try to actively replace.',
  }
];

// Map technology types to radar categories
var typeToCategory = {
  'Node Version': 'Platforms',
  'Node Installer': 'Tools',
  'IDE / Editor': 'Tools',
  'Build System': 'Tools',
  'Linter / Codestyle': 'Tools',
  'Javascript Enhancers': 'Languages & Frameworks',
  'CSS Preprocessors': 'Languages & Frameworks',
  'CSS Frameworks': 'Languages & Frameworks',
  'Frontend Frameworks': 'Languages & Frameworks',
  'Functional Libraries': 'Languages & Frameworks',
  'Promise Libraries': 'Languages & Frameworks',
  'Package Managers': 'Tools',
  'Live Reload': 'Tools',
  'Techniques': 'Techniques'
};

// Your technologies grouped by type
var allData = {
  'Build System': {
    'gulp': {category: 'Adopt', text: 'gulp is to grunt what gradle is to maven. You can program your build in JavaScript instead of only declaring how it should work. Furthermore it works with streams and is usually faster than grunt.'},
    'grunt': {category: 'Trial or Alternative', text: 'gulp is just the better alternative. If you already are on grunt there is no immediate reason to switch to gulp, just consider it. If you haven\'t started with grunt, use gulp.'},
    'broccoli': {category: 'Hold', text: 'To new and experimental to consider right now. But maybe in the future. Angular 2 uses it.'},
    'brunch': {category: 'Hold', text: 'To exotic to consider.'}
  },
  'IDE / Editor': {
    'Webstorm': {category: 'Adopt', text: 'If you wan\'t to spend money for your IDE, spend it here. It has the best Javascript support with refactoring and autocomplete features.'},
    'atom': {category: 'Assess', text: 'Interesting, but sadly still a bit unstable.'},
    'brackets': {category: 'Assess', text: 'Interesting'},
    'Sublime': {category: 'Trial or Alternative', text: 'You can use it for free, but it will nag you constantly. So if you don\'t mind it, your okay here. If you wan\'t to pay for software consider Webstorm. It\'s in a similar price range, but has more refactoring and autocomplete features.'},
    'Eclipse': {category: 'Hold', text: 'Javasscript support is too bad right now. Coupled wit the slowness of Eclipse you\'re better off with a good editor.'}
  },
  'Node Version': {
    'v0.10': {category: 'Adopt', text: 'The proven version. Use it, it works.'},
    'v0.12': {category: 'Trial or Alternative', text: 'Brand new. There might still be some incompatablilities and bugs out there. It has a short lifespan because of the merger of nodejs and iojs. You should wait on that version.'},
    'iojs': {category: 'Hold', text: 'If you already have it, stick with it until the new merged nodejs and iojs version is out. Otherwise if you really want cutting each use v0.12.'}
  },
  'Javascript Enhancers': {
    'es6-babel': {category: 'Trial or Alternative', text: 'EcmaScript6 will be the next standard. So try it out.'},
    'es6-traceur': {category: 'Hold', text: 'Better use babel. It produces more readable code and implements more features of es6.'},
    'typescript': {category: 'Trial or Alternative', text: 'If you are missing types in Javascript, this is it. Otherwise give es6-babel a spin.'},
    'ClojureScript': {category: 'Assess', text: 'Intresting'},
    'Coffescript': {category: 'Hold', text: 'Replaced by es6.'},
    'Google Dart': {category: 'Hold', text: 'Failed to gain traction until now.'}
  },
  'Linter / Codestyle': {
    'eslint': {category: 'Adopt', text: 'Has a plugin architecture to include linters for framework specific code. E.g. for Angular or Ember. You can add your own ones. Also has codestyle checking ability. A slight performance penalty to jshint, since it builds an AST.'},
    'jshint': {category: 'Trial or Alternative', text: 'Configurable version of jslint. It\'s good, but consider migrating to eslint.'},
    'jslint': {category: 'Hold', text: 'Not configurable. Just replace it.'},
    'jscs': {category: 'Assess', text: 'Only a style checker. Eslint might provide these features aswell.'}
  },
  'CSS Preprocessors': {
    'sass': {category: 'Adopt', text: 'Seams to be more widespread knowadays than LESS.'},
    'LESS': {category: 'Trial or Alternative', text: 'If you have a css framework that uses it, then use it, otherwise sass seams to be more widespread.'},
    'stylus': {category: 'Hold', text: 'To exotic to be considered.'},
    'Plain CSS': {category: 'Hold', text: 'You really should use a CSS preprocessor. You\'re gonna love it.'}
  },
  'CSS Frameworks': {
    'bootstrap': {category: 'Adopt', text: 'Works well. Very widly used. Lots of good supporting components and extenstions.'},
    'foundation': {category: 'Assess', text: 'Looks interesting.'},
    'iconic': {category: 'Assess', text: 'More mobile centric.'}
  },
  'Package Managers': {
    'npm': {category: 'Adopt', text: 'It\'s everywhere, just use it.'},
    'bower': {category: 'Adopt', text: 'A frontend only package manager. Widly used and works without problems.'},
    'browserify': {category: 'Assess', text: 'A frontend package manager. Uses npm modules and turns them into frontend modules. Has certain build steps included, which might interfere with your custom build.'},
    'jspm': {category: 'Assess', text: 'Interesting.'},
    'webpack': {category: 'Assess', text: 'jspm might do the same but better.'}
  },
  'Frontend Frameworks': {
    'Angular 1': {category: 'Adopt', text: 'Huge community. Lots of documentation and modules'},
    'Angular 2': {category: 'Assess', text: 'Still in developer preview. Best used with typescript.'},
    'Ember': {category: 'Trial or Alternative', text: 'Good community. Good migration paths. Investigate it more.'},
    'Aurelia': {category: 'Assess', text: 'Interesting, but not wildly used right now.'},
    'React': {category: 'Assess', text: 'Fast rendering. Glimmer of Ember or the upcomming Angular 2 might be an alternative.'},
    'Knockout': {category: 'Assess', text: 'Angular, Ember, React seam to be more popular.'}
  },
  'Live Reload': {
    'browsersync': {category: 'Adopt', text: 'Supports reloading of frontend js files and injecting of css. Additionally supports the synching of page interactions over multiple browsers and devices.'},
    'livereload': {category: 'Trial or Alternative', text: 'Works good, but browsersync has more features.'},
    'nodemon': {category: 'Trial or Alternative', text: 'Restart the node server on file changes. Watcher is known to be slow on windows.'}
  },
  'Functional Libraries': {
    'lodash': {category: 'Adopt', text: 'A lot of (functional) goodies for working with arrays, collections, objects. It has some extensions over underscore, is modularized, and more actively developed than underscore.'},
    'underscore': {category: 'Trial or Alternative', text: 'The base lodash was forked from. Still active, but consider switching to lodash.'},
    'lodash-fp': {category: 'Assess', text: 'A wrapper for lodash to provide a function first syntax, which is truer to the functional style. Not very widespread.'},
    'ramda': {category: 'Assess', text: 'Has a function first syntax, which is truer to the functional style.'},
    'trine': {category: 'Assess', text: 'Depends on es6. Is very new.'}
  },
  'Promise Libraries': {
    'when': {category: 'Trial or Alternative', text: 'Covers a wide range of support for promises.'},
    'bluebird': {category: 'Assess', text: 'Looks nice. Similar to when.'},
    'async': {category: 'Assess', text: 'Cleaner syntax but less mighty. Widespread use.'}
  },
  'Techniques': {
    'One-Click workspace setup': {category: 'Adopt', text: 'Good to add new project members or updating the stack.'},
    'Infrastructure as code': {category: 'Adopt', text: 'Reproducible system setup'},
    'Application containers': {category: 'Adopt', text: 'Application containers such as docker provide a simple reproducible deployment method.'}
  }
};




var _ = require('underscore'); //jshint ignore:line
var fs = require('fs');

// Create structure with the technologies
var structure = statusDefinitions.map(function(statusItem) {
  statusItem.categories = categories.map(function(category) {
    return {
      label: category,
      technologies: []
    };
  });
  return statusItem;
});

// Fill technologies into structure
_.each(allData, function(entries, type) {
  var category = typeToCategory[type];
  _.each(entries, function(data, tech) {
    var ring = _.findWhere(structure, {label: data.category});
    var slice = _.findWhere(ring.categories, {label: category});
    slice.technologies.push({label: tech, type: type, text: data.text});
  });
});

// Wrap into angular module with constant service
var data = JSON.stringify(structure, null, '  ');
var intro = "'use strict';\n/*jshint -W109 */\nangular.module('techRadarApp').constant('radarData', {\n title: '" + title + "',\n data: "; //jshint ignore:line
var end = '\n});';

var fileLocation = 'app/scripts/services/radarData.js';

fs.writeFile(fileLocation, intro + data + end, function(err) {
  if(err) {
    return console.log(err);
  }
  
  console.log('The file was saved at ' + fileLocation);
});