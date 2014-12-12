this["Perf"]&&void 0!==this["Perf"].enabled||(function(window){'use strict';/*
 Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
 Copyright (c) 2012, Log-Normal, Inc.  All rights reserved.
 Copyright (c) 2013, SOASTA, Inc. All rights reserved.
 Copyright (c) 2013, Salesforce.com. All rights reserved.
 Copyrights licensed under the BSD License. See the accompanying LICENSE.txt file for terms.
*/
var e=(new Date).getTime(),n;
(function(b){var g;b.parent!==b&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(b=b.parent,g=document.getElementById("boomr-if-as").src);var a=b.document,d=b.perfOptions||{},f={m:!1,$:!1,B:{page_ready:[],page_unload:[],dom_loaded:[],onLoad:[],visibility_changed:[],before_beacon:[],xhr_load:[],click:[],form_submit:[]},g:{},A:{},wa:function(a){var c;a||(a=b.event);a.target?c=a.target:a.srcElement&&(c=a.srcElement);!c||"OBJECT"===c.nodeName.toUpperCase()&&
"application/x-shockwave-flash"===c.type||(3===c.nodeType&&(c=c.parentNode),f.fireEvent("click",c))},xa:function(a){var c;a||(a=b.event);a.target?c=a.target:a.srcElement&&(c=a.srcElement);3===c.nodeType&&(c=c.parentNode);f.fireEvent("form_submit",c)},fireEvent:function(a,c){var b,d,l;if(!f.B.hasOwnProperty(a))return!1;l=f.B[a];for(b=0;b<l.length;b++)d=l[b],d[0].call(d[2],c,d[1]);return!0},bu:"",bt:"AUTO"};f.sd=b.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase();f.uip="";f.sqs=
!1;var c={P:"bu",Fa:"bt",G:"sd",Ja:"uip",ma:"sqs",n:null,h:e,url:g,ia:null,plugins:{},version:"1.0.4",window:b,b:{t:function(a,c){var f=[],b;if(!a||"object"!==typeof a)return a;void 0===c&&(c="\n\t");for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&f.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]));return f.join(c)},J:function(c){if(!c)return null;c=" "+c+"=";var f,b;b=" "+a.cookie+";";return 0<=(f=b.indexOf(c))?(f+=c.length,b=b.substring(f,b.indexOf(";",f))):null},setCookie:function(h,
b,d){var k,l,g;if(!h||!f[c.G])return c.debug("No cookie name or site domain: "+h+"/"+f[c.G]),!1;b=c.b.t(b,"&");k=h+"="+b;l=[k,"path=/","domain="+f[c.G]];d&&(g=new Date,g.setTime(g.getTime()+1E3*d),g=g.toGMTString(),l.push("expires="+g));if(500>k.length){a.cookie=l.join("; ");h=c.b.J(h);if(b===h)return!0;c.warn("Saved cookie value doesn't match what we tried to set:\n"+b+"\n"+h)}else c.warn("Cookie too long: "+k.length+" "+k);return!1},W:function(a){var f,b,d,l=!1,g={};if(!a)return null;if("string"!==
typeof a)return c.debug("TypeError: cookie is not a string: "+typeof a),null;a=a.split("&");f=0;for(b=a.length;f<b;f++)d=a[f].split("="),d[0]&&(d.push(""),g[decodeURIComponent(d[0])]=decodeURIComponent(d[1]),l=!0);return l?g:null},Aa:function(a){return c.b.setCookie(a,{},-86400)},I:function(a){return f[c.ma]&&a?a.replace(/\?.*/,"?qs-redacted"):a},K:function(a,f){if(!a)return a;f&&(a=a.replace(/#.*/,""));return c.b.la?a.replace(/\?([^#]*)/,function(a,f){return"?"+(10<f.length?c.b.la(f):f)}):a},za:function(a,
c,f,b){var d,g=0;if(!c||!c[f])return!1;for(d=0;d<b.length;d++)void 0!==c[f][b[d]]&&(a[b[d]]=c[f][b[d]],g++);return 0<g},addListener:function(a,c,f){a.addEventListener?a.addEventListener(c,f,!1):a.attachEvent("on"+c,f)},removeListener:function(a,c,f){a.removeEventListener?a.removeEventListener(c,f,!1):a.detachEvent("on"+c,f)},da:function(a,f,b){var d,g,s=0;for(d in f)if(f.hasOwnProperty(d))if("[object Array]"===Object.prototype.toString.call(f[d]))for(g=0;g<f[d].length;++g)s+=c.b.da(a,f[d][g],d+"["+
g+"]");else++s,a.push(encodeURIComponent(b?b+"["+d+"]":d)+"="+(void 0===f[d]||null===f[d]?"":encodeURIComponent(f[d])));return s},ca:function(a){var b=document.createElement("iframe"),d=document.createElement("form"),g=document.createElement("input");b.name="boomerang_post";b.style.display=d.style.display="none";d.method="POST";d.action=f[c.P];d.target=b.name;g.name="data";window.JSON?(d.enctype="text/plain",g.value=JSON.stringify(f.g)):(d.enctype="application/x-www-form-urlencoded",g.value=a);document.body.appendChild(b);
d.appendChild(g);document.body.appendChild(d);c.b.addListener(b,"load",function(){document.body.removeChild(d);document.body.removeChild(b)});d.submit()}},l:function(h){var d,g,k=["bu","bt","sd","uip","sqs"];h||(h={});for(d=0;d<k.length;d++)void 0!==h[k[d]]&&(f[k[d]]=h[k[d]]);void 0!==h.log&&(c.log=h.log);c.log||(c.log=function(){});for(g in c.plugins)c.plugins.hasOwnProperty(g)&&(h[g]&&h[g].hasOwnProperty("enabled")&&!1===h[g].enabled?f.A[g]=1:(f.A[g]&&delete f.A[g],"function"===typeof c.plugins[g].l&&
c.plugins[g].l(h)));if(f.$)return c;f.m||void 0!==h.T&&!1===h.T||(a.readyState&&"complete"===a.readyState?c.setImmediate(c.D,null,null,c):b.onpagehide||null===b.onpagehide?c.b.addListener(b,"pageshow",c.D):c.b.addListener(b,"load",c.D));c.b.addListener(b,"DOMContentLoaded",function(){f.fireEvent("dom_loaded")});(function(){var h,d;h=function(){f.fireEvent("visibility_changed")};a.webkitVisibilityState?c.b.addListener(a,"webkitvisibilitychange",h):a.msVisibilityState?c.b.addListener(a,"msvisibilitychange",
h):a.visibilityState&&c.b.addListener(a,"visibilitychange",h);c.b.addListener(a,"mouseup",f.wa);h=a.getElementsByTagName("form");for(d=0;d<h.length;d++)c.b.addListener(h[d],"submit",f.xa);b.onpagehide||null===b.onpagehide||c.b.addListener(b,"unload",function(){delete c.window})})();f.$=!0;return c},D:function(a){a||(a=b.event);a||(a={name:"load"});if(f.m)return c;f.fireEvent("page_ready",a);f.m=!0;return c},setImmediate:function(a,c,f,d){function g(){a.call(d||null,c,f||{});g=null}b.setImmediate?
b.setImmediate(g):b.msSetImmediate?b.msSetImmediate(g):b.webkitSetImmediate?b.webkitSetImmediate(g):b.mozSetImmediate?b.mozSetImmediate(g):setTimeout(g,10)},subscribe:function(a,d,g,k){var l,s,u;if(!f.B.hasOwnProperty(a))return c;u=f.B[a];for(l=0;l<u.length;l++)if(s=u[l],s[0]===d&&s[1]===g&&s[2]===k)return c;u.push([d,g||{},k||null]);"page_ready"===a&&f.m&&c.setImmediate(d,null,g,k);"page_unload"===a&&(a=function(a){d&&d.call(k,a||b.event,g)},b.onpagehide||null===b.onpagehide?c.b.addListener(b,"pagehide",
a):c.b.addListener(b,"unload",a),c.b.addListener(b,"beforeunload",a));return c},d:function(a,b){if("string"===typeof a)f.g[a]=b;else if("object"===typeof a)for(var d in a)a.hasOwnProperty(d)&&(f.g[d]=a[d]);return c},ea:function(a){var b,d;if(!arguments.length)return c;d=1===arguments.length&&"[object Array]"===Object.prototype.toString.apply(a)?a:arguments;for(b=0;b<d.length;b++)f.g.hasOwnProperty(d[b])&&delete f.g[d[b]];return c},Y:function(){return f.g},ua:function(a){return f.g[a]},removeStats:function(){f.g=
{};c.plugins.c.oa();return c},requestStart:function(a){var f=(new Date).getTime();c.plugins.c.i("xhr_"+a,f);return{loaded:function(){c.responseEnd(a,f)}}},responseEnd:function(a,b){c.plugins.c.i("xhr_"+a,b);f.fireEvent("xhr_load",{name:"xhr_"+a})},F:function(){var d,g;c.debug("Checking if we can send beacon");for(d in c.plugins)if(c.plugins.hasOwnProperty(d)&&!f.A[d]&&!c.plugins[d].C())return n.debug("Plugin "+d+" is not complete, deferring beacon send"),c;f.g.v=c.version;f.g.u=c.b.I(a.URL.replace(/#.*/,
""));b!==window&&(f.g["if"]="");f.fireEvent("before_beacon",f.g);if(!f.bu)return c;g=[];if(!c.b.da(g,f.g))return c;g=g.join("&");"POST"===f.bt?c.b.ca(g):(d=f.bu+(-1<f.bu.indexOf("?")?"&":"?")+g,2E3<d.length&&"AUTO"===f.bt?c.b.ca(g):(c.debug("Sending url: "+d.replace(/&/g,"\n\t")),g=new Image,g.src=d));return c}};c.n="number"===typeof d.BOOMR_lstart?d.BOOMR_lstart:c.window.perfOptions&&"number"===typeof c.window.perfOptions.BOOMR_lstart?c.window.perfOptions.BOOMR_lstart:0;delete d.BOOMR_lstart;(function(){function a(f){return function(a,
b){c.log(a,f,"boomerang"+(b?"."+b:""));return c}}b.H&&b.H.Ea&&b.H.Ea.Ga?c.log=b.H.log:b.R&&b.R.log?c.log=b.R.log:"object"===typeof window.console&&void 0!==window.console.log&&(c.log=function(a,c,f){window.console.log(f+": ["+c+"] "+a)});c.debug=a("debug");c.info=a("info");c.warn=a("warn");c.error=a("error")})();n=c})(window);(function(b){var g=b.document;n=n||{};n.plugins=n.plugins||{};var a={ba:!1,m:!1,Ma:!1,complete:!1,a:{},cookie:"RT",pa:1800,Ca:!1,navigationType:0,redirectCount:0,navigationStart:void 0,responseStart:void 0,e:void 0,ga:Math.floor(4294967296*Math.random()).toString(36),p:void 0,ha:0,h:void 0,q:void 0,o:null,w:null,N:function(f,c){var b,d;if(!a.cookie)return a;b=n.b.W(n.b.J(a.cookie))||{};if("object"===typeof f)for(d in f)if(f.hasOwnProperty(d))if(void 0===f[d])b.hasOwnProperty(d)&&delete b[d];else{if("nu"===
d||"r"===d)f[d]=n.b.K(f[d],!0);b[d]=f[d]}d=(new Date).getTime();c&&(b[c]=d);n.debug("Setting cookie (timer="+c+")\n"+n.b.t(b),"rt");if(!n.b.setCookie(a.cookie,b,a.pa))return n.error("cannot set start cookie","rt"),a;b=(new Date).getTime();50<b-d&&(n.b.Aa(a.cookie),n.error("took more than 50ms to set cookie... aborting: "+d+" -> "+b,"rt"));return a},aa:function(){var f,c=n.b.W(n.b.J(a.cookie));c&&(c.s=Math.max(+c.ul||0,+c.cl||0),n.debug("Read from cookie "+n.b.t(c),"rt"),c.s&&(c.r||c.nu)&&(a.o=c.r,
f=n.b.K(g.URL,!0),n.debug(a.o+" =?= "+a.w,"rt"),n.debug(c.s+" <? "+(+c.cl+15),"rt"),n.debug(c.nu+" =?= "+f,"rt"),!a.Ca||c.nu&&c.nu===f&&c.s<+c.cl+15||c.s===+c.ul&&a.o===a.w?(a.h=c.s,+c.hd>c.s&&(a.q=parseInt(c.hd,10))):a.h=a.q=void 0),a.N({s:void 0,r:void 0,nu:void 0,ul:void 0,cl:void 0,hd:void 0}))},ra:function(){n.h&&(n.plugins.c.i("boomerang",n.h),n.plugins.c.f("boomerang",n.ia),n.plugins.c.f("boomr_fb",n.h),n.n&&(n.plugins.c.f("boomr_ld",n.n),n.plugins.c.setTimer("boomr_lat",n.h-n.n,n.n)));if(window.performance&&
window.performance.getEntriesByName){var a,c,b={"rt.bmr.":n.url},d;for(d in b)if(b.hasOwnProperty(d)&&b[d]&&(a=window.performance.getEntriesByName(b[d]))&&0!==a.length)for(c in a=a[0],a)a.hasOwnProperty(c)&&c.match(/(Start|End)$/)&&0<a[c]&&n.d(d+c.replace(/^(...).*(St|En).*$/,"$1$2"),a[c])}},na:function(){if(!(g.webkitVisibilityState&&"prerender"===g.webkitVisibilityState||g.msVisibilityState&&3===g.msVisibilityState))return!1;n.plugins.c.i("t_load",a.navigationStart);n.plugins.c.f("t_load");n.plugins.c.i("t_prerender",
a.navigationStart);n.plugins.c.i("t_postrender");n.subscribe("visibility_changed",n.plugins.c.k,"visible",n.plugins.c);return!0},va:function(){var f,c;a.navigationStart||((f=b.performance||b.msPerformance||b.webkitPerformance||b.mozPerformance)&&f.navigation&&(a.navigationType=f.navigation.type,a.redirectCount=f.navigation.redirectCount),f&&f.timing?a.e=f.timing:b.chrome&&b.chrome.csi&&b.chrome.csi().startE?(a.e={navigationStart:b.chrome.csi().startE},c="csi"):b.Z&&b.Z.startE()&&(a.e={navigationStart:b.Z.startE()},
c="gtb"),a.e?(n.d("rt.start",c||"navigation"),a.navigationStart=a.e.navigationStart||a.e.fetchStart||void 0,a.responseStart=a.e.responseStart||void 0,navigator.userAgent.match(/Firefox\/[78]\./)&&(a.navigationStart=a.e.unloadEventStart||a.e.fetchStart||void 0)):n.warn("This browser doesn't support the WebTiming API","rt"))},sa:function(){a.e&&void 0!==a.e.fetchStart&&(n.plugins.c.setTimer("t_dns",a.e.domainLookupEnd-a.e.domainLookupStart,a.e.domainLookupStart),n.plugins.c.setTimer("t_tcp",a.e.connectEnd-
a.e.connectStart,a.e.connectStart),n.d("nt_nav_type",a.navigationType),n.d("nt_red_cnt",a.redirectCount))},ya:function(b){n.debug("Unload called with "+n.b.t(b),"rt");a.N({r:g.URL},"beforeunload"===b.type?"ul":"hd")},S:function(b,c,d,g){if(d){for(n.debug(b+" called with "+d.nodeName,"rt");d&&d.nodeName.toUpperCase()!==c;)d=d.parentNode;d&&d.nodeName.toUpperCase()===c&&(n.debug("passing through","rt"),a.N({nu:g(d)},"cl"))}},onclick:function(b){a.S("Click","A",b,function(a){return a.href})},onsubmit:function(b){a.S("Submit",
"FORM",b,function(a){a=a.action||g.URL;return a.match(/\?/)?a:a+"?"})},qa:function(){n.plugins.c.f("t_domloaded")},onLoad:function(){n.plugins.c.f("t_onLoad")}},d=n.plugins.c={l:function(f){n.debug("init RT","rt");b!==n.window&&(b=n.window,g=b.document);n.b.za(a,f,"RT",["cookie","cookie_exp","strict_referrer"]);a.o=a.w=n.b.K(g.referrer,!0);a.aa();a.ra();if(a.ba)return d;a.complete=!1;a.a={};n.subscribe("page_ready",d.k,"load",d);n.subscribe("dom_loaded",a.qa,null,a);n.subscribe("page_unload",a.ya,
null,a);n.subscribe("click",a.onclick,null,a);n.subscribe("form_submit",a.onsubmit,null,a);n.subscribe("onLoad",a.onLoad,null,a);a.p||(a.p=n.n||n.h);a.ba=!0;return d},i:function(b,c){b&&("t_page"===b&&d.f("t_resp",c),a.a[b]={start:"number"===typeof c?c:(new Date).getTime()});return d},f:function(b,c){b&&(a.a[b]=a.a[b]||{},void 0===a.a[b].end&&(a.a[b].end="number"===typeof c?c:(new Date).getTime()));return d},setTimer:function(b,c,g){b&&(a.a[b]={j:c,start:g});return d},Da:function(b,c){b&&(a.a[c]=
a.a[b],a.a[b]={})},oa:function(){a.a={};return d},O:function(){if(a.a){var b,c;for(c in a.a)a.a.hasOwnProperty(c)&&(b=a.a[c],b.end&&b.start&&("number"!==typeof b.j&&(b.j=b.end-b.start),n.d(c,b.j)))}},X:function(){return a.a},startTransaction:function(a){return n.plugins.c.i("txn_"+a,(new Date).getTime())},endTransaction:function(a){return n.plugins.c.f("txn_"+a,(new Date).getTime())},ta:function(){return a.ga},V:function(){return a.p},isOnLoadFired:function(){return a.m},setServerTime:function(a,
b){d.i("t_server",a).f("t_server",a+b)},k:function(b,c){n.debug("Called done with "+n.b.t(b)+", "+c,"rt");var g,m=(new Date).getTime(),q=0,k;a.complete=!1;a.aa();a.va();if(a.na())return d;if(a.responseStart)if(d.f("t_resp",a.responseStart),a.a.t_load)d.setTimer("t_page",a.a.t_load.end-a.responseStart,a.responseStart);else{var l=m-a.responseStart;0<l&&d.setTimer("t_page",l,a.responseStart)}else a.a.hasOwnProperty("t_page")?d.f("t_page"):a.q&&(d.f("t_resp",a.q),d.setTimer("t_page",m-a.q,a.q));a.a.hasOwnProperty("t_postrender")&&
(d.f("t_postrender"),d.f("t_prerender"));a.navigationStart?g=a.navigationStart:a.h&&2!==a.navigationType?(g=a.h,n.d("rt.start","cookie")):(n.d("rt.start","none"),g=void 0);g&&a.p>g&&(a.p=n.n||n.h,a.ha=0);n.debug("Got start time: "+g,"rt");d.f("t_done",m);a.a.hasOwnProperty("t_server")&&(d.f("req_lat",a.a.t_server.start),a.e&&a.e.responseEnd&&(l=a.e.responseEnd-a.a.t_server.end,0<=l?d.setTimer("resp_lat",l,a.a.t_server.end):n.warn("negative resp_lat: "+a.a.t_server.end+" - "+a.e.responseEnd)));n.ea("req_lat",
"resp_lat","t_server","t_done","t_page","t_resp","r","r2","rt.tstart","rt.bstart","rt.end","rt.ss","rt.sl","rt.lt","t_postrender","t_prerender","t_load");n.d("rt.tstart",g);n.d("rt.bstart",n.h);n.d("rt.end",a.a.t_done.end);a.sa();a.a.t_configfb&&("t_configfb"in a.a&&"number"!==typeof a.a.t_configfb.start||isNaN(a.a.t_configfb.start))&&("t_configjs"in a.a&&"number"===typeof a.a.t_configjs.start?a.a.t_configfb.start=a.a.t_configjs.start:delete a.a.t_configfb);for(k in a.a)a.a.hasOwnProperty(k)&&(m=
a.a[k],"number"!==typeof m.j&&("number"!==typeof m.start&&(m.start=g),m.j=m.end-m.start),isNaN(m.j)?delete m.j:(n.d(k,m.j),q++,delete a.a[k]));q&&(n.d("r",n.b.I(a.o)),a.w!==a.o&&n.d("r2",n.b.I(a.w)));n.d({"rt.sid":a.ga,"rt.ss":a.p,"rt.sl":a.ha});a.complete=!0;n.F();a.m=!0;return d},C:function(){return a.complete}}})(window);(function(){n=n||{};n.plugins=n.plugins||{};var b={complete:!1,k:function(){if(!b.complete){var a=n.window,d=a.performance,f=a.console,c=a.document,g="[object Opera]"==={}.toString.call(a.opera)?c.querySelectorAll:c.getElementsByTagName,a=void 0===g.call?function(a){return g(a)}:g,f=d&&d.memory?d.memory:f&&f.memory?f.memory:null;d&&d.getEntries&&d.getEntries().length&&n.d("dom.res",d.getEntries().length);f&&n.d({"mem.total":f.totalJSHeapSize,"mem.used":f.usedJSHeapSize});n.d({"dom.ln":a.call(c,"*").length,
"dom.sz":a.call(c,"html")[0].innerHTML.length,"dom.img":a.call(c,"img").length,"dom.script":a.call(c,"script").length});b.complete=!0;n.F()}}},g=n.plugins.Ha={l:function(){n.subscribe("page_ready",b.k,null,b);return g},C:function(){return b.complete}}})();var p;"object"===typeof navigator&&(p=navigator.connection||navigator.mozConnection||navigator.webkitConnection||navigator.msConnection);p&&(n.d("mob.ct",p.type),n.d("mob.bw",p.Ka),n.d("mob.mt",p.La));(function(){n=n||{};n.plugins=n.plugins||{};var b={complete:!1,k:function(){if(!b.complete){var a=n.window.performance,d,f;n.ea("rtrestiming");if(a&&"function"===typeof a.getEntriesByType&&(a=a.getEntriesByType("resource"))){n.info("Client supports Resource Timing API","rtrestiming");f={};var c=document.createElement("A"),g;f.rtrestiming=Array(a.length);for(d=0;d<a.length;++d)c.href=a[d].name,g=f.rtrestiming[d]={name:c.host==window.location.host?c.pathname+c.search:a[d].name},0<a[d].responseEnd&&
(g.rt_total=Math.round(a[d].responseEnd-a[d].startTime),a[d].responseStart&&(g.rt_tansfer=Math.round(a[d].responseEnd-a[d].responseStart))),a[d].domainLookupEnd&&a[d].domainLookupStart&&(g.rt_dns=Math.round(a[d].domainLookupEnd-a[d].domainLookupStart)),a[d].connectEnd&&a[d].connectStart&&(g.rt_tcp=Math.round(a[d].connectEnd-a[d].connectStart)),a[d].responseStart&&(g.rt_ttfb=Math.round(a[d].responseStart-a[d].startTime)),a[d].redirectEnd&&a[d].redirectStart&&(g.rt_red=Math.round(a[d].redirectEnd-a[d].redirectStart));
n.d(f)}b.complete=!0;n.F()}}},g=n.plugins.Q={l:function(){n.subscribe("page_ready",b.k,null,b);return g},C:function(){return b.complete},ja:"rtrestiming"}})();(function(){n=n||{};n.plugins=n.plugins||{};var b={U:n.window.document,fa:"script",complete:!1,L:!1,M:void 0,k:function(){b.complete||(b.complete=!0,b.L=!1,n.F())},Ba:function(){var a=b.U.getElementsByTagName(b.fa)[0],d=b.U.createElement(b.fa);b.M=(new Date).getTime();d.src=n.window.BOOMR_cURL;a.parentNode.insertBefore(d,a)}},g=n.plugins.ka={l:function(){if(b.complete)return g;if(b.L)return setTimeout(b.k,10),n.d("t_cjs",(new Date).getTime()-b.M),r.BOOMR_configt&&(n.d("t_cfb",r.BOOMR_configt-b.M),
delete r.BOOMR_configt),g;b.L=!0;n.subscribe("page_ready",b.Ba,null,null);return g},C:function(){return b.complete}}})();n.ia=(new Date).getTime();var t={DEBUG:{name:"DEBUG",value:1},INTERNAL:{name:"INTERNAL",value:2},PRODUCTION:{name:"PRODUCTION",value:3},DISABLED:{name:"DISABLED",value:4}},v={PAGE_START_MARK:"PageStart",PERF_PAYLOAD_PARAM:"bulkPerf",MARK_NAME:"mark",MEASURE_NAME:"measure",MARK_START_TIME:"st",MARK_LAST_TIME:"lt",PAGE_NAME:"pn",ELAPSED_TIME:"et",REFERENCE_TIME:"rt",Perf_LOAD_DONE:"loadDone",STATS:{NAME:"stat",SERVER_ELAPSED:"internal_serverelapsed",DB_TOTAL_TIME:"internal_serverdbtotaltime",DB_CALLS:"internal_serverdbcalls",
DB_FETCHES:"internal_serverdbfetches"}};window.PerfConstants=v;window.PerfLogLevel=t;var r=window.perfOptions;r||(r={});var w={log:null,Na:!0,ka:{enabled:!1},Ia:{enabled:!!r.restiming},T:!1};w[n.P]=r.bURL;n.l(w);r.pageStartTime&&n.plugins.c.i("t_page",r.pageStartTime);var x=null;function y(b){"string"===typeof b&&(b=t[b]);return b||t.INTERNAL}function z(b,g){n.plugins.c.Da(b,g);return A}
var A={currentLogLevel:y(r.logLevel),mark:function(b,g){A.currentLogLevel.value<=y(g).value&&n.plugins.c.i(b);return A},endMark:function(b,g){A.currentLogLevel.value<=y(g).value&&n.plugins.c.f(b);return A},updateMarkName:z,setTimer:function(b,g,a){A.currentLogLevel.value<=y(a).value&&(0<=g?n.plugins.c.setTimer(b,g):n.plugins.c.f(b));return A},setServerTime:function(b,g){n.plugins.c.setServerTime(b,g);return A},measureToJson:function(b){return window.JSON?JSON.stringify(b):"{"+v.MEASURE_NAME+':"'+
b[v.MEASURE_NAME]+'",'+v.MARK_NAME+':"'+b[v.MARK_NAME]+'",'+v.ELAPSED_TIME+":"+b[v.ELAPSED_TIME]+","+v.REFERENCE_TIME+":"+b[v.REFERENCE_TIME]+"}"},toJson:function(b){n.plugins.c.O();var g=n.plugins.c.X(),a=n.plugins.c.V(),d=['{sessionID:"',n.plugins.c.ta(),'",st:',a,',pn:"',window.document.URL,'",uid:"',Math.round(1E15*Math.random()).toString(),'",'],f=[],c=[],h,m,q=n.Y(),k;for(h in q)"r"!=h&&"r2"!=h&&"t_other"!=h&&q.hasOwnProperty(h)&&!isNaN(q[h])&&(b&&f.push('"'+h+'":'+q[h]),m={},m[v.MEASURE_NAME]=
m[v.MARK_NAME]=h,m[v.ELAPSED_TIME]=q[h],k=g[h],m[v.REFERENCE_TIME]=k&&k.start?k.start:a,c.push(A.measureToJson(m)));b&&d.push("marks:{",f.join(","),"},");q.hasOwnProperty(n.plugins.Q.ja)&&window.JSON&&d.push("restiming:",JSON.stringify(q[n.plugins.Q.ja]),",");d.push("measures:[",c.join(","),"]}");return d.join("")},toPostVar:function(){return v.PERF_PAYLOAD_PARAM+"="+A.toJson().replace(/&/g,"__^__")},getMeasures:function(){n.plugins.c.O();var b=n.plugins.c.X(),g=n.plugins.c.V(),a=[],d=n.Y(),f,c;for(f in d)"r"!=
f&&"r2"!=f&&"t_other"!=f&&d.hasOwnProperty(f)&&!isNaN(d[f])&&(c={},c[v.MEASURE_NAME]=f,c[v.MARK_NAME]=f,c[v.ELAPSED_TIME]=d[f],c[v.REFERENCE_TIME]=b[f]?b[f].start:g,a.push(c));return a},getBeaconData:function(){return x},setBeaconData:function(b){x=b},clearBeaconData:function(){x=null},removeStats:n.removeStats,subscribe:n.subscribe,stat:function(b,g){n.d("st_"+b,g);return A},getStat:function(b){n.plugins.c.O();return b?n.ua(b):-1},onLoad:n.D,startTransaction:function(b){n.plugins.c.startTransaction(b);
return A},endTransaction:function(b){n.plugins.c.endTransaction(b);return A},updateTransaction:z,isOnLoadFired:n.plugins.c.isOnLoadFired,util:{setCookie:function(b,g,a,d){document.cookie=b+"="+escape(g+"")+(a?"; expires="+a.toGMTString():"")+(d?"; path="+d:"; path=/")}},enabled:!0};window.Perf=A;window.PerfLogLevel=t;window.PerfConstants=v;})(this);
//# sourceMappingURL=perf.js.map
