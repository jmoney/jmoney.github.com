(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{M7K5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.img;return r.a.createElement("div",{style:{width:125,height:125,display:"flex",position:"relative",overflow:"hidden",fontSize:"1.25rem",alignItems:"center",flexShrink:0,userSelect:"none",borderRadius:"50%",justifyContent:"center"}},r.a.createElement("a",{href:"https://www.github.com/jmoney8080"},r.a.createElement("img",{src:t,alt:"avatar",style:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",margin:0}})))}},bh61:function(e,t,a){"use strict";a.r(t),a.d(t,"gitHubQuery",(function(){return f}));a("f3/d");var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),i=a("M7K5"),o=(a("9VmF"),a("aOgs")),s=["jmoney8080","boxen"],c=function(e){var t=e.pull_request,a=o.a,n="#6f42c1";return!1===t.merged&&!0===t.closed?(a=o.b,n="#cb2431"):!1===t.closed&&(n="#28a745"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:14}},r.a.createElement("h3",{style:{display:"flex",justifyContent:"space-between",marginBottom:0,fontSize:20}},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title)),r.a.createElement("span",{style:{color:n}},r.a.createElement(o.g,{icon:a,width:36,height:30})))},m=function(e){var t=e.children;return r.a.createElement("span",{style:{marginRight:16}},t)},u=function(e){var t=e.pull_request,a=t.baseRepository.languages.edges[0].node;null===a.color&&(a.color="purple");var n=new Date(t.createdAt)-new Date,l=Math.floor(n/864e5),i=t.createdAt.slice(0,10);l>-21&&(i=new Intl.RelativeTimeFormat("en",{style:"narrow"}).format(l,"day"));var s=null;if(null!==t.closedAt){var c=new Date(t.closedAt)-new Date,u=Math.floor(c/864e5);s=t.closedAt.slice(0,10),u>-21&&(s=new Intl.RelativeTimeFormat("en",{style:"narrow"}).format(u,"day"))}return r.a.createElement("div",{style:{fontSize:12}},r.a.createElement(m,null,r.a.createElement("span",{style:{borderRadius:"50%",display:"inline-block",height:12,position:"relative",top:1,width:12,backgroundColor:a.color}})," ",a.name),r.a.createElement(m,null,r.a.createElement(o.g,{icon:o.e})," ",r.a.createElement("a",{href:t.baseRepository.url},t.baseRepository.nameWithOwner)),r.a.createElement(m,null,"Created: ",i),s&&r.a.createElement(m,null,"Closed: ",s))},d=function(e){var t=e.pull_request;return s.filter((function(e){return t.baseRepository.nameWithOwner.startsWith(e)})).length>=1?r.a.createElement("div",null):r.a.createElement("div",{style:{borderBottom:"1px solid #e1e4e8",marginBottom:"1rem",padding:"1rem",fontSize:16}},r.a.createElement(c,{pull_request:t}),r.a.createElement(u,{pull_request:t}))},f=(t.default=function(e){var t=e.data.githubData.data.viewer,a=t.name,n=t.avatarUrl,o=t.pullRequests;return r.a.createElement(l.a,null,r.a.createElement("div",{style:{maxWidth:"960px",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"1.45rem 0"}},r.a.createElement(i.a,{img:n}),r.a.createElement("div",{style:{padding:16}},r.a.createElement("h2",{style:{border:"none"}},a))),o.nodes.map((function(e){return r.a.createElement(d,{key:e.title,pull_request:e})})).reverse()))},"2368038628")}}]);
//# sourceMappingURL=component---src-pages-pull-requests-js-89ddf13919634e9b638c.js.map