(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),u=new URL(t(145),t.b),p=new URL(t(450),t.b),l=i()(o()),d=s()(u),f=s()(p);l.push([n.id,`@font-face {\n  font-family: 'NatureBeauty';\n  src: url(${d});\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  margin: 20px auto;\n  background: url(${f});\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  color: #fff;\n  text-align: center;\n}\n\n#content {\n  margin: 10% auto;\n  text-align: center;\n  width: 600px;\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n#content h1 {\n  width: 50%;\n  text-align: center;\n  margin: 20px auto;\n  font-family: 'NatureBeauty', 'Segoie UI', Verdana, sans-serif;\n  font-size: 3.5rem;\n}\n\nbutton {\n  padding: 10px 15px;\n  font-weight: 800;\n  text-transform: uppercase;\n  margin: 0 10px;\n  cursor: pointer;\n  border: none;\n}\n\nbutton:hover {\n  background-color: rgba(170, 166, 166, 0.4);\n  text-decoration: underline;\n  color: #fff;\n  transition: all 0.3s;\n}\n\ndiv {\n  color: #fff;\n}\n\np {\n  margin: 10px;\n}\n\n.price {\n  margin-bottom: 20px;\n}\n\n#contact-info {\n  list-style: none;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n#contact-info li {\n  margin: 10px;\n}\n`,""]);const m=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var p=t(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},450:(n,e,t)=>{n.exports=t.p+"f7b3822963869a06f24e.jpg"},145:(n,e,t)=>{n.exports=t.p+"81dd22128fac9de9a091.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),u=t(540),p=t.n(u),l=t(113),d=t.n(l),f=t(208),m={};function h(){const n=document.querySelector("#content"),e=document.createElement("h1");e.textContent="Wine & Dine";const t=document.createElement("p");return t.textContent="We have the best atmosphere, customer service and selection of wines.",n.append(e,t),n}m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals,h();const v=document.querySelector("#home"),g=document.querySelector("#menu"),y=document.querySelector("#contact");function b(){document.querySelector("#content").innerHTML=""}v.addEventListener("click",(()=>{b(),h()})),g.addEventListener("click",(()=>{b(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML="<h2>Pizza</h2>\n        <p>Your choice of toppings. 8in, 12in, or 14in</p>\n        <p class='price'>$14.99 / 21.99 / 26.99</p>\n\n        <h2>Steak</h2>\n        <p>With a side of fries or mashed potatoes</p>\n        <p class='price'>$22.99</p>\n\n        <h2>Gourmet Cheese Burger</h2>\n        <p>Ketchup, lettuce, and grilled onions</p>\n        <p class='price'>$13.99</p>\n\n        <h2>Wine</h2>\n        <p>A bottle of selected red or white wine</p>\n        <p class='price'>$45</p>\n        ",n.appendChild(e)}()})),y.addEventListener("click",(()=>{b(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML='<ul id="contact-info">\n  <li>Phone: 554-323-22</li>\n                        <li>\n  Address: Some street 23</li>\n  </ul>',n.appendChild(e)}()}))})()})();