(this["webpackJsonpyumemi-codetest"]=this["webpackJsonpyumemi-codetest"]||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),r=a.n(s),i=a(7),o=a.n(i),u=a(17),l=a(3),j=a(18),d=a.n(j).a.create({headers:{"X-API-KEY":"pqnw5uW80Qxz2VdrRzzcUMJvwnkylNrIoVYjHLPg"}}),p=(a(44),a(19)),f=a.n(p),h=a(6),b=a.n(h),O=a(0);function v(e){var t=e.data,a=e.cate,n=e.prefs,c={chart:{height:500},title:{text:t.label},xAxis:{title:{text:"\u5e74\u5ea6"},categories:a,crosshair:!0},yAxis:{min:0,title:{text:"\u4eba\u53e3\u6570"}},series:n};return Object(O.jsx)(f.a,{highcharts:b.a,options:c})}function m(e){var t=e.list,a=(e.value,e.handleonChange);return Object(O.jsxs)("div",{className:"city",children:[Object(O.jsx)("div",{className:"list-province",children:"\u90fd\u9053\u5e9c\u770c"}),Object(O.jsx)("div",{className:"choose-city",children:t.map((function(e){return Object(O.jsxs)("div",{className:"city-name",children:[Object(O.jsx)("input",{type:"checkbox",id:"city",name:"",value:e.prefCode,onChange:a})," ",Object(O.jsx)("p",{children:e.prefName})]},e.prefCode)}))})]})}var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),i=r[0],j=r[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),h=f[0],b=f[1],x=Object(n.useState)([]),g=Object(l.a)(x,2),y=g[0],N=(g[1],Object(n.useState)([])),C=Object(l.a)(N,2),S=C[0],k=C[1],w=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=".concat(t));case 2:a=e.sent,console.log(a),"404"!=a.data&&j(a.data.result.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d.get("https://opendata.resas-portal.go.jp/api/v1/prefectures").then((function(e){console.log({res:e}),c(e.data.result)}))}),[]);var E=Object(n.useState)(""),I=Object(l.a)(E,2),F=I[0],P=I[1],z=Object(n.useState)(!0),A=Object(l.a)(z,2),J=(A[0],A[1]);Object(n.useEffect)((function(){console.log("report",i),null!=i&&(k(i.data.map((function(e){return e.year}))),y.push({name:F+"\u306e\u7dcf\u4eba\u53e3",data:i.data.map((function(e){return e.value}))}))}),[i]);var L="";return Object(n.useEffect)((function(){w(h)}),[h]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h1",{children:"\u65e5\u672c\u306e\u90fd\u9053\u5e9c\u770c\u4eba\u53e3\u30c1\u30e3\u30fc\u30c8"})}),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(m,{list:a,value:h,handleonChange:function(e){if(1==e.target.checked)b(e.target.value),a.map((function(t){t.prefCode==e.target.value&&P(t.prefName)})),J(!0);else{J(!1),a.map((function(t){t.prefCode==e.target.value&&(L=t.prefName)}));var t=y.findIndex((function(e){return e.name==L+"\u306e\u7dcf\u4eba\u53e3"}));console.log("index",t),-1!=t&&y.splice(t,1)}}}),null!=i&&Object(O.jsx)("div",{className:"chart",children:Object(O.jsx)(v,{data:i,cate:S,prefs:y})})]})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.fa4d6b41.chunk.js.map