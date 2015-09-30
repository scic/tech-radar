'use strict';
/*jshint -W109 */
angular.module('techRadarApp').constant('radarData', {
 title: 'Javascript Technology Radar',
 data: [
  {
    "label": "Adopt",
    "text": "These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area.",
    "categories": [
      {
        "label": "Tools",
        "technologies": [
          {
            "label": "gulp",
            "type": "Build System",
            "text": "gulp is to grunt what gradle is to maven. You can program your build in JavaScript instead of only declaring how it should work. Furthermore it works with streams and is usually faster than grunt."
          },
          {
            "label": "Webstorm",
            "type": "IDE / Editor",
            "text": "If you wan't to spend money for your IDE, spend it here. It has the best Javascript support with refactoring and autocomplete features."
          },
          {
            "label": "eslint",
            "type": "Linter / Codestyle",
            "text": "Has a plugin architecture to include linters for framework specific code. E.g. for Angular or Ember. You can add your own ones. Also has codestyle checking ability. A slight performance penalty to jshint, since it builds an AST."
          },
          {
            "label": "npm",
            "type": "Package Managers",
            "text": "It's everywhere, just use it."
          },
          {
            "label": "bower",
            "type": "Package Managers",
            "text": "A frontend only package manager. Widly used and works without problems."
          },
          {
            "label": "browsersync",
            "type": "Live Reload",
            "text": "Supports reloading of frontend js files and injecting of css. Additionally supports the synching of page interactions over multiple browsers and devices."
          }
        ]
      },
      {
        "label": "Techniques",
        "technologies": [
          {
            "label": "One-Click workspace setup",
            "type": "Techniques",
            "text": "Good to add new project members or updating the stack."
          },
          {
            "label": "Infrastructure as code",
            "type": "Techniques",
            "text": "Reproducible system setup"
          },
          {
            "label": "Application containers",
            "type": "Techniques",
            "text": "Application containers such as docker provide a simple reproducible deployment method."
          }
        ]
      },
      {
        "label": "Platforms",
        "technologies": [
          {
            "label": "v4",
            "type": "Node Version",
            "text": "Brand new, but it is the future since iojs and node merged. Long term projects should stick with the LTS release (forthcomming)."
          }
        ]
      },
      {
        "label": "Languages & Frameworks",
        "technologies": [
          {
            "label": "es6-babel",
            "type": "Javascript Enhancers",
            "text": "EcmaScript2015 (EcmaScript6) is the current javascript standard. So try it out now."
          },
          {
            "label": "sass",
            "type": "CSS Preprocessors",
            "text": "Seams to be more widespread knowadays than LESS. Even bootstrap 4 is migration from LESS to sass."
          },
          {
            "label": "bootstrap",
            "type": "CSS Frameworks",
            "text": "Works well. Very widly used. Lots of good supporting components and extenstions."
          },
          {
            "label": "Angular 1",
            "type": "Frontend Frameworks",
            "text": "Huge community. Lots of documentation and modules"
          },
          {
            "label": "lodash",
            "type": "Functional Libraries",
            "text": "A lot of (functional) goodies for working with arrays, collections, objects. It has some extensions over underscore, is modularized, and more actively developed than underscore."
          }
        ]
      }
    ]
  },
  {
    "label": "Trial or Alternative",
    "text": "To be used in smallscale projects. Or technolgies that have a better alternative for most use cases.",
    "categories": [
      {
        "label": "Tools",
        "technologies": [
          {
            "label": "grunt",
            "type": "Build System",
            "text": "gulp is just the better alternative. If you already are on grunt there is no immediate reason to switch to gulp, just consider it. If you haven't started with grunt, use gulp."
          },
          {
            "label": "atom",
            "type": "IDE / Editor",
            "text": "Powerful editor, similar to sublime. Recommended as a free alternative."
          },
          {
            "label": "Sublime",
            "type": "IDE / Editor",
            "text": "You can use it for free, but it will nag you constantly. So if you don't mind it, your okay here. But I recommended atom instead. If you wan't to pay for software consider Webstorm. It's in a similar price range, but has more refactoring and autocomplete features."
          },
          {
            "label": "jshint",
            "type": "Linter / Codestyle",
            "text": "Configurable version of jslint. It's good, but consider migrating to eslint."
          },
          {
            "label": "livereload",
            "type": "Live Reload",
            "text": "Works good, but browsersync has more features."
          },
          {
            "label": "nodemon",
            "type": "Live Reload",
            "text": "Restart the node server on file changes. Watcher is known to be slow on windows."
          }
        ]
      },
      {
        "label": "Techniques",
        "technologies": []
      },
      {
        "label": "Platforms",
        "technologies": [
          {
            "label": "v0.10",
            "type": "Node Version",
            "text": "The proven version. Will still be supported until October 2016. So consider moving to v4."
          }
        ]
      },
      {
        "label": "Languages & Frameworks",
        "technologies": [
          {
            "label": "typescript",
            "type": "Javascript Enhancers",
            "text": "If you are missing types in Javascript, this is it. Otherwise give es6-babel a spin."
          },
          {
            "label": "LESS",
            "type": "CSS Preprocessors",
            "text": "If you have a css framework that uses it, then use it, otherwise sass seams to be more widespread."
          },
          {
            "label": "Ember",
            "type": "Frontend Frameworks",
            "text": "Good community. Good migration paths. Investigate it more."
          },
          {
            "label": "underscore",
            "type": "Functional Libraries",
            "text": "The base lodash was forked from. Still active, but consider switching to lodash."
          },
          {
            "label": "when",
            "type": "Promise Libraries",
            "text": "Covers a wide range of support for promises."
          }
        ]
      }
    ]
  },
  {
    "label": "Assess",
    "text": "Try these out.",
    "categories": [
      {
        "label": "Tools",
        "technologies": [
          {
            "label": "brackets",
            "type": "IDE / Editor",
            "text": "Interesting."
          },
          {
            "label": "Visual Studio Code",
            "type": "IDE / Editor",
            "text": "Gains traction. Could be interesting for people that don't mind products from microsoft."
          },
          {
            "label": "jscs",
            "type": "Linter / Codestyle",
            "text": "Only a style checker. Eslint might provide these features aswell."
          },
          {
            "label": "browserify",
            "type": "Package Managers",
            "text": "A frontend package manager. Uses npm modules and turns them into frontend modules. Has certain build steps included, which might interfere with your custom build."
          },
          {
            "label": "jspm",
            "type": "Package Managers",
            "text": "Interesting."
          },
          {
            "label": "webpack",
            "type": "Package Managers",
            "text": "jspm might do the same but better."
          }
        ]
      },
      {
        "label": "Techniques",
        "technologies": []
      },
      {
        "label": "Platforms",
        "technologies": []
      },
      {
        "label": "Languages & Frameworks",
        "technologies": [
          {
            "label": "ClojureScript",
            "type": "Javascript Enhancers",
            "text": "Intresting"
          },
          {
            "label": "foundation",
            "type": "CSS Frameworks",
            "text": "Looks interesting."
          },
          {
            "label": "iconic",
            "type": "CSS Frameworks",
            "text": "More mobile centric."
          },
          {
            "label": "Angular 2",
            "type": "Frontend Frameworks",
            "text": "Still in developer preview. Could be used for small prototypes. Best used with typescript (or babel). ng-upgrade should cover the migration from Angular 1 to 2."
          },
          {
            "label": "Aurelia",
            "type": "Frontend Frameworks",
            "text": "Interesting, but not wildly used right now."
          },
          {
            "label": "React",
            "type": "Frontend Frameworks",
            "text": "Fast rendering. Glimmer of Ember or the upcomming Angular 2 might be an alternative."
          },
          {
            "label": "Knockout",
            "type": "Frontend Frameworks",
            "text": "Angular, Ember, React seam to be more popular."
          },
          {
            "label": "lodash-fp",
            "type": "Functional Libraries",
            "text": "A wrapper for lodash to provide a function first syntax, which is truer to the functional style. Not very widespread."
          },
          {
            "label": "ramda",
            "type": "Functional Libraries",
            "text": "Has a function first syntax, which is truer to the functional style."
          },
          {
            "label": "trine",
            "type": "Functional Libraries",
            "text": "Depends on es6. Is very new."
          },
          {
            "label": "bluebird",
            "type": "Promise Libraries",
            "text": "Looks nice. Similar to when."
          },
          {
            "label": "async",
            "type": "Promise Libraries",
            "text": "Cleaner syntax but less mighty. Widespread use."
          }
        ]
      }
    ]
  },
  {
    "label": "Hold",
    "text": "Don't start with it now. Try to actively replace.",
    "categories": [
      {
        "label": "Tools",
        "technologies": [
          {
            "label": "broccoli",
            "type": "Build System",
            "text": "To new and experimental to consider right now. But maybe in the future. Angular 2 uses it."
          },
          {
            "label": "brunch",
            "type": "Build System",
            "text": "To exotic to consider."
          },
          {
            "label": "Eclipse",
            "type": "IDE / Editor",
            "text": "Javasscript support is too bad right now. Coupled wit the slowness of Eclipse you're better off with a good editor."
          },
          {
            "label": "jslint",
            "type": "Linter / Codestyle",
            "text": "Not configurable. Just replace it."
          }
        ]
      },
      {
        "label": "Techniques",
        "technologies": []
      },
      {
        "label": "Platforms",
        "technologies": [
          {
            "label": "v0.12",
            "type": "Node Version",
            "text": "Better just use node v4. Or stick with the still wildly used v0.10 for the moment."
          },
          {
            "label": "iojs",
            "type": "Node Version",
            "text": "You should migrate to node v4."
          }
        ]
      },
      {
        "label": "Languages & Frameworks",
        "technologies": [
          {
            "label": "es6-traceur",
            "type": "Javascript Enhancers",
            "text": "Better use babel. It produces more readable code and implements more features of es6."
          },
          {
            "label": "Coffescript",
            "type": "Javascript Enhancers",
            "text": "Replaced by es6."
          },
          {
            "label": "Google Dart",
            "type": "Javascript Enhancers",
            "text": "Failed to gain traction until now."
          },
          {
            "label": "stylus",
            "type": "CSS Preprocessors",
            "text": "To exotic to be considered."
          },
          {
            "label": "Plain CSS",
            "type": "CSS Preprocessors",
            "text": "You really should use a CSS preprocessor. You're gonna love it."
          }
        ]
      }
    ]
  }
]
});