webpackJsonp([0xd2a57dc1d883],{82:function(n,e){"use strict";function t(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function o(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=o;var a=[]},214:function(n,e,t){"use strict";var o;e.components={"component---src-templates-frontpage-js":t(350),"component---src-templates-blog-post-js":t(349),"component---src-templates-about-page-js":t(348),"component---src-templates-package-js":t(351),"component---src-templates-tags-js":t(352),"component---src-pages-404-js":t(344),"component---src-pages-concept-index-js":t(345),"component---src-pages-index-js":t(346),"component---src-pages-tags-index-js":t(347)},e.json=(o={"layout-index.json":t(7),"frontpage.json":t(360)},o["layout-index.json"]=t(7),o["blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json"]=t(356),o["layout-index.json"]=t(7),o["blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json"]=t(357),o["layout-index.json"]=t(7),o["blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json"]=t(358),o["layout-index.json"]=t(7),o["about.json"]=t(355),o["layout-index.json"]=t(7),o["packages-fullnatureadventure.json"]=t(362),o["layout-index.json"]=t(7),o["packages-senseofadventure.json"]=t(363),o["layout-index.json"]=t(7),o["packages-weekendgetaway-1.json"]=t(364),o["layout-index.json"]=t(7),o["tags-flavor.json"]=t(368),o["layout-index.json"]=t(7),o["tags-tasting.json"]=t(371),o["layout-index.json"]=t(7),o["tags-brewing.json"]=t(366),o["layout-index.json"]=t(7),o["tags-chemex.json"]=t(367),o["layout-index.json"]=t(7),o["tags-jamaica.json"]=t(370),o["layout-index.json"]=t(7),o["tags-green-beans.json"]=t(369),o["layout-index.json"]=t(7),o["404.json"]=t(353),o["layout-index.json"]=t(7),o["concept.json"]=t(359),o["layout-index.json"]=t(7),o["index.json"]=t(361),o["layout-index.json"]=t(7),o["tags.json"]=t(365),o["layout-index.json"]=t(7),o["404-html.json"]=t(354),o),e.layouts={"layout---index":t(343)}},215:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(2),f=o(l),p=t(131),d=o(p),m=t(61),g=o(m),h=t(82),y=t(476),j=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=v,n.exports=e.default},61:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(426),r=o(a),u=(0,r.default)();n.exports=u},216:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(73),r=t(132),u=o(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return i=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return i=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return i=n,s[r]=n,!0}return!1}),i}}},217:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(113),r=o(a),u=t(82),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},353:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(39260717214065,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcf80f655c40,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(50840821570229,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7b23972c2711,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf67c6e05e499,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},7:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(119)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc05515cdf500,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9c08fa73f2f1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa12e97cbdce4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(31226404763212,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(86274549634625,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},368:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb0dda74ca179,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(0x6d118f7b49ba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(49978712923209,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(71381831944032,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},343:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(218)})})}},131:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(216)),u=o(r),s=t(61),i=o(s),c=t(132),l=o(c),f=void 0,p={},d={},m={},g={},h={},y=[],j=[],x={},v="",b=[],R={},w=function(n){return n&&n.default||n},k=void 0,C=!0,N=[],_={},P={},E=5;k=t(219)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){b=b.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,N.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),N=N.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var a=w(o());h[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},R={},b=[],y=[],v=""},addPagesArray:function(n){y=n,f=(0,u.default)(n,v)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(L);var o=f(e);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+t:R[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||g[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+t:R[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),C=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(77))},415:function(n,e){n.exports=[{componentChunkName:"component---src-templates-frontpage-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"frontpage.json",path:"/frontpage/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json",path:"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json",path:"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json",path:"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},{componentChunkName:"component---src-templates-about-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-templates-package-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages-fullnatureadventure.json",path:"/packages/fullnatureadventure/"},{componentChunkName:"component---src-templates-package-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages-senseofadventure.json",path:"/packages/senseofadventure/"},{componentChunkName:"component---src-templates-package-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages-weekendgetaway-1.json",path:"/packages/weekendgetaway.1/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-flavor.json",path:"/tags/flavor/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-tasting.json",path:"/tags/tasting/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-brewing.json",path:"/tags/brewing/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-chemex.json",path:"/tags/chemex/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-jamaica.json",path:"/tags/jamaica/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-green-beans.json",path:"/tags/green-beans/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-concept-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"concept.json",path:"/concept/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},219:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(82),u=t(1),s=o(u),i=t(59),c=o(i),l=t(73),f=t(375),p=t(322),d=o(p),m=t(115),g=t(217),h=o(g),y=t(61),j=o(y),x=t(415),v=o(x),b=t(416),R=o(b),w=t(215),k=o(w),C=t(214),N=o(C),_=t(131),P=o(_);t(245),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(220);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,a=E[o];if(a&&(o=a.toPath),window.location.pathname!==o){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(r),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,a({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},416:function(n,e){n.exports=[]},220:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(61),r=o(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},132:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},322:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},426:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},77:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=a(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,f,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var d,m=[],g=!1,h=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},476:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},344:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(224)})})}},345:function(n,e,t){t(3),n.exports=function(n){return t.e(0xde14e771ec2d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(225)})})}},346:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(226)})})}},347:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc50e273ade69,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(227)})})}},348:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf0a69e7ff408,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(228)})})}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(0x620f737b6699,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(229)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(55523230322238,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(230)})})}},351:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa625cac2f865,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(231)})})}},352:function(n,e,t){t(3),n.exports=function(n){return t.e(50739212244294,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}}});
//# sourceMappingURL=app-27e47a6fc77294c08228.js.map