(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(2),m=a(7);var i={color:"#fff",textDecoration:"none"},u=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Countries App"),r.a.createElement(o.b,{style:i,to:"/Home"},"Home")," | ",r.a.createElement(o.b,{style:i,to:"/countries"},"Country index")," | ",r.a.createElement(o.b,{style:i,to:"/list"},"Country list")," | ",r.a.createElement(o.b,{style:i,to:"/facts"},"Facts"))},s=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Page not Found"))},d=a(14),E=a.n(d),p=a(29),f=a(10),g=a(30),h=a.n(g),v=function(e,t){var a=Object(n.useState)(t),r=Object(f.a)(a,2),c=r[0],l=r[1],o=Object(n.useState)(!0),m=Object(f.a)(o,2),i=m[0],u=m[1],s=Object(n.useState)(!1),d=Object(f.a)(s,2),g=d[0],v=d[1],b=function(){var e=Object(p.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),u(!0),e.prev=2,e.next=5,h()(t);case 5:a=e.sent,l(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:u(!1);case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){b(e)},[e]),{data:c,isLoading:i,isError:g}},b=function(e){var t=v("https://restcountries.eu/rest/v2/all"),a=t.data,n=t.isLoading,c=t.isError;return r.a.createElement("div",null,c&&r.a.createElement("div",null,"Something went wrong..."),n?r.a.createElement("div",null,"Loading data..."):r.a.createElement(m.a,{path:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{data:a,routes:e.routes}))}}))},N=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Home View"),r.a.createElement("p",null,"Click on Country Index or Country List for more information."))},y=function(e){var t=e.map(function(e){return e.name.substring(0,1)}).filter(function(e,t,a){return a.indexOf(e)===t}).sort();return console.log("buttons reloaded"),t.map(function(e,t){return r.a.createElement(o.b,{className:"btn",key:t,to:"/countries/".concat(e)},e)})},k=function(e){var t=e.match,a=e.data;return r.a.createElement("div",null,y(a),r.a.createElement("div",{className:"countries"},r.a.createElement("ul",null,t.params.letter?a.filter(function(e){return e.name.startsWith(t.params.letter)}).map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})," ",r.a.createElement(o.b,{to:"".concat(t.url,"/").concat(e.alpha2Code)},e.name))}):a.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})," ",r.a.createElement(o.b,{to:"".concat(t.url,"/").concat(e.name.charAt(0),"/").concat(e.alpha2Code)},e.name))}))))},w=function(e){var t=e.data,a=e.match,n=e.history,c=t.find(function(e){return e.alpha2Code===a.params.country}),l=function(){return n.goBack()};return c?r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("button",{onClick:l,className:"btn"},"Go back..")),r.a.createElement("div",{className:"ctr-container"},r.a.createElement("div",{className:"ctr-grid-container"},r.a.createElement("div",{className:"ctr-item-head"},r.a.createElement("span",null,r.a.createElement("h1",null,c.name," (",c.region,")")," ",c.nativeName)),r.a.createElement("div",{className:"ctr-item"},r.a.createElement("img",{src:c.flag,alt:c.name})),r.a.createElement("div",{className:"ctr-item"},r.a.createElement("span",null,"Population: ",r.a.createElement("h2",null,c.population.toLocaleString("en")))),r.a.createElement("div",{className:"ctr-item"},r.a.createElement("span",null,"Capital: ",r.a.createElement("h2",null,c.capital))),r.a.createElement("div",{className:"ctr-item"},r.a.createElement("span",null,"Language(s): ",r.a.createElement("br",null),r.a.createElement("h2",null,c.languages.map(function(e,t){return t>0?", "+e.name:e.name}))))))):r.a.createElement("div",null,r.a.createElement("h3",null,"Country not found  ",r.a.createElement("button",{onClick:l,className:"btn"},"Go back..")))},C=function(e){var t,a=e.data,n=[];for(var c in a)n.push(a[c].region?a[c].region:"No region");var l=(n=(t=n,t.reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[])).sort()).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}),m=function(e){var t=e.currentTarget.value,n=document.getElementById("ddlRegion").value;if("allregions"===n){var r=a.sort(function(e,a){return e[t]-a[t]});u(r)}else{var c=a.filter(function(e){return e.region===n}).sort(function(e,a){return e[t]-a[t]});u(c)}},i=function(e){var t=e.currentTarget.value,n=document.getElementById("ddlRegion").value;if("allregions"===n){var r=a.sort(function(e,a){return a[t]-e[t]});u(r)}else{var c=a.filter(function(e){return e.region===n}).sort(function(e,a){return a[t]-e[t]});u(c)}},u=function(e){var t="";(e||a).map(function(e,a){return t+="<tr key=".concat(a,'>\n                <td class="c1"><img src=').concat(e.flag,' width="15px" alt=').concat(e.name,' /></td>\n                <td><a href="/countries/').concat(e.name.charAt(0),"/").concat(e.alpha2Code,'">').concat(e.name,"</a></td>\n                <td>").concat(e.region,'</td>\n                <td class="c-m">').concat(e.population.toLocaleString("en"),'</td>\n                <td class="c-m">').concat(e.area?e.area.toLocaleString("en"):"n/a","</td>\n              </tr>")}),document.getElementById("hier").innerHTML=t};return r.a.createElement("div",{className:"ctr-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,r.a.createElement("label",null,r.a.createElement("select",{id:"ddlRegion",className:"select",onChange:function(){var e=document.getElementById("ddlRegion").value;if("allregions"===e)u();else{var t=a.filter(function(t){return t.region===e});u(t)}}},r.a.createElement("option",{value:"allregions"},"All Regions"),l))),r.a.createElement("th",{className:"c-m"},r.a.createElement("button",{value:"population",onClick:m},"\u2191")," Population ",r.a.createElement("button",{value:"population",onClick:i},"\u2193")),r.a.createElement("th",{className:"c-m"},r.a.createElement("button",{value:"area",onClick:m},"\u2191")," Area (km2)",r.a.createElement("button",{value:"area",onClick:i},"\u2193")))),r.a.createElement("tbody",{id:"hier"},a.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"c1"},r.a.createElement("img",{src:e.flag,width:"15px",alt:e.name})),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/countries/".concat(e.name.charAt(0),"/").concat(e.alpha2Code)},e.name)),r.a.createElement("td",null,e.region?e.region:e.region="No region"),r.a.createElement("td",{className:"c-m"},e.population.toLocaleString("en")),r.a.createElement("td",{className:"c-m"},e.area?e.area.toLocaleString("en"):"n/a"))}))))},x=function(e){var t=e.data,a=v("https://ipapi.co/country",[]),n=a.data,c=a.isLoading,l=a.isError,o=c?{name:"",flag:"",area:""}:t.find(function(e){return e.alpha2Code===n}),m=function(e,t){for(var a=e[0][t],n=e[0],r=1;r<e.length;r++){var c=e[r][t],l=e[r];c>a&&(a=c,n=l)}return n},i=c?"":m(t,"population"),u=c?"":m(t,"area"),s="".concat(i.name," has ").concat((i.population/o.population).toFixed()," times more inhabitants than ").concat(o.name,"."),d="".concat(u.name," is ").concat((u.area/o.area).toFixed()," times bigger than ").concat(o.name," (in km2).");return r.a.createElement("div",null,l&&r.a.createElement("div",null,"Something went wrong.."),c?r.a.createElement("div",null,"Loading data..."):r.a.createElement("div",{className:"ctr-container"},r.a.createElement("section",{className:"fct-grid-container"},r.a.createElement("div",{className:"fct-item-head"},r.a.createElement("span",null,r.a.createElement("h1",null,"Facts"))),r.a.createElement("div",{className:"fct-item"},r.a.createElement("b",null,"Your country (IP):")),r.a.createElement("div",{className:"fct-item"},r.a.createElement("img",{src:o.flag,alt:o.name})),r.a.createElement("div",{className:"fct-item"},r.a.createElement("span",null,r.a.createElement("h2",null,o.name),"Population: ",o.population.toLocaleString("en")," ",r.a.createElement("br",null),"Area: ",o.area.toLocaleString("en")," km2")),r.a.createElement("div",{className:"fct-item"},r.a.createElement("b",null,"Biggest country in population:")),r.a.createElement("div",{className:"fct-item"},r.a.createElement("img",{src:i.flag,alt:i.name})),r.a.createElement("div",{className:"fct-item"},r.a.createElement("span",null,r.a.createElement("h2",null,i.name),i.population.toLocaleString("en"))),r.a.createElement("div",{className:"fct-item-ft"},r.a.createElement("em",null,s)),r.a.createElement("div",{className:"fct-item"},r.a.createElement("b",null,"Biggest country in area (km2):")),r.a.createElement("div",{className:"fct-item"},r.a.createElement("img",{src:u.flag,alt:u.name})),r.a.createElement("div",{className:"fct-item"},r.a.createElement("span",null,r.a.createElement("h2",null,u.name),u.area.toLocaleString("en")," km2")),r.a.createElement("div",{className:"fct-item-ft"},r.a.createElement("em",null,d)))))},L=(a(58),[{path:"/",component:N,exact:""},{path:"/Home",component:N,exact:""},{path:"/Countries",component:k,exact:""},{path:"/countries/:letter",component:k,exact:""},{path:"/countries/:letter/:country",component:w,exact:""},{path:"/list",component:C},{path:"/facts",component:x},{path:"/:WhereTheHeckIsThat",component:s},{path:"/:WhereTheHeckIsThat",component:s}]);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{basename:"/countries"},r.a.createElement(function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement("div",{className:"content"},r.a.createElement(m.c,null,L.map(function(t,a){return r.a.createElement(b,Object.assign({key:a},t,e))})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.ecc5a600.chunk.js.map