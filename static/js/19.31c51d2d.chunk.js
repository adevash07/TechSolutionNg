(this["webpackJsonpit-solutions"]=this["webpackJsonpit-solutions"]||[]).push([[19],{105:function(e,t,c){"use strict";c(2),c(136);var a=c(9),n=c(4);t.a=function(e){var t=e.iconarrow,c=e.ptext,s=e.icon,r=e.inputype,i=e.placetext,o=e.inputname,l=e.icons,d=e.linkpathacct,b=Object(a.g)();return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsxs)("div",{className:"search__Arrow",children:[Object(n.jsx)("div",{children:t&&Object(n.jsx)("i",{className:"search__ArrowDiv",onClick:function(){return b.push(d)},children:t})}),Object(n.jsx)("div",{children:c&&Object(n.jsx)("h3",{className:"search__ArrowParagraphy",children:c})})]}),Object(n.jsxs)("div",{className:"searchIcon__div",children:[s&&Object(n.jsx)("i",{className:"searchIcon__Icon",children:s}),r&&Object(n.jsx)("input",{className:"search__Input",type:r,placeholder:i,name:o}),l&&Object(n.jsx)("i",{className:"search__InputIcon",children:l})]})]})}},136:function(e,t,c){},549:function(e,t,c){},550:function(e,t,c){},551:function(e,t,c){},552:function(e,t,c){},553:function(e,t,c){},562:function(e,t,c){"use strict";c.r(t);var a=c(92),n=c(2),s=c(98),r=c(94),i=c(105),o=c(100),l=c(228),d=(c(548),c(549),c(4)),b=function(e){var t=e.state,c=e.onHover,a={labels:"Profile"===t.currentData?t.profileLabel:t.bitsLabel2,datasets:[{label:"",data:t.userData,backgroundColor:t.backgroundColor,borderColor:t.backgroundColor,borderWidth:1,datalabels:{anchor:"end"}}]};return Object(d.jsx)("div",{className:"bal-doughnut-chart",children:Object(d.jsx)(l.Doughnut,{data:a,height:400,weight:400,options:{responsive:!0,maintainAspectRatio:!1,cutoutPercentage:60,rotation:120,aspectRatio:4/3,layout:{padding:3},elements:{line:{fill:!1},point:{hoverRadius:7,radius:5}},legend:{display:!1},plugins:{datalabels:{backgroundColor:function(e){return e.dataset.backgroundColor},borderColor:"white",borderRadius:25,borderWidth:2,color:"white",display:function(e){var t=e.dataset,c=t.data.length;return t.data[e.dataIndex]>1.5*c},font:{weight:"bold"},padding:6,formatter:Math.round,showZero:!1,fontSize:13,arc:!0}},onClick:function(e,t){if(t[0]){var a=t[0]._chart,n=a.getElementAtEvent(e)[0],s=a.data.labels[n._index];c(s)}}}})})},j=c(35),u=c(192),h=c(93),p=c(96),x=(c(550),function(e){var t=e.state,c=e.setState,a=new Image(15,15);a.src=p.k.DashboardPerson;var s=Object(n.useCallback)((function(){var e=[0,40,0,40,60,80],t=[40,80,40,80,100];c((function(c){return Object(j.a)(Object(j.a)({},c),{},{userData:e,itSolutionData:t,currentData:"Profile",pointStyle:"circle"})}))}),[t]),i=Object(n.useCallback)((function(){var e=[40,0,60,40,20,60],t=[0,80,40,80,100],n=a;c((function(c){return Object(j.a)(Object(j.a)({},c),{},{userData:e,itSolutionData:t,currentData:"Bids",pointStyle:n})}))}),[t]),o={labels:"Profile"===t.currentData?t.profileLabel:t.bitLabel,datasets:[{label:"ee",fill:!1,lineTension:.6,backgroundColor:"#1A9FFF",borderColor:"#1A9FFF",borderWidth:2,pointStyle:"",data:t.itSolutionData},{label:"dd",fill:!1,lineTension:.6,backgroundColor:"#FFFFFF",borderColor:"#EE5783",borderWidth:2,pointStyle:t.pointStyle,data:t.userData}]};return Object(d.jsxs)("div",{className:"bal-line-chart",children:[Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"badges",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(h.a,{customBadgeClass:"pink"}),"Your Score"]}),Object(d.jsxs)("span",{children:[Object(d.jsx)(h.a,{customBadgeClass:"primary"}),"iT Solutions average"]})]}),Object(d.jsxs)("div",{className:"div-end",children:[Object(d.jsx)("span",{children:"Profile"===t.currentData?Object(d.jsx)(r.t,{}):Object(d.jsx)(u.b,{})}),Object(d.jsxs)("label",{children:[t.currentData," "]}),Object(d.jsxs)("div",{className:"chart-nav",children:[Object(d.jsx)("button",{onClick:s,children:Object(d.jsx)(r.d,{})}),Object(d.jsx)("button",{onClick:i,children:Object(d.jsx)(r.c,{})})]})]})]}),Object(d.jsx)("section",{children:Object(d.jsx)(l.Line,{data:o,height:400,weight:400,options:{scales:{yAxes:[{gridLines:{display:!0,color:"#cccccc",lineWidth:.2}}],xAxes:[{gridLines:{display:!0,color:"#cccccc",lineWidth:.2}}]},maintainAspectRatio:!1,responsive:!0,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,title:{display:!0,text:"",fontSize:20},legend:{display:!1,position:"right"}}})})]})}),O=(c(551),function(e){var t=e.title,c=e.content,a=e.btnText;return Object(d.jsxs)("div",{className:"performance-card",children:[Object(d.jsx)("label",{children:t}),Object(d.jsx)("p",{children:c}),Object(d.jsx)(h.b,{btnText:a})]})}),f=(c(552),function(e){var t=e.state,c=void 0===t?{}:t,s="Profile"===c.currentData?c.profileLabel:c.bitsLabel2,r=Object(n.useState)(s[0]),i=Object(a.a)(r,2),o=i[0],l=i[1];return Object(d.jsxs)("div",{className:"profile-perf",children:[Object(d.jsx)("h4",{className:"title",children:"Your profile performance score"}),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{children:Object(d.jsx)(b,{state:c,onHover:function(e){l(e)}})}),Object(d.jsx)("section",{children:Object(d.jsx)(O,{title:o,content:"You have to complete your verification process to score high in this grade",btnText:"Go to ".concat(o)})}),Object(d.jsx)("section",{children:Object(d.jsx)("ul",{children:s.map((function(e,t){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"badge",style:{backgroundColor:c.backgroundColor[t]}}),Object(d.jsxs)("small",{children:[" ",e," "]})]}),Object(d.jsx)("p",{children:"+3%"})]},t)}))})})]})]})}),m=(c(553),function(){var e=Object(n.useState)({userData:[0,40,0,40,60,80],itSolutionData:[40,80,40,80,100],profileLabel:["Verification","Payment","Profile","Phone number"],bitLabel:["Bid sent","Bid accepted","Others sent","offers accepted","Completed projects"],bitsLabel2:["Projects","Instant offers","Completed bids","Completed offers"],pointStyle:"circle",currentData:"Profile",backgroundColor:["#A65DE6","#00EDFF","#004CFF","#FF264C"]}),t=Object(a.a)(e,2),c=t[0],l=t[1];return Object(d.jsxs)("div",{className:"bal-score-card",children:[Object(d.jsx)(o.a,{dashboardPage:!0}),Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"container-search-div",children:Object(d.jsx)(i.a,{linkpathacct:"/accountsettingpage",iconarrow:Object(d.jsx)(r.k,{}),ptext:"Balance Score Card",icon:Object(d.jsx)(s.f,{}),inputype:"search",placetext:"search",inputname:"search",icons:Object(d.jsx)(r.v,{})})}),Object(d.jsx)(x,{state:c,setState:l}),Object(d.jsx)(f,{state:c})]})]})}),v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(m,{})})};t.default=v}}]);
//# sourceMappingURL=19.31c51d2d.chunk.js.map