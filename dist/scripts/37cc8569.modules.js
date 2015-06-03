!function(a,b,c){"use strict";function d(){function a(a,c){return b.extend(Object.create(a),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){var f=b.copy(e);if(b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0),b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch),d[a]=b.extend(f,a&&c(a,f)),a){var g="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[g]=b.extend({redirectTo:a},c(g,f))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(a){return"string"==typeof a&&(a={redirectTo:a}),this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(c,e,f,g,h,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i=e[f];h&&i&&(d[h.name]=i)}return d}function m(a){var d=t.current;q=o(),r=q&&d&&q.$$route===d.$$route&&b.equals(q.pathParams,d.pathParams)&&!q.reloadOnSearch&&!s,r||!d&&!q||c.$broadcast("$routeChangeStart",q,d).defaultPrevented&&a&&a.preventDefault()}function n(){var a=t.current,d=q;r?(a.params=d.params,b.copy(a.params,f),c.$broadcast("$routeUpdate",a)):(d||a)&&(s=!1,t.current=d,d&&d.redirectTo&&(b.isString(d.redirectTo)?e.path(p(d.redirectTo,d.params)).search(d.params).replace():e.url(d.redirectTo(d.pathParams,e.path(),e.search())).replace()),g.when(d).then(function(){if(d){var a,c,e=b.extend({},d.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a,null,null,c)}),b.isDefined(a=d.template)?b.isFunction(a)&&(a=a(d.params)):b.isDefined(c=d.templateUrl)&&(b.isFunction(c)&&(c=c(d.params)),c=k.getTrustedResourceUrl(c),b.isDefined(c)&&(d.loadedTemplateUrl=c,a=j(c))),b.isDefined(a)&&(e.$template=a),g.all(e)}}).then(function(e){d==t.current&&(d&&(d.locals=e,b.copy(d.params,f)),c.$broadcast("$routeChangeSuccess",d,a))},function(b){d==t.current&&c.$broadcast("$routeChangeError",d,a,b)}))}function o(){var c,f;return b.forEach(d,function(d,g){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function p(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var q,r,s=!1,t={routes:d,reload:function(){s=!0,c.$evalAsync(function(){m(),n()})},updateParams:function(a){if(!this.current||!this.current.$$route)throw i("norout","Tried updating route when with no current route");a=b.extend({},this.current.params,a),e.path(p(this.current.$$route.originalPath,a)),e.search(a)}};return c.$on("$locationChangeStart",m),c.$on("$locationChangeSuccess",n),t}]}function e(){this.$get=function(){return{}}}function f(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){n&&(d.cancel(n),n=null),l&&(l.$destroy(),l=null),m&&(n=d.leave(m),n.then(function(){n=null}),m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(b.isDefined(h)){var k=e.$new(),n=a.current,q=i(k,function(a){d.enter(a,null,m||f).then(function(){!b.isDefined(o)||o&&!e.$eval(o)||c()}),j()});m=q,l=n.scope=k,l.$emit("$viewContentLoaded"),l.$eval(p)}else j()}var l,m,n,o=g.autoscroll,p=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function g(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var h=b.module("ngRoute",["ng"]).provider("$route",d),i=b.$$minErr("ngRoute");h.provider("$routeParams",e),h.directive("ngView",f),h.directive("ngView",g),f.$inject=["$route","$anchorScroll","$animate"],g.$inject=["$compile","$controller","$route"]}(window,window.angular),function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&h.test("."+a)}function e(a,b){if(!d(b))throw g("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),f=0,h=e.length;h>f&&a!==c;f++){var i=e[f];a=null!==a?a[i]:c}return a}function f(a,c){c=c||{},b.forEach(c,function(a,b){delete c[b]});for(var d in a)!a.hasOwnProperty(d)||"$"===d.charAt(0)&&"$"===d.charAt(1)||(c[d]=a[d]);return c}var g=b.$$minErr("$resource"),h=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource",["ng"]).provider("$resource",function(){var a=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$q",function(d,h){function i(a){return j(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function j(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function k(b,c){this.template=b,this.defaults=o({},a.defaults,c),this.urlParams={}}function l(i,j,r,s){function t(a,b){var c={};return b=o({},j,b),n(b,function(b,d){q(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function u(a){return a.resource}function v(a){f(a||{},this)}var w=new k(i,s);return r=o({},a.defaults.actions,r),v.prototype.toJSON=function(){var a=o({},this);return delete a.$promise,delete a.$resolved,a},n(r,function(a,e){var i=/^(POST|PUT|PATCH)$/i.test(a.method);v[e]=function(j,k,l,r){var s,x,y,z={};switch(arguments.length){case 4:y=r,x=l;case 3:case 2:if(!q(k)){z=j,s=k,x=l;break}if(q(j)){x=j,y=k;break}x=k,y=l;case 1:q(j)?x=j:i?s=j:z=j;break;case 0:break;default:throw g("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var A=this instanceof v,B=A?s:a.isArray?[]:new v(s),C={},D=a.interceptor&&a.interceptor.response||u,E=a.interceptor&&a.interceptor.responseError||c;n(a,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(C[b]=p(a))}),i&&(C.data=s),w.setUrlParams(C,o({},t(s,a.params||{}),z),a.url);var F=d(C).then(function(c){var d=c.data,h=B.$promise;if(d){if(b.isArray(d)!==!!a.isArray)throw g("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",e,a.isArray?"array":"object",b.isArray(d)?"array":"object",C.method,C.url);a.isArray?(B.length=0,n(d,function(a){"object"==typeof a?B.push(new v(a)):B.push(a)})):(f(d,B),B.$promise=h)}return B.$resolved=!0,c.resource=B,c},function(a){return B.$resolved=!0,(y||m)(a),h.reject(a)});return F=F.then(function(a){var b=D(a);return(x||m)(b,a.headers),b},E),A?F:(B.$promise=F,B.$resolved=!1,B)},v.prototype["$"+e]=function(a,b,c){q(a)&&(c=b,b=a,a={});var d=v[e].call(this,a,this,b,c);return d.$promise||d}}),v.bind=function(a){return l(i,o({},j,a),r)},v}var m=b.noop,n=b.forEach,o=b.extend,p=b.copy,q=b.isFunction;return k.prototype={setUrlParams:function(a,c,d){var e,f,h=this,j=d||h.template,k=h.urlParams={};n(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw g("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},n(h.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:h.defaults[d],b.isDefined(e)&&null!==e?(f=i(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),function(a,b){return f+b})):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),h.defaults.stripTrailingSlashes&&(j=j.replace(/\/+$/,"")||"/"),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),n(c,function(b,c){h.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},l}]})}(window,window.angular),function(a,b,c){"use strict";function d(a,d,e){function f(a,e,f){var h,i;f=f||{},i=f.expires,h=b.isDefined(f.path)?f.path:g,e===c&&(i="Thu, 01 Jan 1970 00:00:00 GMT",e=""),b.isString(i)&&(i=new Date(i));var j=encodeURIComponent(a)+"="+encodeURIComponent(e);j+=h?";path="+h:"",j+=f.domain?";domain="+f.domain:"",j+=i?";expires="+i.toUTCString():"",j+=f.secure?";secure":"";var k=j.length+1;return k>4096&&d.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+k+" > 4096 bytes)!"),j}var g=e.baseHref(),h=a[0];return function(a,b,c){h.cookie=f(a,b,c)}}b.module("ngCookies",["ng"]).provider("$cookies",[function(){function a(a){return a?b.extend({},d,a):d}var d=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(d,e){return{get:function(a){return d()[a]},getObject:function(a){var c=this.get(a);return c?b.fromJson(c):c},getAll:function(){return d()},put:function(b,c,d){e(b,c,a(d))},putObject:function(a,c,d){this.put(a,b.toJson(c),d)},remove:function(b,d){e(b,c,a(d))}}}]}]),b.module("ngCookies").factory("$cookieStore",["$cookies",function(a){return{get:function(b){return a.getObject(b)},put:function(b,c){a.putObject(b,c)},remove:function(b){a.remove(b)}}}]),d.$inject=["$document","$log","$browser"],b.module("ngCookies").provider("$$cookieWriter",function(){this.$get=d})}(window,window.angular),function(a,b,c){"use strict";function d(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return g(b,j(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=j(c,b.noop);return d.chars(a),c.join("")}function f(a,c){var d,e={},f=a.split(",");for(d=0;d<f.length;d++)e[c?b.lowercase(f[d]):f[d]]=!0;return e}function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),z[d])for(;t.last()&&A[t.last()];)e("",t.last());y[d]&&t.last()==d&&e("",d),g=v[d]||!!g,g||t.push(d);var i={};f.replace(n,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=t.length-1;f>=0&&t[f]!=d;f--);if(f>=0){for(e=t.length-1;e>=f;e--)c.end&&c.end(t[e]);t.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,t=[],u=a;for(t.last=function(){return t[t.length-1]};a;){if(j="",g=!0,t.last()&&C[t.last()]?(a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+t.last()+"[^>]*>","i"),function(a,b){return b=b.replace(q,"$1").replace(s,"$1"),c.chars&&c.chars(h(b)),""}),e("",t.last())):(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),g=!1)):r.test(a)?(i=a.match(r),i&&(a=a.replace(i[0],""),g=!1)):p.test(a)?(i=a.match(m),i&&(a=a.substring(i[0].length),i[0].replace(m,e),g=!1)):o.test(a)&&(i=a.match(l),i?(i[4]&&(a=a.substring(i[0].length),i[0].replace(l,d)),g=!1):(j+="<",a=a.substring(1))),g&&(f=a.indexOf("<"),j+=0>f?a:a.substring(0,f),a=0>f?"":a.substring(f),c.chars&&c.chars(h(j)))),a==u)throw k("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function h(a){return a?(I.innerHTML=a.replace(/</g,"&lt;"),I.textContent):""}function i(a){return a.replace(/&/g,"&amp;").replace(t,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&C[a]&&(d=a),d||D[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),h="img"===a&&"src"===g||"background"===g;H[g]!==!0||E[g]===!0&&!c(d,h)||(e(" "),e(f),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||D[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var k=b.$$minErr("$sanitize"),l=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,m=/^<\/\s*([\w:-]+)[^>]*>/,n=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,o=/^</,p=/^<\//,q=/<!--(.*?)-->/g,r=/<!DOCTYPE([^>]*?)>/i,s=/<!\[CDATA\[(.*?)]]>/g,t=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^\#-~| |!])/g,v=f("area,br,col,hr,img,wbr"),w=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),x=f("rp,rt"),y=b.extend({},x,w),z=b.extend({},w,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),A=b.extend({},x,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),B=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),C=f("script,style"),D=b.extend({},v,z,A,y,B),E=f("background,cite,href,longdesc,src,usemap,xlink:href"),F=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),G=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),H=b.extend({},E,G,F),I=document.createElement("pre");b.module("ngSanitize",[]).provider("$sanitize",d),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);