(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),o=c(4),a=(c(9),c(10),c(1)),r=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(a.useState)("Jam"),e=Object(o.a)(t,2),c=e[0],n=e[1],s=function(t){var e=t.good,s=e===c;return Object(r.jsxs)("tr",{"data-cy":"Good",className:s?"has-background-success-light":"",children:[Object(r.jsx)("td",{children:s?Object(r.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return n(null)},children:"-"}):Object(r.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return n(e)},children:"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]})};return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return n("")}})]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:i.map((function(t){return Object(r.jsx)(s,{good:t},t)}))})})]})};s.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.76e3bc1d.chunk.js.map