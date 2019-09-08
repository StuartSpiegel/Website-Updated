'use strict';function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}
var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function y(a,b){if(b){var c=u;a=a.split(".");for(var g=0;g<a.length-1;g++){var h=a[g];h in c||(c[h]={});c=c[h]}a=a[a.length-1];g=c[a];b=b(g);b!=g&&null!=b&&r(c,a,{configurable:!0,writable:!0,value:b})}}
y("Promise",function(a){function b(d){this.d=0;this.g=void 0;this.c=[];var e=this.e();try{d(e.resolve,e.reject)}catch(f){e.reject(f)}}
function c(){this.c=null}
function g(d){return d instanceof b?d:new b(function(e){e(d)})}
if(a)return a;c.prototype.d=function(d){if(null==this.c){this.c=[];var e=this;this.e(function(){e.g()})}this.c.push(d)};
var h=u.setTimeout;c.prototype.e=function(d){h(d,0)};
c.prototype.g=function(){for(;this.c&&this.c.length;){var d=this.c;this.c=[];for(var e=0;e<d.length;++e){var f=d[e];d[e]=null;try{f()}catch(l){this.f(l)}}}this.c=null};
c.prototype.f=function(d){this.e(function(){throw d;})};
b.prototype.e=function(){function d(l){return function(n){f||(f=!0,l.call(e,n))}}
var e=this,f=!1;return{resolve:d(this.m),reject:d(this.f)}};
b.prototype.m=function(d){if(d===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.n(d);else{a:switch(typeof d){case "object":var e=null!=d;break a;case "function":e=!0;break a;default:e=!1}e?this.l(d):this.i(d)}};
b.prototype.l=function(d){var e=void 0;try{e=d.then}catch(f){this.f(f);return}"function"==typeof e?this.o(e,d):this.i(d)};
b.prototype.f=function(d){this.j(2,d)};
b.prototype.i=function(d){this.j(1,d)};
b.prototype.j=function(d,e){if(0!=this.d)throw Error("Cannot settle("+d+", "+e+"): Promise already settled in state"+this.d);this.d=d;this.g=e;this.k()};
b.prototype.k=function(){if(null!=this.c){for(var d=0;d<this.c.length;++d)k.d(this.c[d]);this.c=null}};
var k=new c;b.prototype.n=function(d){var e=this.e();d.h(e.resolve,e.reject)};
b.prototype.o=function(d,e){var f=this.e();try{d.call(e,f.resolve,f.reject)}catch(l){f.reject(l)}};
b.prototype.then=function(d,e){function f(q,t){return"function"==typeof q?function(v){try{l(q(v))}catch(w){n(w)}}:t}
var l,n,x=new b(function(q,t){l=q;n=t});
this.h(f(d,l),f(e,n));return x};
b.prototype.catch=function(d){return this.then(void 0,d)};
b.prototype.h=function(d,e){function f(){switch(l.d){case 1:d(l.g);break;case 2:e(l.g);break;default:throw Error("Unexpected state: "+l.d);}}
var l=this;null==this.c?k.d(f):this.c.push(f)};
b.resolve=g;b.reject=function(d){return new b(function(e,f){f(d)})};
b.race=function(d){return new b(function(e,f){for(var l=p(d),n=l.next();!n.done;n=l.next())g(n.value).h(e,f)})};
b.all=function(d){var e=p(d),f=e.next();return f.done?g([]):new b(function(l,n){function x(v){return function(w){q[v]=w;t--;0==t&&l(q)}}
var q=[],t=0;do q.push(void 0),t++,g(f.value).h(x(q.length-1),n),f=e.next();while(!f.done)})};
return b});
var z=Date.now||function(){return+new Date};/*
function A(a){return new Promise(function(b,c){var g=a.length,h=null;if(g)for(var k=function(f,l){f||h||(h=l);g--;g||(h?c(h):b())},d=p(a),e=d.next();!e.done;e=d.next())e.value.then(k.bind(null,!0),k.bind(null,!1));
else b()})}
function B(a){return self.btoa(String.fromCharCode.apply(null,new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_")}
;var C=null;function D(a,b){var c={};c.key=a;c.value=b;return E().then(function(g){return new Promise(function(h,k){var d=g.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);d.onsuccess=h;d.onerror=k})})}
function F(){return D("IndexedDBCheck","testing IndexedDB").then(function(){return G("IndexedDBCheck")}).then(function(a){return"testing IndexedDB"==a?Promise.resolve():Promise.reject()}).then(function(){return!0}).catch(function(){return!1})}
function G(a){return E().then(function(b){return new Promise(function(c,g){var h=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);h.onsuccess=function(){var k=h.result;c(k?k.value:null)};
h.onerror=function(){g('Unable to get key "'+a+'" from object store.')}})},function(){return null})}
function E(){return C?Promise.resolve(C):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var g=c.result;if(g.objectStoreNames.contains("swpushnotificationsstore"))C=g,a(C);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),E()};
c.onupgradeneeded=H})}
function H(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;function I(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){if(a){a=p(a);for(var b=a.next();!b.done;b=a.next())b.value.postMessage({type:"update_unseen_notifications_count_signal"})}})}
function J(a){if(!(a.payload&&a.payload.chrome&&a.payload.chrome.endpoints))return Promise.resolve();var b=new FormData;b.append("json_navigation_endpoints",JSON.stringify(a.payload.chrome.endpoints));var c="[]";a.payload.chrome.extraUrlParams&&(c=JSON.stringify(a.payload.chrome.extraUrlParams));b.append("extra_url_params",c);b.append("hashed_identifier",a.hashedIdentifier||"");b.append("identifier_salt",a.identifierSalt||"");return fetch("/notifications_ajax?action_convert_endpoint_to_url=1",{credentials:"include",
method:"POST",body:b}).then(function(g){return g.ok?g.json().then(function(h){if(!h.successful_conversion)return Promise.resolve();if(a.payload.chrome.postedEndpoint){var k=a.payload.chrome.postedEndpoint,d=new FormData;d.append("record_notification_interactions_endpoint",JSON.stringify(k));fetch("/notifications_ajax?action_record_notification_interactions=1",{credentials:"include",method:"POST",body:d})}return K(a,h.url)}).catch(function(){return Promise.resolve()}):Promise.resolve()})}
function K(a,b){a.deviceId&&D("DeviceId",a.deviceId);a.timestampSec&&L(a.timestampSec);var c=a.payload.chrome;return self.registration.showNotification(c.title,{body:c.body,icon:c.iconUrl,data:{nav:b,id:c.notificationId,attributionTag:c.attributionTag},tag:c.title+c.body+c.iconUrl,requireInteraction:!0}).then(function(){M(a.displayCap)}).catch(function(){})}
function N(a){return G("DeviceId").then(function(b){b=O(null,b,null,a);return fetch("/notifications_ajax?action_notification_click=1",{credentials:"include",method:"POST",body:b})})}
function P(){return Promise.all([G("TimestampLowerBound"),Q(),G("DeviceId")]).then(function(a){var b=p(a);a=b.next().value;var c=b.next().value;b=b.next().value;if(!a)return Promise.reject(null);a=O(c,b,a);return fetch("/notifications_ajax?action_get_notifications=1",{credentials:"include",method:"POST",body:a}).then(R)})}
function R(a){return a.ok?a.json().then(S).catch(function(){}):Promise.resolve()}
function S(a){if(a.errors)return Promise.reject(a.errors);a.device_id&&D("DeviceId",a.device_id);a.ts&&L(a.ts);if(a.notifications){var b=[];a.notifications.forEach(function(c){b.push(self.registration.showNotification(c.title,{body:c.message,icon:c.iconUrl,data:{nav:c.nav,id:c.id,attributionTag:c.attributionTag},tag:c.title+c.message+c.iconUrl,requireInteraction:c.requireInteraction}))});
return A(b).then(function(){M(a.display_cap)})}return Promise.resolve()}
function M(a){-1!=a&&self.registration.getNotifications().then(function(b){for(var c=0;c<b.length-a;c++)b[c].close()})}
function T(a){var b=[U(a),G("RegistrationTimestamp").then(V),W(),X()];Promise.all(b).catch(function(){D("IDToken",a);Y();return Promise.resolve()})}
function V(a){a=a||0;return 9E7>=z()-a?Promise.resolve():Promise.reject()}
function U(a){return G("IDToken").then(function(b){return a==b?Promise.resolve():Promise.reject()})}
function W(){return G("Permission").then(function(a){return Notification.permission==a?Promise.resolve():Promise.reject()})}
function X(){return G("Endpoint").then(function(a){return Q().then(function(b){return a==b?Promise.resolve():Promise.reject()})})}
function Y(){D("RegistrationTimestamp",0);Promise.all([Q(),aa(),ba()]).then(function(a){var b=p(a);a=b.next().value;var c=b.next().value;b=b.next().value;c&&(c=B(c));b&&(b=B(b));Z(a,c,b)}).catch(function(){Z()})}
function Z(a,b,c){a=void 0===a?null:a;b=void 0===b?null:b;c=void 0===c?null:c;F().then(function(g){g&&(D("Endpoint",a),D("P256dhKey",b),D("AuthKey",c),D("Permission",Notification.permission),Promise.all([G("DeviceId"),G("NotificationsDisabled"),ca()]).then(function(h){var k=p(h);h=k.next().value;var d=k.next().value;k=k.next().value;h=O(a,h,null,null,d,b,c,k);fetch("/notifications_ajax?action_register_device=1",{credentials:"include",method:"POST",body:h}).then(da).catch(function(){})}))})}
function O(a,b,c,g,h,k,d,e){var f=new FormData;a&&f.append("endpoint",a);b&&f.append("device_id",b);c&&f.append("timestamp_lower_bound",c);g&&(f.append("notification_id",g.id),f.append("attribution_tag",g.attributionTag));h&&f.append("notifications_disabled",(!!h).toString());k&&f.append("p256dh_key",k);d&&f.append("auth_key",d);e&&f.append("registration_token",e);f.append("permission",Notification.permission);return f}
function da(a){D("RegistrationTimestamp",z());a.ok&&a.json().then(function(b){b.ts&&L(b.ts);b.device_id&&D("DeviceId",b.device_id)}).catch(function(){})}
function Q(){return self.registration.pushManager.getSubscription().then(function(a){return a?Promise.resolve(a.endpoint):Promise.resolve(null)})}
function aa(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null)})}
function ba(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null)})}
function ca(){return fetch("/notifications_ajax?action_get_registration_token=1",{credentials:"include",method:"POST"}).then(function(a){if(a.ok)return a.json().then(function(b){return b.registration_token}).catch(function(){})})}
function L(a){D("TimestampLowerBound",a)}
;self.oninstall=function(a){a.waitUntil(self.skipWaiting())};
self.onactivate=function(a){a.waitUntil(self.clients.claim())};
self.onmessage=function(a){var b=a.data;a=b.type;b=b.data;"notifications_register"==a?(D("IDToken",b),Y()):"notifications_check_registration"==a&&T(b)};
self.onnotificationclick=function(a){a.notification.close();var b=a.notification.data,c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(function(g){a:{var h=b.nav;g=p(g);for(var k=g.next();!k.done;k=g.next())if(k=k.value,k.url==h){k.focus();break a}self.clients.openWindow(h)}});
a.waitUntil(c);a.waitUntil(N(b))};
self.onpush=function(a){a.waitUntil(G("NotificationsDisabled").then(function(b){if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return J(a.data.json())}catch(c){return Promise.resolve(c.message)}return P()}));
a.waitUntil(I())};
self.onpushsubscriptionchange=function(){Y()};
