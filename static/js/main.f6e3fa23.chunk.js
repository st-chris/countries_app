(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t){},32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=a(2),m=a(7);var i={color:"#fff",textDecoration:"none"},u=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Countries App"),c.a.createElement(o.b,{style:i,to:"/Home"},"Home")," | ",c.a.createElement(o.b,{style:i,to:"/countries"},"Country index")," | ",c.a.createElement(o.b,{style:i,to:"/list"},"Country list")," | ",c.a.createElement(o.b,{style:i,to:"/facts"},"Facts"))},s=function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Page not Found"))},E=a(14),d=a.n(E),p=a(29),f=a(10),g=a(30),h=a.n(g),v=function(e,t){var a=Object(n.useState)(t),c=Object(f.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)(!0),m=Object(f.a)(o,2),i=m[0],u=m[1],s=Object(n.useState)(!1),E=Object(f.a)(s,2),g=E[0],v=E[1],b=function(){var e=Object(p.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),u(!0),e.prev=2,e.next=5,h()(t);case 5:a=e.sent,l(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:u(!1);case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){b(e)},[e]),{data:r,isLoading:i,isError:g}},b=function(e){var t=v("https://restcountries.eu/rest/v2/all"),a=t.data,n=t.isLoading,r=t.isError;return c.a.createElement("div",null,r&&c.a.createElement("div",null,"Something went wrong..."),n?c.a.createElement("div",null,"Loading data..."):c.a.createElement(m.a,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{data:a,routes:e.routes}))}}))},N=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Home View"),c.a.createElement("p",null,"Click on Country Index or Country List for more information."))},y=a(31),k=a.n(y),w=function(e){var t=e.match,a=e.data;return c.a.createElement("div",null,k()(a),c.a.createElement("div",{className:"countries"},c.a.createElement("ul",null,t.params.letter?a.filter(function(e){return e.name.startsWith(t.params.letter)}).map(function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})," ",c.a.createElement(o.b,{to:"".concat(t.url,"/").concat(e.alpha2Code)},e.name))}):a.map(function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})," ",c.a.createElement(o.b,{to:"".concat(t.url,"/").concat(e.name.charAt(0),"/").concat(e.alpha2Code)},e.name))}))))},C=function(e){var t=e.data,a=e.match,n=e.history,r=t.find(function(e){return e.alpha2Code===a.params.country}),l=function(){return n.goBack()};return r?c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement("button",{onClick:l,className:"btn"},"Go back..")),c.a.createElement("div",{className:"ctr-container"},c.a.createElement("div",{className:"ctr-grid-container"},c.a.createElement("div",{className:"ctr-item-head"},c.a.createElement("span",null,c.a.createElement("h1",null,r.name," (",r.region,")")," ",r.nativeName)),c.a.createElement("div",{className:"ctr-item"},c.a.createElement("img",{src:r.flag,alt:r.name})),c.a.createElement("div",{className:"ctr-item"},c.a.createElement("span",null,"Population: ",c.a.createElement("h2",null,r.population.toLocaleString("en")))),c.a.createElement("div",{className:"ctr-item"},c.a.createElement("span",null,"Capital: ",c.a.createElement("h2",null,r.capital))),c.a.createElement("div",{className:"ctr-item"},c.a.createElement("span",null,"Language(s): ",c.a.createElement("br",null),c.a.createElement("h2",null,r.languages.map(function(e,t){return t>0?", "+e.name:e.name}))))))):c.a.createElement("div",null,c.a.createElement("h3",null,"Country not found  ",c.a.createElement("button",{onClick:l,className:"btn"},"Go back..")))},x=function(e){var t,a=e.data,n=[];for(var r in a)n.push(a[r].region?a[r].region:"No region");var l=(n=(t=n,t.reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[])).sort()).map(function(e,t){return c.a.createElement("option",{key:t,value:e},e)}),m=function(e){var t=e.currentTarget.value,n=document.getElementById("ddlRegion").value;if("allregions"===n){var c=a.sort(function(e,a){return e[t]-a[t]});u(c)}else{var r=a.filter(function(e){return e.region===n}).sort(function(e,a){return e[t]-a[t]});u(r)}},i=function(e){var t=e.currentTarget.value,n=document.getElementById("ddlRegion").value;if("allregions"===n){var c=a.sort(function(e,a){return a[t]-e[t]});u(c)}else{var r=a.filter(function(e){return e.region===n}).sort(function(e,a){return a[t]-e[t]});u(r)}},u=function(e){var t="";(e||a).map(function(e,a){return t+="<tr key=".concat(a,'>\n                <td class="c1"><img src=').concat(e.flag,' width="15px" alt=').concat(e.name,' /></td>\n                <td><a href="/countries/').concat(e.name.charAt(0),"/").concat(e.alpha2Code,'">').concat(e.name,"</a></td>\n                <td>").concat(e.region,'</td>\n                <td class="c-m">').concat(e.population.toLocaleString("en"),'</td>\n                <td class="c-m">').concat(e.area?e.area.toLocaleString("en"):"n/a","</td>\n              </tr>")}),document.getElementById("hier").innerHTML=t};return c.a.createElement("div",{className:"ctr-container"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,c.a.createElement("label",null,c.a.createElement("select",{id:"ddlRegion",className:"select",onChange:function(){var e=document.getElementById("ddlRegion").value;if("allregions"===e)u();else{var t=a.filter(function(t){return t.region===e});u(t)}}},c.a.createElement("option",{value:"allregions"},"All Regions"),l))),c.a.createElement("th",{className:"c-m"},c.a.createElement("button",{value:"population",onClick:m},"\u2191")," Population ",c.a.createElement("button",{value:"population",onClick:i},"\u2193")),c.a.createElement("th",{className:"c-m"},c.a.createElement("button",{value:"area",onClick:m},"\u2191")," Area (km2)",c.a.createElement("button",{value:"area",onClick:i},"\u2193")))),c.a.createElement("tbody",{id:"hier"},a.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"c1"},c.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/countries/".concat(e.name.charAt(0),"/").concat(e.alpha2Code)},e.name)),c.a.createElement("td",null,e.region?e.region:e.region="No region"),c.a.createElement("td",{className:"c-m"},e.population.toLocaleString("en")),c.a.createElement("td",{className:"c-m"},e.area?e.area.toLocaleString("en"):"n/a"))}))))},L=function(e){var t=e.data,a=v("https://ipapi.co/country",[]),n=a.data,r=a.isLoading,l=a.isError,o=r?{name:"",flag:"",area:""}:t.find(function(e){return e.alpha2Code===n}),m=function(e,t){for(var a=e[0][t],n=e[0],c=1;c<e.length;c++){var r=e[c][t],l=e[c];r>a&&(a=r,n=l)}return n},i=r?"":m(t,"population"),u=r?"":m(t,"area"),s="".concat(i.name," has ").concat((i.population/o.population).toFixed()," times more inhabitants than ").concat(o.name,"."),E="".concat(u.name," is ").concat((u.area/o.area).toFixed()," times bigger than ").concat(o.name," (in km2).");return c.a.createElement("div",null,l&&c.a.createElement("div",null,"Something went wrong.."),r?c.a.createElement("div",null,"Loading data..."):c.a.createElement("div",{className:"ctr-container"},c.a.createElement("section",{className:"fct-grid-container"},c.a.createElement("div",{className:"fct-item-head"},c.a.createElement("span",null,c.a.createElement("h1",null,"Facts"))),c.a.createElement("div",{className:"fct-item"},c.a.createElement("b",null,"Your country (IP):")),c.a.createElement("div",{className:"fct-item"},c.a.createElement("img",{src:o.flag,alt:o.name})),c.a.createElement("div",{className:"fct-item"},c.a.createElement("span",null,c.a.createElement("h2",null,o.name),"Population: ",o.population.toLocaleString("en")," ",c.a.createElement("br",null),"Area: ",o.area.toLocaleString("en")," km2")),c.a.createElement("div",{className:"fct-item"},c.a.createElement("b",null,"Biggest country in population:")),c.a.createElement("div",{className:"fct-item"},c.a.createElement("img",{src:i.flag,alt:i.name})),c.a.createElement("div",{className:"fct-item"},c.a.createElement("span",null,c.a.createElement("h2",null,i.name),i.population.toLocaleString("en"))),c.a.createElement("div",{className:"fct-item-ft"},c.a.createElement("em",null,s)),c.a.createElement("div",{className:"fct-item"},c.a.createElement("b",null,"Biggest country in area (km2):")),c.a.createElement("div",{className:"fct-item"},c.a.createElement("img",{src:u.flag,alt:u.name})),c.a.createElement("div",{className:"fct-item"},c.a.createElement("span",null,c.a.createElement("h2",null,u.name),u.area.toLocaleString("en")," km2")),c.a.createElement("div",{className:"fct-item-ft"},c.a.createElement("em",null,E)))))},S=(a(59),[{path:"/",component:N,exact:""},{path:"/Home",component:N,exact:""},{path:"/Countries",component:w,exact:""},{path:"/countries/:letter",component:w,exact:""},{path:"/countries/:letter/:country",component:C,exact:""},{path:"/list",component:x},{path:"/facts",component:L},{path:"/:WhereTheHeckIsThat",component:s},{path:"/:WhereTheHeckIsThat",component:s}]);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,{basename:"/countries"},c.a.createElement(function(e){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement("div",{className:"content"},c.a.createElement(m.c,null,S.map(function(t,a){return c.a.createElement(b,Object.assign({key:a},t,e))})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.f6e3fa23.chunk.js.map