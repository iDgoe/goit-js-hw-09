!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("6JpON"),l=document.querySelector(".form");function c(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}console.log(l),l.addEventListener("submit",(function(o){o.preventDefault();var n=Number(l.delay.value),t=Number(l.step.value),i=Number(l.amount.value);console.log(n,t,i);for(var a=1;a<=i;a+=1)c(a,n).then((function(o){var n=o.position,t=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.e0a255e2.js.map
