(this["webpackJsonpreact-app-form"]=this["webpackJsonpreact-app-form"]||[]).push([[0],{20:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var c=t(0),a=t(15),l=t.n(a),o=(t(20),t(3)),u=t(6),r=t.n(u),i=t(2),s=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,48))})),j=Object(c.lazy)((function(){return t.e(3).then(t.bind(null,52))})),b=Object(c.lazy)((function(){return t.e(4).then(t.bind(null,49))})),f=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,50))})),O=function(){var n=Object(c.useState)("welcome"),e=Object(o.a)(n,2),t=e[0],a=e[1],l=Object(c.useState)(null),u=Object(o.a)(l,2),O=u[0],d=u[1],m=Object(c.useState)(null),p=Object(o.a)(m,2),h=p[0],x=p[1],v=Object(c.useState)("FIXED"),k=Object(o.a)(v,2),y=k[0];k[1];Object(c.useEffect)((function(){r.a.get("https://form-staff.cyclic.app/allNominators").then((function(n){x(n.data),console.log(n.data)}))}),[y]);var S=function(n){a(n?"endscreen":"form")};return Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)(c.Suspense,{fallback:Object(i.jsx)("p",{className:"component"}),children:["welcome"===t?Object(i.jsx)(s,{handleClick:function(){a("form")}}):null,"\\    ","form"===t?Object(i.jsx)(j,{handleClick:function(n){return function(n){d(n),a("confirmation")}(n)},fav:O}):null,"confirmation"===t?Object(i.jsx)(b,{fav:O,dataNominators:h,next:function(){return S(!0)},back:function(){return S(!1)}}):null,"endscreen"===t?Object(i.jsx)(f,{}):null]})})};l.a.render(Object(i.jsx)("div",{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.717bc116.chunk.js.map