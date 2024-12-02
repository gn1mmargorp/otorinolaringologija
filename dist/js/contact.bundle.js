/*! For license information please see contact.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={username_or_email:"This field requires minimum 4 and maximum 15 characters",password:"This field requires minimum 7 characters","new-username":"This field requires minimum 4 and maximum 15 characters","new-email":"Invalid email address","new-password":"This field requires minimum 7 characters","new-modified-username":"This field requires minimum 4 and maximum 15 characters","new-modified-password":"This field requires minimum 7 characters","current-user-password":"This field requires minimum 7 characters","confirm-account-deletion-password":"This field requires minimum 7 characters","contact-email":"Invalid email address","final-error-message":"Please fill out all required fields"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(e,r,c)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var d="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function w(){}function b(){}function L(){}var E={};f(E,u,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(C([])));S&&S!==o&&i.call(S,u)&&(E=S);var k=L.prototype=w.prototype=Object.create(E);function q(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,r){function n(o,a,c,u){var s=m(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):r.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=m(t,r,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=m(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=L,a(k,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=f(L,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,f(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},q(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new j(h(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},q(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function n(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}const a=function(){return t=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.token=JSON.parse(localStorage.getItem("token"))||null,this.name_email_fieldsVisibility(),this.contactMessageForm=document.querySelector("#contact-message-form"),this.addClickListeners(),this.addInputListeners()},i=[{key:"sendMessage",value:(a=r().mark((function e(t){var n,o,i,a,c,u,s,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=this.token?"":document.querySelector("#contact-name").value,o=this.token?this.getEmail():document.querySelector("#contact-email").value,i=document.querySelector("#contact-message-subject").value,a=document.querySelector("#contact-message").value,e.prev=5,c={name:n||"",email:o,subject:i||"",message:a},this.emailValid()){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,fetch("".concat("http://localhost:8080","/api/contact-message"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 11:if((u=e.sent).ok){e.next=17;break}return e.next=15,u.json();case 15:throw s=e.sent,new Error(s.message);case 17:return e.next=19,u.json();case 19:l=e.sent,setTimeout((function(){alert(l.message),console.log(l.message)}),500),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),console.log(e.t0);case 26:case"end":return e.stop()}}),e,this,[[5,23]])})),c=function(){var e=this,t=arguments;return new Promise((function(r,o){var i=a.apply(e,t);function c(e){n(i,r,o,c,u,"next",e)}function u(e){n(i,r,o,c,u,"throw",e)}c(void 0)}))},function(e){return c.apply(this,arguments)})},{key:"getEmail",value:function(){return jwt_decode(this.token).email}},{key:"emailValid",value:function(){var e=document.querySelector("#contact-email");return"none"===e.parentElement.style.display||!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)}},{key:"name_email_fieldsVisibility",value:function(){if(this.token){var e=document.querySelector(".name-wrapper"),t=document.querySelector(".email-wrapper");e.style.display="none",t.style.display="none",t.querySelector("#contact-email").removeAttribute("required")}}},{key:"addClickListeners",value:function(){this.contactMessageForm.addEventListener("submit",this.sendMessage.bind(this))}},{key:"addInputListeners",value:function(){var t=document.querySelector("#contact-email");t.addEventListener("input",(function(r){var n,o,i,a,c;/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r.target.value)?function(e){var t=e.parentElement.querySelector(".error-message");t&&e.parentElement.removeChild(t)}(t):(o=(n=t).getAttribute("id"),i=n.parentElement,a=e[o],(c=i.querySelector(".error-message"))||((c=document.createElement("p")).className="error-message",c.textContent=a,i.appendChild(c)))}))}}],i&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,i,a,c}();window.addEventListener("scroll",(function(){window.scrollY>document.querySelector("header").getBoundingClientRect().top?document.querySelector("header").classList.add("toggle-main-header"):document.querySelector("header").classList.remove("toggle-main-header")})),window.addEventListener("DOMContentLoaded",(function(){new a}));var c=document.querySelector("#hamburger-menu-icon"),u=document.querySelector("#navbar"),s=!1;c.addEventListener("click",(function(){s?(gsap.to(u,{top:"-100vh",opacity:0,duration:.3,ease:"power2.inOut"}),s=!1,document.querySelector("header").style.backgroundColor=""):(gsap.to(u,{top:"100%",opacity:1,duration:.8,ease:Power4.easeOut}),s=!0,document.querySelector("header").style.background="rgba(0, 0, 0, 0.9)")}))})();