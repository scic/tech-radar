"use strict";angular.module("techRadarApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("techRadarApp").value("localStorage",window.localStorage),angular.module("techRadarApp").factory("localStorageWatcher",["$log","$rootScope","localStorage",function(a,b,c){var d;return d=function(a,d){var e,f,g;return e=d?d:{},g=c[a],f=g?JSON.parse(g):e,b.$watch(function(){return f},function(){return c[a]=JSON.stringify(f),c[a]},!0),f},{syncWithLocalStorage:d}}]);var javascriptRadar={title:"Javascript Technology Radar",categories:["Tools","Techniques","Platforms & Languages","Frameworks & Libraries"],statusDefinitions:[{label:"Adopt",text:"These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area."},{label:"Trial or Alternative",text:"To be used in smallscale projects. Or technolgies that have a better alternative for most use cases."},{label:"Assess",text:"Try these out."},{label:"Hold",text:"Don't start with it now. Try to actively replace."}],typeToCategory:{"Node Version":"Platforms & Languages","Node Installer":"Tools","IDE / Editor":"Tools","Build System":"Tools","Linter / Codestyle":"Tools","Javascript Enhancers":"Platforms & Languages","CSS Preprocessors":"Platforms & Languages","CSS Frameworks":"Frameworks & Libraries","Frontend Frameworks":"Frameworks & Libraries","Server Frameworks":"Frameworks & Libraries","Functional Libraries":"Frameworks & Libraries","Promise Libraries":"Frameworks & Libraries","Server Logging Libraries":"Frameworks & Libraries","Database Libraries":"Frameworks & Libraries","Package Managers":"Tools","Live Reload":"Tools",Techniques:"Techniques"},data:{"Build System":{gulp:{category:"Adopt",text:"gulp is to grunt what gradle is to maven. You can program your build in JavaScript instead of only declaring how it should work. Furthermore it works with streams and is usually faster than grunt."},grunt:{category:"Trial or Alternative",text:"gulp is just the better alternative. If you already are on grunt there is no immediate reason to switch to gulp, just consider it. If you haven't started with grunt, use gulp."},broccoli:{category:"Hold",text:"To new and experimental to consider right now. But maybe in the future. Angular 2 uses it."},brunch:{category:"Hold",text:"To exotic to consider."}},"IDE / Editor":{Webstorm:{category:"Adopt",text:"If you wan't to spend money for your IDE, spend it here. It has the best Javascript support with refactoring and autocomplete features."},atom:{category:"Trial or Alternative",text:"Powerful editor, similar to sublime. Recommended as a free alternative."},brackets:{category:"Assess",text:"Interesting."},Sublime:{category:"Trial or Alternative",text:"You can use it for free, but it will nag you constantly. So if you don't mind it, your okay here. But I recommended atom instead. If you wan't to pay for software consider Webstorm. It's in a similar price range, but has more refactoring and autocomplete features."},Eclipse:{category:"Hold",text:"Javasscript support is too bad right now. Coupled wit the slowness of Eclipse you're better off with a good editor."},"Visual Studio Code":{category:"Assess",text:"Gains traction. Could be interesting for people that don't mind products from microsoft."}},"Node Version":{"Node.js v5":{category:"Trial or Alternative",text:"This is a stable release but incooperates the latest changes. New versions are released very often. Use it only for prototypes, short-lived projects, or when you need the additional features it provides."},"Node.js v4":{category:"Adopt",text:"This is the current LTS release. It will be maintainted until 2018. This realease merges iojs and Node.js again. Long term projects should stick with this release."},"Node.js v0.10":{category:"Hold",text:"You should slowly begin migrating to Nodejs v4 LTS. The upgrade should not be very work intensive. 0.10 will still be supported until October 2016."},"Node.js v0.12":{category:"Hold",text:"Better just use node v4. I can't think of a reason not to upgrade."},"io.js":{category:"Hold",text:"You should migrate to node v4."}},"Javascript Enhancers":{"es6-babel":{category:"Adopt",text:"EcmaScript2015 (EcmaScript6) is the current javascript standard. So try it out now."},"es6-traceur":{category:"Hold",text:"Better use babel. It produces more readable code and implements more features of es6."},"es6 native":{category:"Trial or Alternative",text:"EcmaScript2015 is supported to some extend by new Node.js versions. On the server side at least Node.js v4 is recommended. Sadly on the client side you can not force people to use new browser. So you need babel there. Thus you might want babel in the server aswell to support the same feature set of es6."},typescript:{category:"Trial or Alternative",text:"If you are missing types in Javascript, this is it. Otherwise give es6-babel a spin."},ClojureScript:{category:"Assess",text:"Intresting"},Coffescript:{category:"Hold",text:"Replaced by es6."},"Google Dart":{category:"Hold",text:"Failed to gain traction until now. Only supported by one company."}},"Linter / Codestyle":{eslint:{category:"Adopt",text:"Has a plugin architecture to include linters for framework specific code. E.g. for Angular or Ember. You can add your own ones. Also has codestyle checking ability. A slight performance penalty to jshint, since it builds an AST."},jshint:{category:"Trial or Alternative",text:"Configurable version of jslint. It's good, but consider migrating to eslint."},jslint:{category:"Hold",text:"Not configurable. Just replace it."},jscs:{category:"Assess",text:"Only a style checker. Eslint might provide these features aswell."}},"CSS Preprocessors":{sass:{category:"Adopt",text:"Seams to be more widespread knowadays than LESS. Even bootstrap 4 is migration from LESS to sass."},LESS:{category:"Trial or Alternative",text:"If you have a css framework that uses it, then use it, otherwise sass seams to be more widespread."},stylus:{category:"Hold",text:"To exotic to be considered."},"Plain CSS":{category:"Hold",text:"You really should use a CSS preprocessor. You're gonna love it."}},"CSS Frameworks":{bootstrap:{category:"Adopt",text:"Works well. Very widly used. Lots of good supporting components and extenstions."},foundation:{category:"Assess",text:"Looks interesting."},iconic:{category:"Assess",text:"More mobile centric."}},"Package Managers":{"npm v3":{category:"Trial or Alternative",text:"It is still very new, but provides some advantages like a flat directory structure."},"npm v2":{category:"Adopt",text:"Is bundled with Node.js v4 LTS. It is very stable and currently widly used."},"npm v1":{category:"Hold",text:"v2 has more features and more stable. Usage will go down quickly."},bower:{category:"Adopt",text:"A frontend only package manager. Widly used and works without problems."},browserify:{category:"Assess",text:"A frontend package manager. Uses npm modules and turns them into frontend modules. Has certain build steps included, which might interfere with your custom build."},jspm:{category:"Assess",text:"Interesting."},webpack:{category:"Assess",text:"jspm might do the same but better."}},"Frontend Frameworks":{"Angular 1":{category:"Adopt",text:"Huge community. Lots of documentation and modules"},"Angular 2":{category:"Assess",text:"Still in developer preview. Could be used for small prototypes. Best used with typescript (or babel). ng-upgrade should cover the migration from Angular 1 to 2."},Ember:{category:"Trial or Alternative",text:"Good community. Good migration paths. Investigate it more."},Aurelia:{category:"Assess",text:"Interesting, but not wildly used right now."},React:{category:"Assess",text:"Fast rendering. Glimmer of Ember or the upcomming Angular 2 might be an alternative."},Knockout:{category:"Assess",text:"Angular, Ember, React seam to be more popular."}},"Server Frameworks":{Express:{category:"Adopt",text:"The nodejs web framework. Heavily used and feature rich."},Restify:{category:"Assess",text:"Can only be used to build Rest-Apis on nodejs. But if only this functionality is required, it might be viable."}},"Live Reload":{browsersync:{category:"Adopt",text:"Supports reloading of frontend js files and injecting of css. Additionally supports the synching of page interactions over multiple browsers and devices."},livereload:{category:"Trial or Alternative",text:"Works good, but browsersync has more features."},nodemon:{category:"Trial or Alternative",text:"Restart the node server on file changes. Watcher is known to be slow on windows."}},"Functional Libraries":{lodash:{category:"Adopt",text:"A lot of (functional) goodies for working with arrays, collections, objects. It has some extensions over underscore, is modularized, and more actively developed than underscore."},underscore:{category:"Trial or Alternative",text:"The base lodash was forked from. Still active, but consider switching to lodash."},"lodash-fp":{category:"Assess",text:"A wrapper for lodash to provide a function first syntax, which is truer to the functional style. Not very widespread."},ramda:{category:"Assess",text:"Has a function first syntax, which is truer to the functional style."},trine:{category:"Assess",text:"Depends on es6. Is very new."}},"Promise Libraries":{when:{category:"Trial or Alternative",text:"Covers a wide range of support for promises."},bluebird:{category:"Assess",text:"Looks nice. Similar to when."},async:{category:"Assess",text:"Cleaner syntax but less mighty. Widespread use."},"es6-promise":{category:"Assess",text:"Polyfills es6 promises. But has no additional promise handling functionality."},"RSVP.js":{category:"Assess",text:"A small promise library."}},"Server Logging Libraries":{winston:{category:"Adopt",text:"Supports different log formats, transports/streams/sinks, custom log levels, string interpolation."},morgan:{category:"Adopt",text:"Logs each request of express."},bunyan:{category:"Assess",text:"Json Logger. TODO assess"},Log4js:{category:"Assess",text:"Some use it. TODO assess."}},"Database Libraries":{mongoose:{category:"Adopt",text:"The most widly used way to interact with mongodb in Node.js."},"bookshelf.js":{category:"Assess",text:"An orm mapper fr sql."}},Techniques:{"One-Click workspace setup":{category:"Adopt",text:"Good to add new project members or updating the stack."},"Infrastructure as code":{category:"Adopt",text:"Reproducible system setup and scalable system setup. E.g. setup Integration, Test, and Poduction Systems fast and ensure their the same."},"Application containers":{category:"Adopt",text:"Application containers such as docker provide a simple reproducible deployment method."},"Component structure":{category:"Adopt",text:"Everthing that belongs to a component should be at the same location. E.g. html, js, css, routes, configuration."},Callbacks:{category:"Hold",text:"Use Promises they are much easier to process, chain and group."}}}},javaRadar={title:"Java Technology Radar",categories:["Tools","Techniques","Platforms & Languages","Frameworks & Libraries"],statusDefinitions:[{label:"Adopt",text:"These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area."},{label:"Trial or Alternative",text:"To be used in smallscale projects. Or technolgies that have a better alternative for most use cases."},{label:"Assess",text:"Try these out."},{label:"Hold",text:"Don't start with it now. Try to actively replace."}],typeToCategory:{"Java Version":"Platforms & Languages","Application Server":"Platforms & Languages","Util Library":"Frameworks & Libraries"},data:{"Java Version":{"Java 8":{category:"Adopt",text:"It's got lamdas."},"Java 6":{category:"Hold",text:"So old."}},"Util Library":{Lombok:{category:"Adopt",text:"Cool."},Guava:{category:"Trial or Alternative",text:"Hmm. Still needed with java 8?"}},"Application Server":{"Wildfly 8":{category:"Adopt",text:"Simply the best."},Glassfish:{category:"Hold",text:"Deprecated"}}}},transform=function(a){var b=a.statusDefinitions.map(function(b){return b.categories=a.categories.map(function(a){return{label:a,technologies:[]}}),b});return _.each(a.data,function(c,d){var e=a.typeToCategory[d];_.each(c,function(a,c){var f=_.findWhere(b,{label:a.category}),g=_.findWhere(f.categories,{label:e});g.technologies.push({label:c,type:d,text:a.text})})}),{title:a.title,data:b}};angular.module("techRadarApp").constant("radarData",[transform(javascriptRadar),transform(javaRadar)]),angular.module("techRadarApp").factory("radarService",["radarData",function(a){function b(a,b){this.title=a||"Technology Radar",this.data=b?b:[{label:"Adopt",text:"Switch to these",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Trial",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Assess",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]},{label:"Hold",text:"Don't start with it now. Try to replace.",categories:[{label:"Tools",technologies:[]},{label:"Techniques",technologies:[]},{label:"Platforms",technologies:[]},{label:"Languages & Frameworks",technologies:[]}]}],b.forEach(function(a){var b=_.flatten(_.pluck(_.flatten(a.categories),"technologies"));b.forEach(function(b){b.status=a.label})}),this.allCategories=_.flatten(_.pluck(b,"categories")),this.allTechnologies=_.flatten(_.pluck(this.allCategories,"technologies"))}function c(){var a=_.flatten(_.pluck(f.data,"categories"));return _.uniq(_.pluck(a,"label"))}function d(){return _.pluck(f.data,"label")}b.prototype.getTechnologies=function(){return this.allTechnologies},b.prototype.getCategories=function(){return this.allCategories},b.prototype.getTechnologiesOfSameType=function(a){return _.where(this.allTechnologies,{type:a.type})};var e=a[0],f=new b(e.title,e.data),g=_.pluck(a,"title"),h=function(c){var d=_.findWhere(a,{title:c});return f=new b(d.title,d.data)};return{getRadar:function(){return f},radarDescriptions:g,selectedRadarTitle:f.title,selectRadar:h,categories:c(),statuses:d()}}]),angular.module("techRadarApp").controller("MainCtrl",["$scope","$anchorScroll","$location","$timeout","radarService",function(a,b,c,d,e){a.setActive=function(b){_.each(a.radarData,function(a){a.active=!1}),b.active=!0},a.$on("tech-selected",function(b,c){a.activeTechnology=c,a.technologiesOfSameType=f.getTechnologiesOfSameType(c),a.setActive(a.activeStatus),$('.nav-tabs li a[data-label="'+a.activeStatus.label+'"]').tab("show")});var f,g=function(b){f=b,a.title=f.title,a.radarData=f.data,a.technologiesByType=_.groupBy(f.getTechnologies(),"type"),a.setActive(a.radarData[0])};g(e.getRadar()),a.rendered=!0,a.selectedRadar=e.selectedRadarTitle,a.radarDescriptions=e.radarDescriptions,a.selectTech=function(b){var c=function(a){a.clicked=!1,a.active=!1,a.highlight=!1};f.getCategories().forEach(c),f.getTechnologies().forEach(c);var d=_.find(f.getCategories(),function(a){return _.indexOf(a.technologies,b)>=0});d.active=!0,b.clicked=!0,b.active=!0,a.activeTechnology=b,f.getTechnologiesOfSameType(b).forEach(function(a){a.highlight=!0}),h(a.radarData),a.technologiesOfSameType=f.getTechnologiesOfSameType(b)};var h=function(b){if(b){var c=_.findWhere(_.flatten(_.pluck(b,"categories")),{active:!0}),d=_.find(b,function(b){return _.indexOf(b.categories,a.activeCategory)>=0});c&&(a.activeCategory=c),d&&(a.activeStatus=d)}};a.$watch("radarData",h,!0),a.$watch("selectedRadar",function(){f=e.selectRadar(a.selectedRadar),g(f),a.rendered=!1,d(function(){a.rendered=!0})}),a.scrollTo=function(a){return a?void b(a):void $("html").scrollTop(0)}}]),angular.module("techRadarApp").directive("radarDiagram",["$log","radarService",function(a,b){return{restrict:"E",templateUrl:"views/radar.html",replace:!0,link:function(c,d,e){function f(a,b,c){function d(a,b){var c=(Math.PI*Math.pow(a,2)*Math.pow(e,2)-b)/Math.PI;return c>0?Math.sqrt(c):0}for(var e=1,f=Math.PI*Math.pow(a,2),g=f/b,h=b-1,i=a;h-- >c;)i=d(i,g);return Math.max(0,d(i,g))}function g(a){var c=.15*s,d=.045*s,e=!1;return _.each(b.getRadar().getTechnologies(),function(b){a!==b&&a.x&&a.y&&b.x&&b.y&&Math.abs(a.x-b.x)<c&&Math.abs(a.y-b.y)<d&&(e=!0)}),e}function h(a,b){var c=a.innerRadius+F,d=a.outerRadius-F,e=Math.random()*(d-c)+c,f=Math.atan(F/e),g=a.startAngle+f,h=a.endAngle-f,i=Math.random()*(h-g)+g;b.x=e*Math.cos(i-Math.PI/2),b.y=e*Math.sin(i-Math.PI/2)}function i(a){return a.length<=L?a:a.substring(0,L-1)+"..."}function j(){I=K.selectAll("g").data(function(a){return a.technologies},function(a){return a.label}),a.info("Redrawing");var d=I.enter().append("g").attr("class","tech-label").on("mouseover",function(a){a.active=!0,m()}).on("mouseout",function(a){a.clicked||(a.active=!1,m())}).on("click",function(a){var d=!a.clicked;d3.selectAll(".tech-label").each(function(a){a.active=!1,a.clicked=!1,a.highlight=!1}),a.active=d,a.clicked=d,b.getRadar().getTechnologiesOfSameType(a).forEach(function(a){a.highlight=d}),c.$broadcast("tech-selected",a),m()});d.append("text").datum(function(a){for(var b=d3.select(this.parentNode.parentNode).datum();!a.x||!a.y||g(a);)h(b.arc,a);return a}).text(function(a){return i(a.label)}).attr("x",function(a){return a.x+D+5}).attr("y",function(a){return a.y+3.5}),d.append("circle").attr("r",D).style("stroke","grey").style("fill","whitesmoke").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}),I.exit().remove(),m(!0)}function k(a,b){return function(c){return 0===c?i(a):a.substring(0,Math.round((a.length-b)*c)+b)}}function l(a,b){return function(c){var d=c*(a.length-b);return 1===c?i(a):a.substring(0,a.length-d)}}function m(a){a||c.$apply(),I.each(function(a){d3.select(this).classed("active",a.active),d3.select(this).classed("highlight",a.highlight)}),I.selectAll("text").transition().duration(150).tween("text",function(a){var b=a.active?k:l,c=b(a.label,Math.min(this.textContent.length,L));return c(1)!==this.textContent?function(a){this.textContent=c(a)}:void 0}),I.selectAll("circle").transition().duration(500).attr("r",function(a){return a.active?E:a.radius?a.radius:D})}var n=b.categories.length,o=[];_(n).times(function(){o.push(100/n)});var p=e.width,q=e.height,r=30,s=Math.min(e.width,e.height)/2-r,t=d3.scale.category20c().domain(_.range(20)),u=d3.scale.category20c().copy(),v=_.groupBy(t.range(),function(a,b){return Math.floor(b/4)});u.range(_.flatten(_.map(v,function(a){var b=[];return _.each(a,function(a,c,d){b.push(a),c<d.length-1&&b.push(d3.interpolateRgb(a,d[c+1])(.5))}),b}))),u.domain(_.range(35));var w=d3.layout.pie().sort(null),x=w(o),y=_.object(_.zip(b.categories,x)),z=d3.svg.arc(),A=d3.select(d[0]).append("svg").attr("width",p).attr("height",q),B=A.append("g").attr("transform","translate("+(p/2-r)+","+(q/2-r)+")"),C=A.append("g").attr("transform","translate("+(p/2-r)+","+(q/2-r)+")"),D=5,E=7,F=10,G=B.selectAll("g").data(b.getRadar().data).enter().append("g").attr("class","ring"),H=G.selectAll("path").data(function(a){return a.categories}).enter().append("g").attr("class","slice");H.append("path").attr("fill",function(a,b,c){return u(7*b+c+3)}).attr("stroke","grey").attr("stroke-width","1px").attr("stroke-opacity",".25").datum(function(a,c,d){var e=_.size(b.statuses);return a.arc={innerRadius:f(s,e,d),outerRadius:d===e-1?s:f(s,e,d+1)},_.extend(a.arc,y[a.label]),a}).attr("d",function(a){return z.innerRadius(a.arc.innerRadius).outerRadius(a.arc.outerRadius)(a.arc)}).on("mouseover",function(a){a.active=!0,m()}).on("mouseout",function(a){a.active=!1,m()});var I,J=C.selectAll("g").data(b.getRadar().data).enter().append("g").attr("class","tech"),K=J.selectAll("g").data(function(a){return a.categories}).enter().append("g").datum(function(a,b){return a.color=u(7*b+6),a}).attr("class","category"),L=14;c.radarData=b.getRadar().data,c.$watch("radarData",function(){j()},!0),j()}}}]);