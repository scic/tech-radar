'use strict';

angular.module('techRadarApp').factory('radarService', ['$log', '$timeout', 'localStorageWatcher',
  function($log, $timeout, localStorageWatcher) {

    var LOCAL_STORAGE_ID = 'sadc.technologyRadarData';

    function Radar(data) {
      this.data = data ? data : [
        {
          label: 'Adopt',
          text: 'Switch to these',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Trial',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Assess',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Hold',
          text: 'Don\'t start with it now. Try to replace.',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        }
      ];
    }

    Radar.prototype.getTechnologies = function() {
      var categories = _.pluck(this.data, 'categories');
      return _.flatten(_.pluck(_.flatten(categories), 'technologies'));
    };
    
    /*jshint -W109 */
    var myData = [{"label":"Adopt","text":"These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area.","categories":[{"label":"Tools","technologies":[{"label":"gulp","type":"Build System","text":"gulp is to grunt what gradle is to maven. You can programm your build in JavaScript instead of only declare how it should work. Furthermore it works with streams and is usually faster than grunt."},{"label":"Webstorm","type":"IDE / Editor","text":"If you wan't to spend money for your IDE. Spend it here. It has the best Javascript support."},{"label":"eslint","type":"Linter / Codestyle","text":"Has a plugin architecture to include linters for framework specific code. You can add your own ones. Also has codestyle checking ability. A slight performance penalty to jshint, since builds an AST."}]},{"label":"Techniques","technologies":[{"label":"One-Click workspace setup","type":"Techniques","text":"Good to add new project members or updating the stack."},{"label":"Infrastructure as code","type":"Techniques","text":"Reproducible system setup"},{"label":"Application containers","type":"Techniques","text":"Independent artefacts. Reproducible deployments."}]},{"label":"Platforms","technologies":[{"label":"v0.10","type":"Node Version","text":"The proven version. Use it, it works."}]},{"label":"Languages & Frameworks","technologies":[{"label":"sass","type":"CSS Preprocessors","text":"Since to be more widespread knowadays than LESS."}]}]},{"label":"Trial or Alternative","text":"To be used in smallscale projects. Or technolgies that have a better alternative for most use cases.","categories":[{"label":"Tools","technologies":[{"label":"Sublime","type":"IDE / Editor","text":"If you like nagware. Your OK here. If you wan't to pay for software consider Webstorm. It's in a similar price range."},{"label":"jshint","type":"Linter / Codestyle","text":"Configurable version of jslint. It's good, but consider migrating to eslint."}]},{"label":"Techniques","technologies":[]},{"label":"Platforms","technologies":[{"label":"v0.12","type":"Node Version","text":"Brand new. There might still be some incompatablilities and bugs out there. It has a short lifespan because of the merger of nodejs and iojs"}]},{"label":"Languages & Frameworks","technologies":[{"label":"es6-babel","type":"Javascript Enhancers","text":"EcmaScript6 will be the next standard. So try it out."},{"label":"typescript","type":"Javascript Enhancers","text":"If you are missing types in Javascript, this is it. Otherwise give es6 a spin."},{"label":"LESS","type":"CSS Preprocessors","text":"If you have a css framework that uses it, then use it, otherwise sass seams to be more widespread."}]}]},{"label":"Assess","text":"Try these out.","categories":[{"label":"Tools","technologies":[{"label":"atom","type":"IDE / Editor","text":"Interesting, but sadly still a bit unstable."},{"label":"brackets","type":"IDE / Editor","text":"Interesting"},{"label":"jscs","type":"Linter / Codestyle","text":"Only a style checker. Eslint might provide these features aswell."}]},{"label":"Techniques","technologies":[]},{"label":"Platforms","technologies":[]},{"label":"Languages & Frameworks","technologies":[]}]},{"label":"Hold","text":"Don't start with it now. Try to actively replace.","categories":[{"label":"Tools","technologies":[{"label":"grunt","type":"Build System","text":"gulp is just the better alternative."},{"label":"broccoli","type":"Build System","text":"To new and experimental to consider right now. But maybe in the future."},{"label":"Eclipse","type":"IDE / Editor","text":"Javasscript support is too bad right now. Coupled wit the slowness of Eclipse you're better off with a good editor."},{"label":"jslint","type":"Linter / Codestyle","text":"Not configurable. Just replace it."}]},{"label":"Techniques","technologies":[]},{"label":"Platforms","technologies":[{"label":"iojs","type":"Node Version","text":"If you already have it, stick with it until the new merged nodejs and iojs versions is out. Otherwise if you really want cutting each use v0.12."}]},{"label":"Languages & Frameworks","technologies":[{"label":"es6-traceur","type":"Javascript Enhancers","text":"Better use babel. It produces more readable code and implements more features of es6."},{"label":"Coffescript","type":"Javascript Enhancers","text":"Replaced by es6."},{"label":"Google Dart","type":"Javascript Enhancers","text":"Failed to gain traction until now."},{"label":"stylus","type":"CSS Preprocessors","text":"to exotic to be considered."},{"label":"Plain CSS","type":"CSS Preprocessors","text":"You really should use CSS preprocessor. Your gonna love it."}]}]}];
    /*jshint +W109 */

    var radarData = localStorageWatcher.syncWithLocalStorage(LOCAL_STORAGE_ID, myData);

    var radar = new Radar(radarData);

    function getCategories() {
      var categories = _.pluck(radar.data, 'categories');
      return _.pluck(categories, 'label');
    }

    function getStatuses() {
      return _.pluck(radar.data, 'label');
    }

    return { radar: radar, categories: getCategories(), statuses: getStatuses() };
  }]);