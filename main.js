(()=>{var e={764:()=>{var e=document.querySelector(".table__list");var t=function(t){console.log(t),t.forEach((function(t){var o,r;e.append((o=t,(r=document.querySelector(".table__template").content.querySelector(".table__item").cloneNode(!0)).querySelector(".table__id").textContent=o.id,r.querySelector(".table__text").textContent=o.body,r.querySelector(".table__title").textContent=o.title,r))}))};fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){return console.error(e)}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(764)})()})();