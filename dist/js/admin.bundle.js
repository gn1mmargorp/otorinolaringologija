/*! For license information please see admin.bundle.js.LICENSE.txt */
(()=>{"use strict";var e=!1;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){r=function(){return n};var e,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:O(e,r,c)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function E(){}var x={};d(x,u,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(A([])));L&&L!==o&&a.call(L,u)&&(x=L);var k=E.prototype=b.prototype=Object.create(x);function q(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,r){function n(o,i,c,u){var s=h(e[o],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):r.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function O(t,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=h(t,r,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function T(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=E,i(k,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=d(E,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,d(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},q(j.prototype),d(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new j(f(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},q(k),d(k,l,"Generator"),d(k,u,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function n(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,u,"next",e)}function u(e){n(i,o,a,c,u,"throw",e)}c(void 0)}))}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}const c=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addClickListeners()},t=[{key:"addNewUser",value:(s=o(r().mark((function e(t){var n,o,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:document.querySelector("#admin-created-user-username").value,email:document.querySelector("#admin-created-user-email").value,password:document.querySelector("#admin-created-user-password").value},e.prev=2,e.next=5,fetch("/api/admin/users/add-new-user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:if((o=e.sent).ok){e.next=11;break}return e.next=9,o.json();case 9:throw a=e.sent,new Error(a.message);case 11:return e.next=13,o.json();case 13:i=e.sent,alert(i.message),location.reload(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])}))),function(e){return s.apply(this,arguments)})},{key:"editUser",value:(u=o(r().mark((function e(t){var n,o,a,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={adminModifiedUserUsername:document.querySelector("#admin-modified-user-username").value,adminModifiedUserRole:document.querySelector("#admin-modified-user-role").value},o=t.target.querySelector("button").getAttribute("data-user-id"),e.prev=3,e.next=6,fetch("/api/admin/users/".concat(o),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:if((a=e.sent).ok){e.next=12;break}return e.next=10,a.json();case 10:throw i=e.sent,new Error(i.message);case 12:return e.next=14,a.json();case 14:c=e.sent,alert(c.message),location.reload(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[3,19]])}))),function(e){return u.apply(this,arguments)})},{key:"replyToMessageViaEmail",value:(c=o(r().mark((function e(t){var n,o,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={messageId:t.target.querySelector("input").value,emailReplyMessage:t.target.querySelector("textarea").value},e.prev=2,e.next=5,fetch("/api/admin/messages/email-reply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:if((o=e.sent).ok){e.next=11;break}return e.next=9,o.json();case 9:throw a=e.sent,new Error(a.message);case 11:return e.next=13,o.json();case 13:i=e.sent,alert(i.message),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])}))),function(e){return c.apply(this,arguments)})},{key:"deleteUser",value:(i=o(r().mark((function e(t){var n,o,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.getAttribute("data-user-id"),e.prev=1,!confirm("Are you sure you want to delete this user account?")){e.next=16;break}return e.next=5,fetch("/api/admin/users/".concat(n),{method:"DELETE"});case 5:if((o=e.sent).ok){e.next=11;break}return e.next=9,o.json();case 9:throw a=e.sent,new Error(a.message);case 11:return e.next=13,o.json();case 13:i=e.sent,alert(i.message),location.reload();case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])}))),function(e){return i.apply(this,arguments)})},{key:"logout",value:function(){localStorage.removeItem("token"),location.href="/"}},{key:"addClickListeners",value:function(){var e=this;document.querySelectorAll(".email-reply-message-form").forEach((function(t){t.addEventListener("submit",e.replyToMessageViaEmail.bind(e))})),document.querySelector("#logout-button").addEventListener("click",(function(t){t.preventDefault(),e.logout()}));var t=document.querySelector("#add-new-user-form");t&&t.addEventListener("submit",this.addNewUser.bind(this)),document.querySelector("#user-account-actions-toggler").addEventListener("click",(function(){var e=document.querySelector(".user-account-actions");"flex"===e.style.display?e.style.display="none":e.style.display="flex"}));var r=document.querySelector(".add-new-user-button");r&&r.addEventListener("click",(function(){document.querySelector(".add-new-user-form-wrapper").style.display="flex",document.body.classList.add("disable-scroll"),document.documentElement.classList.add("disable-scroll")})),document.querySelectorAll(".edit-user-button").forEach((function(e){e&&e.addEventListener("click",(function(e){var t=e.target.parentElement.parentElement.querySelector(".current-username").innerText,r=e.target.parentElement.parentElement.querySelector(".current-role").innerText,n=e.target.parentElement.parentElement.querySelector(".current-id").innerText;document.querySelector("#current-username").innerText=t,document.querySelector("#current-role").innerText=r,document.querySelector(".edit-user-form-submit-button").setAttribute("data-user-id",n),document.querySelector(".edit-user-form-wrapper").style.display="flex",document.body.classList.add("disable-scroll"),document.documentElement.classList.add("disable-scroll")}))})),document.querySelectorAll(".close-form-button").forEach((function(e){e.addEventListener("click",(function(e){e.target.parentElement.parentElement.style.display="none",document.body.classList.remove("disable-scroll"),document.documentElement.classList.remove("disable-scroll")}))})),document.querySelectorAll(".delete-user-button").forEach((function(t){t&&t.addEventListener("click",e.deleteUser.bind(e))}));var n=document.querySelector("#edit-user-form");n&&n.addEventListener("submit",this.editUser.bind(this))}}],t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n,i,c,u,s}();localStorage.getItem("token")||"/admin"!==location.pathname||(location.href="/"),window.addEventListener("DOMContentLoaded",(function(){new c})),window.addEventListener("scroll",(function(){window.scrollY>document.querySelector("header").getBoundingClientRect().top?document.querySelector("header").classList.add("toggle-main-header"):document.querySelector("header").classList.remove("toggle-main-header")})),window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight/2?document.querySelector(".scroll-to-top-button").style.display="block":document.querySelector(".scroll-to-top-button").style.display="none"})),document.querySelector(".scroll-to-top-button").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var u=document.querySelector("#hamburger-menu-icon"),s=document.querySelector("#navbar");u.addEventListener("click",(function(){!function(t,r){e?(gsap.to(t,{top:"-100vh",opacity:0,duration:.3,ease:"power2.inOut"}),e=!1,r.style.backgroundColor=""):(gsap.to(t,{top:"100%",opacity:1,duration:.8,ease:Power4.easeOut}),e=!0,r.style.background="rgba(0, 0, 0, 0.9)")}(s,document.querySelector("header"))}))})();