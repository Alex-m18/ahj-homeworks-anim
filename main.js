!function(n){var t={};function e(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(r,a,function(t){return n[t]}.bind(null,a));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function s(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},r=[],a=0;a<n.length;a++){var o=n[a],l=t.base?o[0]+t.base:o[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var u=s(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:d,updater:b(m,t),references:1}),r.push(d)}return r}function c(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=e.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function m(n,t,e,r){var a=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(o,i[t]):n.appendChild(o)}}function f(n,t,e){var r=e.css,a=e.media,o=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,p=0;function b(n,t){var e,r,a;if(t.singleton){var o=p++;e=h||(h=c(t)),r=m.bind(null,e,o,!1),a=m.bind(null,e,o,!0)}else e=c(t),r=f.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var a=s(e[r]);i[a].references--}for(var o=l(n,t),c=0;c<e.length;c++){var d=s(e[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=o}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([a]).join("\n")}var i,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}},function(n,t,e){var r=e(0),a=e(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});n.exports=i},function(n,t,e){var r=e(1),a=e(2),o=e(7);t=r(!1);var i=a(o);t.push([n.i,"body {\n  font-family: Roboto, sans-serif;\n  width: 30rem;\n}\n\n/*#region collapsible-widget */\n.collapsible-widget {\n  display: block;\n  margin: 1rem 1rem 1rem 1rem;\n}\n\n.collapsible-widget .button {\n  display: block;\n  width: 5.4rem;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  color: rgb(240, 255, 240);\n  background-color: #017BFF;\n  border: 3px solid #017BFF;\n  border-radius: .3rem;\n  margin: 0.5rem 0;\n  user-select: none;\n}\n\n.collapsible-widget .button:hover {\n  background-color: #0069D9;\n  border-color: #0069D9;\n  cursor: pointer;\n  transition: all 0.15s linear;\n}\n\n.collapsible-widget .button:active {\n  border-color: rgb(162, 224, 248);\n  transition: all 0.06s linear;\n}\n\n.collapsible-widget .collapsible-area {\n  overflow: hidden;\n  max-height: 10rem;\n  transition: max-height 0.3s ease-out;\n}\n\n.collapsible-widget .collapsible-area.hidden {\n  max-height: 0;\n  transition: max-height 0.3s ease-out;\n}\n\n.collapsible-widget .text-field {\n  font-weight: 300;\n  height: auto;\n  box-sizing: border-box;\n  margin: 0.5rem 0;\n  border: 0.05rem solid lightgray;\n  border-radius: 0.3rem;\n  padding: 1.5rem 1.2rem;\n}\n\n.copy {\n  display: block;\n  height: auto;\n  text-align: right;\n  font-size: small;\n  color: darkgray;\n  margin: 1rem 1rem;\n}\n/*#endregion End of collapsible widget*/\n\n/*#region like-button */\n.like-container {\n  display: flex;\n  justify-content: center;\n}\n\n.like-button {\n  width: 5.4rem;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  color: rgb(240, 255, 240);\n  background-color: red;\n  border: 3px solid red;\n  border-radius: .3rem;\n  margin: 0.5rem 0;\n  cursor: pointer;\n  user-select: none;\n}\n\n.like-button:active {\n  border-color: rgb(255, 116, 116);\n  transition: all 0.06s linear;\n}\n\n.heart {\n  position: absolute;\n  height: 2rem;\n  width: 2rem;\n  background-image: url("+i+");\n  background-size: cover;\n}\n\n.heart-animation0 { animation: heart-animation0 .5s normal; }\n.heart-animation1 { animation: heart-animation1 .5s normal; }\n.heart-animation2 { animation: heart-animation2 .5s normal; }\n.heart-animation3 { animation: heart-animation3 .5s normal; }\n\n.heart-animation0,\n.heart-animation1,\n.heart-animation2,\n.heart-animation3 { animation-timing-function: ease-out; }\n\n@keyframes heart-animation0 {\n  25%{ transform: translate(-50px, -50px); opacity: .75; }\n  50%{ transform: translate(0, -100px); opacity: .5; }\n  75%{ transform: translate(50px, -150px); opacity: .25; }\n  100%{ transform: translate(0, -200px); opacity: 0; }\n}\n\n@keyframes heart-animation1 {\n  25%{ transform: translate(0, -50px); opacity: .75; }\n  50%{ transform: translate(50px, -100px); opacity: .5; }\n  75%{ transform: translate(-50px, -150px); opacity: .25; }\n  100%{ transform: translate(0, -200px); opacity: 0; }\n}\n\n@keyframes heart-animation2 {\n  25%{ transform: translate(0, -50px); opacity: .75; }\n  50%{ transform: translate(-50px, -100px); opacity: .5; }\n  75%{ transform: translate(50px, -150px); opacity: .25; }\n  100%{ transform: translate(0, -200px); opacity: 0; }\n}\n\n@keyframes heart-animation3 {\n  25%{ transform: translate(50px, -50px); opacity: .75; }\n  50%{ transform: translate(0, -100px); opacity: .5; }\n  75%{ transform: translate(-50px, -150px); opacity: .25; }\n  100%{ transform: translate(0, -200px); opacity: 0; }\n}\n/*#endregion like-button */",""]),n.exports=t},function(n,t,e){"use strict";e.r(t),t.default=e.p+"9479a1295dcf9859be11dd551109abda.svg"},function(n,t,e){var r=e(0),a=e(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});n.exports=i},function(n,t,e){var r=e(1),a=e(2),o=e(10);t=r(!1);var i=a(o);t.push([n.i,":root {\n  --trans-time: .1s;\n}\n\n.callback-chat-widget {\n  position: fixed;\n  margin: 3rem 3rem;\n  right: 0;\n  bottom: 0;\n}\n\n.callback-chat-widget .chat-form {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  align-items: stretch;\n  background-color: whitesmoke;\n  right: 0;\n  bottom: 0;\n  height: 20rem;\n  width: 12rem;\n  padding: 1rem 1rem;\n  border: 1px solid lightgray;\n  border-radius: .5rem;\n  box-shadow: .3rem .3rem 1.5rem  lightgray;\n  transition: transform var(--trans-time) linear, opacity var(--trans-time) linear;\n}\n\n.callback-chat-widget .chat-form .close-btn {\n  position: absolute;\n  top: .6rem;\n  right: .8rem;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.1 linear;\n}\n\n.callback-chat-widget .chat-form .close-btn:hover {\n  transform: scale(1.1, 1.1);\n  text-shadow: .1em .1em .15em gray;\n}\n\n.callback-chat-widget .chat-form .title {\n  font-weight: bolder;\n  user-select: none;\n}\n\n.callback-chat-widget .chat-form textarea {\n  flex-grow: 1;\n  margin: 1rem 0;\n}\n\n.callback-chat-widget .chat-form .button {\n  display: block;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  color: rgb(240, 255, 240);\n  background-color: #017BFF;\n  border: 3px solid #017BFF;\n  border-radius: .3rem;\n  cursor: pointer;\n  user-select: none;\n}\n\n.callback-chat-widget .chat-form .button:hover {\n  background-color: #0069D9;\n  border-color: #0069D9;\n  cursor: pointer;\n  transition: all 0.15s linear;\n}\n\n.callback-chat-widget .chat-form .button:active {\n  border-color: rgb(162, 224, 248);\n  transition: all 0.06s linear;\n}\n\n.callback-chat-widget .show-form-btn {\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  bottom: 0;\n  height: 3rem;\n  width: 3rem;\n  cursor: pointer;\n  background-image: url("+i+");\n  background-size: cover;\n  filter: drop-shadow(.1rem .1rem .3rem  gray);\n  transition: transform var(--trans-time) linear,\n    opacity var(--trans-time) linear,\n    filter var(--trans-time) linear;\n}\n\n.callback-chat-widget .show-form-btn:hover {\n  transform: scale(1.1, 1.1);\n  filter: drop-shadow(.2rem .2rem .3rem  rgb(68, 68, 68));\n}\n\n.callback-chat-widget .hidden {\n  transform: scale(0, 0);\n  opacity: 0;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";e.r(t),t.default=e.p+"31124e40325ff0f91290f8ebeea6ab4b.svg"},function(n,t,e){"use strict";e.r(t);e(5),e(8);var r=e(3),a=e.n(r),o=e(4),i=e.n(o);new(function(){function n(t){a()(this,n),this.container=t,this.element=null,this.form=null}return i()(n,[{key:"init",value:function(){this.element=document.createElement("div"),this.element.classList.add("callback-chat-widget"),this.container.appendChild(this.element),this.form=document.createElement("div"),this.form.classList.add("chat-form","hidden"),this.form.innerHTML='\n      <div class="close-btn">X</div>\n      <div class="title">Напишите нам</div>\n      <textarea></textarea>\n      <div class="send-btn button">Отправить</div>\n    ',this.element.appendChild(this.form),this.showFormBtn=document.createElement("div"),this.showFormBtn.classList.add("show-form-btn"),this.element.appendChild(this.showFormBtn),this.form.querySelector(".close-btn").addEventListener("click",this.toggleForm.bind(this)),this.showFormBtn.addEventListener("click",this.toggleForm.bind(this))}},{key:"toggleForm",value:function(){this.form.classList.toggle("hidden"),this.showFormBtn.classList.toggle("hidden"),this.showFormBtn.style.zIndex=this.showFormBtn.classList.contains("hidden")?-1:999}}]),n}())(document.body).init()}]);