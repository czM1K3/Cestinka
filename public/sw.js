if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/6fniAelk7RYLQVy-0ffkz/_buildManifest.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/6fniAelk7RYLQVy-0ffkz/_middlewareManifest.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/6fniAelk7RYLQVy-0ffkz/_ssgManifest.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/127-140b3f85948e5f4b.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/c8a1c034-90ef3d831bf48762.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/main-a8edae0d785a1705.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/pages/%5Bid%5D-51312ee40947a316.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/pages/_app-62492e132d2f24e5.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/pages/index-a5e480fa1458855c.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/chunks/webpack-2b99834efceef160.js",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/css/280491782fa548d8.css",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/_next/static/css/d6aca21c6e7e7913.css",revision:"6fniAelk7RYLQVy-0ffkz"},{url:"/icon/icon-128.png",revision:"f653b6051b149004333cef5ab6ccafeb"},{url:"/icon/icon-512.png",revision:"99adaaf187767f7ab66ba9c0d181a2b9"},{url:"/icon/icon-64.png",revision:"9a1e39107ae4104cff0f3020118a346f"},{url:"/manifest.json",revision:"233bba4549de0f0e33db2e02ffb20618"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
