(this.webpackJsonpb1=this.webpackJsonpb1||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),l=c(11),r=c.n(l),s=(c(16),c(4)),i=c(8),o=c(5),u=c.n(o),j=(c(17),c(0)),d=function(e){var t=e.children,c=e.css,a=e.elClassName,n=e.hovered,l=e.disabled,r=e.onClick,o=Object(i.a)(e,["children","css","elClassName","hovered","disabled","onClick"]),d=u()("btn",n&&"hovered",a),b=n?Object(s.a)(Object(s.a)({},c),{},{backgroundColor:null,color:c.backgroundColor||"#fff"}):Object(s.a)({},c);return Object(j.jsx)("button",Object(s.a)(Object(s.a)({className:d,disabled:l,style:Object(s.a)({},b),onClick:r,onMouseLeave:function(e){return function(t){e&&(t.target.style.backgroundColor=null,t.target.style.color=c.backgroundColor||"#fff")}}(n),onMouseOver:function(e){return function(t){e&&(t.target.style.backgroundColor=c.backgroundColor||"green",t.target.style.color="#fff")}}(n)},o),{},{children:t}))};d.defaultProps={children:Object(j.jsx)(j.Fragment,{}),css:{},elClassName:"",hovered:!1,disabled:!1,onClick:function(){}};var b=d,f=c(10),h=c.n(f),O=(c(20),n.a.forwardRef((function(e,t){e.id;var c=e.elClassName,a=e.label,n=e.placeholder,l=e.error,r=Object(i.a)(e,["id","elClassName","label","placeholder","error"]),o=u()("input-wrapper",c,l&&"error");return Object(j.jsxs)("div",{className:o,children:[Object(j.jsxs)("label",{className:"input__label",children:[a&&Object(j.jsxs)("span",{className:"label__text",children:[a,r.required&&Object(j.jsx)("span",{style:{color:"red",marginLeft:"0.5em"},children:"*"})]}),Object(j.jsx)("input",Object(s.a)({ref:t},r))]}),Object(j.jsx)("span",{className:"input__placeholder",children:n}),Object(j.jsx)("span",{className:"input__error",children:l})]})})));O.defaultProps={elClassName:"",label:"",placeholder:"",error:""};var p=O,m=c(2),v=(c(21),c(3)),x=(c(22),c(23),n.a.createContext({as:7})),g=function(e){var t=e.data,c=e.deleteHandler,n=e.changeTotalProfit,l=Object(a.useContext)(x),r=l.availableFunds,s=l.action,i=Object(a.useState)(t.profit),o=Object(m.a)(i,2),u=o[0],d=o[1],b=Object(a.useState)(t.amountToSell),f=Object(m.a)(b,2),h=f[0],O=f[1],v=Object(a.useState)(0),g=Object(m.a)(v,2),_=g[0],C=g[1];return Object(a.useEffect)((function(){if(u>0&&r>0?"buy"===s?C(r*u/100+r):"sell"===s&&C(r-r*u/100):C(r),u>0&&r>0&&h>0){var e=r*u/100*h/100;"buy"===s?n(t.id,e):"sell"===s&&n(t.id,-e)}else n(t.id,0)}),[r,u,h,s]),Object(a.useEffect)((function(){return O(t.amountToSell)}),[t.amountToSell]),Object(j.jsxs)("div",{className:"take-profit__inputs",children:[Object(j.jsx)(p,{id:1,type:"number",elClassName:"profit",placeholder:"%",value:u,onInput:function(e){return d(e.target.value<=100?e.target.value:100)}}),Object(j.jsxs)("div",{className:"trade-price",children:[Object(j.jsx)("span",{children:_})," ",Object(j.jsx)("span",{children:"USD"})]}),Object(j.jsx)(p,{id:3,type:"number",elClassName:"amount-to-sell",placeholder:"%",value:h,onInput:function(e){return O(e.target.value<=100?e.target.value:100)}}),Object(j.jsx)("div",{className:"take-profit__cancel",children:Object(j.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24",onClick:c,children:Object(j.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]})};g.defaultProps={data:{},deleteHandler:function(){},changeTotalProfit:function(){}};var _=g,C=function(e,t){return function(){var c=h()(),a=e.length+2<=100&&e.length+2,n=20,l=Object(v.a)(e);l.length&&l[0].amountToSell>30&&(l[0].amountToSell=l[0].amountToSell-20),l.length||(n=100),l[l.length||0]={id:c,profit:a,tradePrice:0,amountToSell:n,finalProfit:0},t(Object(v.a)(l))}},N=function(e,t,c){return function(){var a=Object(v.a)(e),n=a.findIndex((function(e){return e.id===c}));n>-1&&(a=0===n?Object(v.a)(a.slice(1)):[].concat(Object(v.a)(a.slice(0,n)),Object(v.a)(a.slice(n+1)))),t(Object(v.a)(a))}},k=function(e){var t=e.totalItems,c=Object(a.useState)(!1),n=Object(m.a)(c,2),l=n[0],r=n[1],s=Object(a.useState)([]),i=Object(m.a)(s,2),o=i[0],d=i[1],b=Object(a.useState)(0),f=Object(m.a)(b,2),h=f[0],O=f[1],p=u()("form__take-profit");return Object(a.useEffect)((function(){l&&!o.length?C(o,d)():d([])}),[l]),Object(a.useEffect)((function(){return!o.length&&r(!1)}),[o.length]),Object(a.useEffect)((function(){if(o.length){for(var e=0,t=0;t<o.length;t++)e+=o[t].finalProfit;O(e)}}),[o]),Object(j.jsxs)("div",{className:p,children:[Object(j.jsxs)("div",{className:"take-profit__switch",children:[Object(j.jsx)("span",{children:"Take profit"}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",defaultValue:!1}),Object(j.jsx)("div",{className:"switch__toggle ".concat(l&&o.length?"enable":"disable"),onClick:function(){return r((function(e){return!e}))}})]})]}),Object(j.jsxs)("div",{className:"take-profit__content",style:{display:o.length?null:"none"},children:[Object(j.jsxs)("div",{className:"take-profit__titles",children:[Object(j.jsx)("span",{children:"Profit"}),Object(j.jsx)("span",{children:"Trade price"}),Object(j.jsx)("span",{children:"Amount to sell"})]}),o&&o.length?o.map((function(e){return Object(j.jsx)(_,{data:e,changeTotalProfit:(t=o,c=d,function(e,a){var n=Object(v.a)(t);n.find((function(t){t.id===e&&(t.finalProfit=a)})),c(Object(v.a)(n))}),deleteHandler:N(o,d,e.id)},e.id);var t,c})):"",o.length<t&&Object(j.jsx)("div",{className:"add-item",children:Object(j.jsxs)("button",{onClick:C(o,d),children:[Object(j.jsx)("svg",{className:"MuiSvgIcon-root take-profit__add-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(j.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})}),Object(j.jsxs)("span",{children:["Add profit target ",o.length,"/",t]})]})}),Object(j.jsxs)("div",{className:"take-profit__projected-profit",children:[Object(j.jsx)("span",{children:"Projected profit"}),Object(j.jsxs)("span",{className:"take-profit__projected-profit-value",children:[Object(j.jsxs)("span",{children:[h," "]}),Object(j.jsx)("span",{children:"USD"})]})]})]})]})};k.defaultProps={totalItems:5};var S=k,y=function(e){var t=e.elClassName,c=Object(a.useState)("buy"),n=Object(m.a)(c,2),l=n[0],r=n[1],s=Object(a.useState)(0),i=Object(m.a)(s,2),o=i[0],d=i[1],f=Object(a.useState)(0),h=Object(m.a)(f,2),O=h[0],v=h[1],g=Object(a.useState)(0),_=Object(m.a)(g,2),C=_[0],N=_[1],k=u()("form_trade",t),y=function(e){return function(){e!==l&&r(e)}};return Object(a.useEffect)((function(){return O>0&&o>0&&N(O*o),0}),[o,O]),Object(j.jsx)(x.Provider,{value:{availableFunds:C,action:l},children:Object(j.jsxs)("div",{className:k,children:[Object(j.jsx)("div",{className:"form__title",children:"Binance: BTC / USDT"}),Object(j.jsxs)("div",{className:"form__type-switch",children:[Object(j.jsx)(b,{css:{backgroundColor:"#4CAF50",width:"50%",height:"2.3em"},onClick:y("buy"),hovered:"buy"!==l&&!0,children:"Buy"}),Object(j.jsx)(b,{css:{backgroundColor:"#F44336",width:"50%",height:"2.3em"},onClick:y("sell"),hovered:"sell"!==l&&!0,children:"Sell"})]}),Object(j.jsx)(p,{elClassName:"form__price",label:"Price",id:"in-1",placeholder:"USD",type:"number",required:!0,value:o,onInput:function(e){return d(e.target.value)}}),Object(j.jsx)(p,{elClassName:"form__amount",label:"Amount",id:"in-2",placeholder:"USD",type:"number",required:!0,value:O,onInput:function(e){return v(e.target.value)}}),Object(j.jsx)(p,{elClassName:"form__total",label:"Total",id:"in-3",placeholder:"USD",type:"number",onInput:function(e){o>0?v(e.target.value/o):N(0)},value:C}),Object(j.jsx)(S,{totalItems:5}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)(b,{css:{backgroundColor:"#4CAF50",width:"100%",height:"2.4em",fontSize:"1.1em"},children:"By BTC"})})]})})};y.defaultProps={};var P=y,T=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(P,{})})};r.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.a1bd0485.chunk.js.map