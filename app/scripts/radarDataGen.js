'use strict';

var typeToCategory = {
  'Node Installer': 'Tools',
  'Node Version': 'Platforms',
  'IDE / Editor': 'Tools',
  'Build System': 'Tools',
  'Javascript Enhancers': 'Languages & Frameworks',
  'Linter / Codestyle': 'Tools',
  'CSS Preprocessors': 'Languages & Frameworks',
  'Techniques': 'Techniques'
};

var allData = {
  'Build System': {
    'gulp': {category: 'Adopt', text: 'gulp is to grunt what gradle is to maven. You can programm your build in JavaScript instead of only declare how it should work. Furthermore it works with streams and is usually faster than grunt.'},
    'grunt': {category: 'Trial or Alternative', text: 'gulp is just the better alternative.'},
    'broccoli': {category: 'Hold', text: 'To new and experimental to consider right now. But maybe in the future.'}
  },
  'IDE / Editor': {
    'Webstorm': {category: 'Adopt', text: 'If you wan\'t to spend money for your IDE. Spend it here. It has the best Javascript support.'},
    'atom': {category: 'Assess', text: 'Interesting, but sadly still a bit unstable.'},
    'brackets': {category: 'Assess', text: 'Interesting'},
    'Sublime': {category: 'Trial or Alternative', text: 'If you like nagware. Your OK here. If you wan\'t to pay for software consider Webstorm. It\'s in a similar price range.'},
    'Eclipse': {category: 'Hold', text: 'Javasscript support is too bad right now. Coupled wit the slowness of Eclipse you\'re better off with a good editor.'}
  },
  'Node Version': {
    'v0.10': {category: 'Adopt', text: 'The proven version. Use it, it works.'},
    'v0.12': {category: 'Trial or Alternative', text: 'Brand new. There might still be some incompatablilities and bugs out there. It has a short lifespan because of the merger of nodejs and iojs'},
    'iojs': {category: 'Hold', text: 'If you already have it, stick with it until the new merged nodejs and iojs versions is out. Otherwise if you really want cutting each use v0.12.'}
  },
  'Javascript Enhancers': {
    'es6-babel': {category: 'Trial or Alternative', text: 'EcmaScript6 will be the next standard. So try it out.'},
    'es6-traceur': {category: 'Hold', text: 'Better use babel. It produces more readable code and implements more features of es6.'},
    'typescript': {category: 'Trial or Alternative', text: 'If you are missing types in Javascript, this is it. Otherwise give es6 a spin.'},
    'Coffescript': {category: 'Hold', text: 'Replaced by es6.'},
    'Google Dart': {category: 'Hold', text: 'Failed to gain traction until now.'}
  },
  'Linter / Codestyle': {
    'eslint': {category: 'Adopt', text: 'Has a plugin architecture to include linters for framework specific code. You can add your own ones. Also has codestyle checking ability. A slight performance penalty to jshint, since builds an AST.'},
    'jshint': {category: 'Trial or Alternative', text: 'Configurable version of jslint. It\'s good, but consider migrating to eslint.'},
    'jslint': {category: 'Hold', text: 'Not configurable. Just replace it.'},
    'jscs': {category: 'Assess', text: 'Only a style checker. Eslint might provide these features aswell.'}
  },
  'CSS Preprocessors': {
    'sass': {category: 'Adopt', text: 'Since to be more widespread knowadays than LESS.'},
    'LESS': {category: 'Trial or Alternative', text: 'If you have a css framework that uses it, then use it, otherwise sass seams to be more widespread.'},
    'stylus': {category: 'Hold', text: 'to exotic to be considered.'},
    'Plain CSS': {category: 'Hold', text: 'You really should use CSS preprocessor. Your gonna love it.'}
  },
  'Techniques': {
    'One-Click workspace setup': {category: 'Adopt', text: 'Good to add new project members or updating the stack.'},
    'Infrastructure as code': {category: 'Adopt', text: 'Reproducible system setup'},
    'Application containers': {category: 'Adopt', text: 'Independent artefacts. Reproducible deployments.'}
  },
  
};

var dataByStatus = [
  {
    label: 'Adopt',
    text: 'These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area.',
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []}
    ]
  },
  {
    label: 'Trial or Alternative',
    text: 'To be used in smallscale projects. Or technolgies that have a better alternative for most use cases.',
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []}
    ]
  },
  {
    label: 'Assess',
    text: 'Try these out.',
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []}
    ]
  },
  {
    label: 'Hold',
    text: 'Don\'t start with it now. Try to actively replace.',
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []}
    ]
  }
];


var _ = require('underscore'); //jshint ignore:line
var fs = require('fs');

_.each(allData, function(entries, type) {
  var category = typeToCategory[type];
  _.each(entries, function(data, tech) {
    var ring = _.findWhere(dataByStatus, {label: data.category});
    var slice = _.findWhere(ring.categories, {label: category});
    slice.technologies.push({label: tech, type: type, text: data.text});
  });
});


var data = JSON.stringify(dataByStatus, null, '  ');
var intro = "'use strict';\n/*jshint -W109 */\nangular.module('techRadarApp').constant('radarData',\n"; //jshint ignore:line
var end = '\n);';

var fileLocation = 'services/radarData.js';

fs.writeFile(fileLocation, intro + data + end, function(err) {
  if(err) {
    return console.log(err);
  }
  
  console.log('The file was saved at ' + fileLocation);
}); 