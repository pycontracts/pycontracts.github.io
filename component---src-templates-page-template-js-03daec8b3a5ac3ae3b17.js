(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{303:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=(a(311),a(315)),o=a(2),c=a.n(o),d=function(e){var t=e.to,a=e.mytitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{key:a,className:"jsx-1787325442 linormal"},i.a.createElement("a",{href:t,className:"jsx-1787325442"},a)),i.a.createElement(c.a,{styleId:"1787325442",css:[".linormal.jsx-1787325442{font-size:smaller;padding-top:3px;}"]}))};d.propTypes={to:l.a.string,mytitle:l.a.string};var m=d,y=a(319),p=a(390),x=function(e){var t=e.page,a=t.html,n=t.frontmatter.title,r=e.theme,l=function(e){var t=document.createElement("template");t.innerHTML=e;for(var a=1,n=t.content.querySelectorAll("h3,h4"),i=0;i<n.length;++i)n[i].setAttribute("id","jumpmark_"+a),a++;return t.innerHTML}(a);return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"jsx-2107784993"},i.a.createElement(y.a,{title:n,theme:r})),i.a.createElement("div",{className:"jsx-2107784993 wrapper"},i.a.createElement("div",{className:"jsx-2107784993 main"},i.a.createElement(p.a,{html:l,theme:r})),i.a.createElement("div",{className:"jsx-2107784993 sidebar"},i.a.createElement("ul",{className:"jsx-2107784993"},function(){for(var e,t,a=[],n=(e=l,(t=document.createElement("template")).innerHTML=e,t.content.querySelectorAll("h3,h4")),r={},s="",o=0;o<n.length;o++)"H3"==n[o].tagName&&(r[s=n[o].innerHTML]={}),"H4"==n[o].tagName&&""!=s&&(r[s][n[o].innerHTML]=n[o].getAttribute("id"));for(var d in console.log(r),r)for(var y in a.push(i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{key:d,className:"jsx-290939527"},i.a.createElement("p",{className:"jsx-290939527 lititleinner"},d)),i.a.createElement(c.a,{styleId:"290939527",css:[".lititleinner.jsx-290939527{font-weight:bold;font-size:small;padding-top:15px;padding-bottom:3px;}"]}))),r[d]){var p="#"+r[d][y],x=y;a.push(i.a.createElement(m,{to:p,mytitle:x}))}return a}()))),i.a.createElement(c.a,{styleId:"2107784993",css:["@media only screen and (max-width:1026px){.sidebar.jsx-2107784993{visibility:hidden;}}",".wrapper.jsx-2107784993{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:800px;}",".sidebar.jsx-2107784993 ul.jsx-2107784993{list-style:none;position:relative;overflow:hidden;}",".lititleinner.jsx-2107784993{font-weight:bold;font-size:smaller;}",".sidebar.jsx-2107784993{background:#e8e8e8 !important;padding:15px;background-color:#fff;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:10vh;font-size:smaller;display:table;}",".main.jsx-2107784993{width:78%;}",".sidebar.jsx-2107784993{width:20%;}"]}))};x.propTypes={page:l.a.object.isRequired,theme:l.a.object.isRequired};var u=x,f=a(155);a.d(t,"pageQuery",function(){return h});var g=function(e){var t=e.data,a=t.page;t.site.siteMetadata.facebook;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.ThemeContext.Consumer,null,function(e){return i.a.createElement(s.a,{theme:e},i.a.createElement(u,{page:a,theme:e}))}))};g.propTypes={data:l.a.object.isRequired};t.default=g;var h="3325579821"},311:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=a(328),o=a.n(s),c=a(66),d=a.n(c),m=function(e){var t=e.data,a=e.facebook,n=((t||{}).frontmatter||{}).title,r=((t||{}).frontmatter||{}).description,l=((t||{}).frontmatter||{}).cover,s=((t||{}).fields||{}).slug,c=n?n+" - "+d.a.shortSiteTitle:d.a.siteTitle,m=r||d.a.siteDescription,y=l||d.a.siteImage,p=d.a.siteUrl+d.a.pathPrefix+s;return i.a.createElement(o.a,{htmlAttributes:{lang:d.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},i.a.createElement("title",null,c),i.a.createElement("meta",{name:"description",content:m}),i.a.createElement("meta",{property:"og:url",content:p}),i.a.createElement("meta",{property:"og:title",content:c}),i.a.createElement("meta",{property:"og:description",content:m}),i.a.createElement("meta",{property:"og:image",content:y}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"fb:app_id",content:a.appId}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:creator",content:d.a.authorTwitterAccount?d.a.authorTwitterAccount:""}))};m.propTypes={data:l.a.object,facebook:l.a.object.isRequired};var y=m;a.d(t,"a",function(){return y})},315:function(e,t,a){"use strict";var n=a(2),i=a.n(n),r=a(0),l=a.n(r),s=a(1),o=a.n(s),c=function(e){var t=e.children,a=e.theme;return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:i.a.dynamic([["3099345088",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),l.a.createElement(i.a,{styleId:"3099345088",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};c.propTypes={children:o.a.node.isRequired,theme:o.a.object.isRequired};var d=c;a.d(t,"a",function(){return d})},319:function(e,t,a){"use strict";var n=a(2),i=a.n(n),r=a(0),l=a.n(r),s=a(1),o=a.n(s),c=function(e){var t=e.title,a=e.children,n=e.theme;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement("h1",{className:i.a.dynamic([["2040969418",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):l.a.createElement("h1",{className:i.a.dynamic([["2040969418",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),l.a.createElement(i.a,{styleId:"2040969418",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};c.propTypes={title:o.a.string,children:o.a.node,theme:o.a.object.isRequired},t.a=c},390:function(e,t,a){"use strict";a(391);var n=a(2),i=a.n(n),r=a(0),l=a.n(r),s=a(1),o=a.n(s),c=function(e){var t=e.html,a=e.theme;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:i.a.dynamic([["1391956609",[a.time.duration.long,a.font.lineHeight.s,a.font.size.l,a.font.size.m,a.font.lineHeight.m,a.font.size.s,a.font.lineHeight.xxl,a.font.weight.bold,a.color.brand.primary,a.size.radius.default,a.line.color,a.color.neutral.gray.c]]])+" bodytext"}),l.a.createElement(i.a,{styleId:"1391956609",css:[".bodytext.__jsx-style-dynamic-selector{-webkit-animation-name:bodytextEntry;-webkit-animation-name:bodytextEntry-__jsx-style-dynamic-selector;animation-name:bodytextEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+a.time.duration.long+";-webkit-animation-duration:"+a.time.duration.long+";animation-duration:"+a.time.duration.long+";}",".bodytext.__jsx-style-dynamic-selector h2,.bodytext.__jsx-style-dynamic-selector h3{margin:1.5em 0 1em;}",".bodytext.__jsx-style-dynamic-selector h2{line-height:"+a.font.lineHeight.s+";font-size:"+a.font.size.l+";}",".bodytext.__jsx-style-dynamic-selector h3{font-size:"+a.font.size.m+";line-height:"+a.font.lineHeight.m+";}",".bodytext.__jsx-style-dynamic-selector p{font-size:"+a.font.size.s+";line-height:"+a.font.lineHeight.xxl+";margin:0 0 1.5em;}",".bodytext.__jsx-style-dynamic-selector ul{list-style:circle;margin:0 0 1.5em;padding:0 0 0 1.5em;}",".bodytext.__jsx-style-dynamic-selector li{margin:0.7em 0;line-height:1.5;}",".bodytext.__jsx-style-dynamic-selector td{text-align:left;vertical-align:top;padding-right:6px;padding-top:6px;padding-left:0px;margin:0px;border:1px solid #e8e8e8;}",".bodytext.__jsx-style-dynamic-selector table{padding-top:35px;padding-bottom:55px;width:100%;}",".bodytext.__jsx-style-dynamic-selector td:last{text-align:right;vertical-align:top;padding-right:6px;padding-top:6px;padding-left:0px;margin:0px;}",".bodytext.__jsx-style-dynamic-selector thead{text-align:left;background:#e8e8e8;height:40px;}",".bodytext.__jsx-style-dynamic-selector th{padding-top:10px;padding-bottom:10px;}",".bodytext.__jsx-style-dynamic-selector a{font-weight:"+a.font.weight.bold+";color:"+a.color.brand.primary+";-webkit-text-decoration:underline;text-decoration:underline;}",".bodytext.__jsx-style-dynamic-selector a.gatsby-resp-image-link{border:0;display:block;margin:2.5em 0;border-radius:"+a.size.radius.default+";overflow:hidden;border:1px solid "+a.line.color+";}",".bodytext.__jsx-style-dynamic-selector code.language-text{background:"+a.color.neutral.gray.c+";text-shadow:none;color:inherit;padding:0.1em 0.3em 0.2em;border-radius:0.1em;}","@-webkit-keyframes bodytextEntry{from.__jsx-style-dynamic-selector{opacity:0;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes bodytextEntry-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}","@keyframes bodytextEntry-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}"],dynamic:[a.time.duration.long,a.font.lineHeight.s,a.font.size.l,a.font.size.m,a.font.lineHeight.m,a.font.size.s,a.font.lineHeight.xxl,a.font.weight.bold,a.color.brand.primary,a.size.radius.default,a.line.color,a.color.neutral.gray.c]}))};c.propTypes={html:o.a.string.isRequired,theme:o.a.object.isRequired},t.a=c},391:function(e,t,a){"use strict";a(108)("bold",function(e){return function(){return e(this,"b","","")}})}}]);
//# sourceMappingURL=component---src-templates-page-template-js-03daec8b3a5ac3ae3b17.js.map