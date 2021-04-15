/*! For license information please see 7.8b80a57e.chunk.js.LICENSE.txt */
(this.webpackJsonpwheel=this.webpackJsonpwheel||[]).push([[7],{122:function(e,t,n){"use strict";n.r(t);var r=n(3),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;Object.create;var s=n(16),u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},c=function(e){function t(n,r,i){var o=e.call(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o.code=n,o.details=i,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error);var l=function(){function e(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((function(e){return n.auth=e}),(function(){})),this.messaging||t.get().then((function(e){return n.messaging=e}),(function(){}))}return e.prototype.getAuthToken=function(){return o(this,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return(e=t.sent())?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}}))}))},e.prototype.getInstanceIdToken=function(){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];try{return[2,this.messaging.getToken()]}catch(t){return[2,void 0]}return[2]}))}))},e.prototype.getContext=function(){return o(this,void 0,void 0,(function(){var e,t;return a(this,(function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}}))}))},e}();function f(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var h=function(){function e(){}return e.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map((function(e){return t.encode(e)}));if("function"===typeof e||"object"===typeof e)return f(e,(function(e){return t.encode(e)}));throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((function(e){return t.decode(e)})):"function"===typeof e||"object"===typeof e?f(e,(function(e){return t.decode(e)})):e},e}();var d=function(){function e(e,t,n,r,i){var o=this;void 0===r&&(r="us-central1"),this.app_=e,this.fetchImpl=i,this.serializer=new h,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return Promise.resolve(o.deleteService())}},this.contextProvider=new l(t,n),this.cancelAllRequests=new Promise((function(e){o.deleteService=function(){return e()}}));try{var a=new URL(r);this.customDomain=a.origin,this.region="us-central1"}catch(s){this.customDomain=null,this.region=r}}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId;return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+this.region+"/"+e:null!==this.customDomain?this.customDomain+"/"+e:"https://"+this.region+"-"+t+".cloudfunctions.net/"+e},e.prototype.useEmulator=function(e,t){this.emulatorOrigin="http://"+e+":"+t},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this;return function(r){return n.call(e,r,t||{})}},e.prototype.postJSON=function(e,t,n){return o(this,void 0,void 0,(function(){var r,i;return a(this,(function(o){switch(o.label){case 0:n["Content-Type"]="application/json",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetchImpl(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),[2,{status:0,json:null}];case 4:i=null,o.label=5;case 5:return o.trys.push([5,7,,8]),[4,r.json()];case 6:return i=o.sent(),[3,8];case 7:return o.sent(),[3,8];case 8:return[2,{status:r.status,json:i}]}}))}))},e.prototype.call=function(e,t,n){return o(this,void 0,void 0,(function(){var r,i,o,s,l,f,h,d,v,g,m;return a(this,(function(a){switch(a.label){case 0:return r=this._url(e),t=this.serializer.encode(t),i={data:t},o={},[4,this.contextProvider.getContext()];case 1:return(s=a.sent()).authToken&&(o.Authorization="Bearer "+s.authToken),s.instanceIdToken&&(o["Firebase-Instance-ID-Token"]=s.instanceIdToken),l=n.timeout||7e4,f=function(e){var t,n=new Promise((function(n,r){t=setTimeout((function(){r(new c("deadline-exceeded","deadline-exceeded"))}),e)}));return{timer:t,promise:n}}(l),h=f.timer,d=f.promise,[4,Promise.race([p(h,this.postJSON(r,i,o)),d,p(h,this.cancelAllRequests)])];case 2:if(!(v=a.sent()))throw new c("cancelled","Firebase Functions instance was deleted.");if(g=function(e,t,n){var r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r,o=void 0;try{var a=t&&t.error;if(a){var s=a.status;if("string"===typeof s){if(!u[s])return new c("internal","internal");r=u[s],i=s}var l=a.message;"string"===typeof l&&(i=l),void 0!==(o=a.details)&&(o=n.decode(o))}}catch(f){}return"ok"===r?null:new c(r,i,o)}(v.status,v.json,this.serializer))throw g;if(!v.json)throw new c("internal","Response is not valid JSON object.");if("undefined"===typeof(m=v.json.data)&&(m=v.json.result),"undefined"===typeof m)throw new c("internal","Response is missing data field.");return[2,{data:this.serializer.decode(m)}]}}))}))},e}();function p(e,t){return o(this,void 0,void 0,(function(){var n;return a(this,(function(r){switch(r.label){case 0:return[4,t];case 1:return n=r.sent(),clearTimeout(e),[2,n]}}))}))}!function(e,t){var n={Functions:d};e.INTERNAL.registerComponent(new s.a("functions",(function(e,n){var r=n.instanceIdentifier,i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("messaging");return new d(i,o,a,r,t)}),"PUBLIC").setServiceProps(n).setMultipleInstances(!0))}(r.a,fetch.bind(self)),r.a.registerVersion("@firebase/functions","0.6.7")}}]);