(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});n(50);var a=n(0),r=n.n(a),i=n(143),o=n(160),l=n(193),c=n(158),d=n(162),m=i.b.div.withConfig({displayName:"markers__Wrapper",componentId:"sc-12nlndb-0"})(["height:calc(100vh - ",");width:100%;"],c.b);t.default=Object(d.a)(function(e){var t=e.data.markers;return r.a.createElement(m,null,r.a.createElement(o.a,{seo:Object(o.f)(t.edges.map(function(e){return e.node}))}),r.a.createElement(l.b,{markers:t.edges.map(function(e){return e.node})}))});var u="3916318053"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(25);n.d(t,"waitForRouteChange",function(){return d.c});var m=n(153),u=n.n(m);n.d(t,"PageRenderer",function(){return u.a});var s=n(36);n.d(t,"parsePath",function(){return s.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){"use strict";t.a=function(e){return function(t){return function(n){return n[e]&&t}}}},147:function(e,t,n){"use strict";var a=n(180),r=n.n(a),i=n(0),o=n.n(i),l=n(143),c=n(144),d=n(146);t.a=Object(l.b)(function(e){e.__color_blue;var t=r()(e,["__color_blue"]);return o.a.createElement(c.Link,t)}).withConfig({displayName:"Link",componentId:"sc-1mqzwsq-0"})(["color:initial;text-decoration:none;",""],Object(d.a)("__color_blue")(Object(l.a)(["color:#1464e8;"])))},153:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},158:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(143),o=n(172),l=n(170),c=n(147),d=n(163),m=n.n(d),u="8vh",s=i.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-10cnog6-0"})(["position:relative;height:",";z-index:1;text-align:center;box-shadow:0 0 9px #888888;img{height:100%;user-drag:none;}"],u),g=i.b.ul.withConfig({displayName:"Header__Menu",componentId:"sc-10cnog6-1"})(["position:absolute;padding:0;margin:0;list-style-type:none;top:0;height:100%;padding-left:0.5em;padding-right:0.5em;"]),p=i.b.li.withConfig({displayName:"Header__Item",componentId:"sc-10cnog6-2"})(["float:left;height:100%;padding-left:0.5em;padding-right:0.5em;svg{height:100%;width:1em;}&:hover{background:lightgray;}&:active{background:gray;}",""],function(e){return e.active&&Object(i.a)(["background:lightgray;"])}),f=Object(i.b)(g).withConfig({displayName:"Header__MenuLeft",componentId:"sc-10cnog6-3"})(["left:0;"]),h=Object(i.b)(g).withConfig({displayName:"Header__MenuRight",componentId:"sc-10cnog6-4"})(["right:0;"]);t.a=function(){return r.a.createElement(s,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("img",{src:m.a,alt:"tgmeetup"})),r.a.createElement(f,null,r.a.createElement(c.a,{__color_blue:!0,to:"/markers"},r.a.createElement(p,null,r.a.createElement(o.e,null))),r.a.createElement(c.a,{__color_blue:!0,to:"/groups"},r.a.createElement(p,null,r.a.createElement(o.c,null))),r.a.createElement(c.a,{__color_blue:!0,to:"/events"},r.a.createElement(p,null,r.a.createElement(o.g,null)))),r.a.createElement(h,null,r.a.createElement("a",{href:"https://github.com/TGmeetup/TGmeetup",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p,null,r.a.createElement(l.c,null))),r.a.createElement("a",{href:"rss.xml",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p,null,r.a.createElement(l.d,null))),r.a.createElement("a",{href:"https://calendar.google.com/calendar?cid=dGdtZWV0dXA3QGdtYWlsLmNvbQ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p,null,r.a.createElement(l.a,null)))))}},160:function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"d",function(){return g}),n.d(t,"f",function(){return p});n(145),n(35);var a=n(0),r=n.n(a),i=n(161),o=n.n(i),l=n(144),c=n(169),d={title:"TGmeetup",description:"A collection set of technical groups' information (meetup)",image:Object(l.withPrefix)("/logo.jpg"),url:c.siteMetadata.siteUrl},m=function(e){return Object.assign({},d,{type:"event",title:e.name+" - "+d.title,image:e.group.logoURL||d.image,description:e.group.title+"\n"+e.dateTime+"\n"+e.location+"\n"+e.local_city,url:d.url+"/events/"+e.id})},u=function(e){return Object.assign({},d,{type:"events",title:"Events - "+d.title,description:"TGmeetup has "+e.length+" events to share with you!"})},s=function(e){return Object.assign({},d,{type:"group",title:e.title+" - "+d.title,image:e.logoURL||d.image,description:e.events.length+" events on "+e.title+"!\n"+e.city,url:d.url+"/events/"+e.id})},g=function(e){return Object.assign({},d,{type:"groups",title:"Groups - "+d.title,description:e.length+" groups are on TGmeetup!"})},p=function(e){return Object.assign({},d,{type:"locations",title:"Places - "+d.title,description:e.length+" places has events on TGmeetup!"})};t.a=function(e){var t=e.seo,n=void 0===t?d:t;return r.a.createElement(o.a,null,r.a.createElement("title",null,n.title),r.a.createElement("meta",{name:"description",content:n.description}),r.a.createElement("meta",{name:"image",content:n.image}),r.a.createElement("meta",{property:"og:url",content:n.url}),"post"===n.type&&r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:n.title}),r.a.createElement("meta",{property:"og:description",content:n.description}),r.a.createElement("meta",{property:"og:image",content:n.image}),r.a.createElement("meta",{name:"twitter:title",content:n.title}),r.a.createElement("meta",{name:"twitter:description",content:n.description}),r.a.createElement("meta",{name:"twitter:image",content:n.image}))}},162:function(e,t,n){"use strict";n.d(t,"a",function(){return h});n(145);var a=n(186),r=n.n(a),i=n(0),o=n.n(i),l=n(161),c=n.n(l),d=n(144),m=n(143),u=n(157),s=n.n(u),g=n(158);function p(){var e=r()(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n"]);return p=function(){return e},e}Object(m.c)(p());var f=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("link",{rel:"icon",href:Object(d.withPrefix)("/logo.png"),type:"image/png"})),o.a.createElement(g.a,null),t)},h=function(e){var t=function(t){return o.a.createElement(f,null,o.a.createElement(e,t))};return t.displayName="withLayout("+(e.displayName||e.name)+")",t.WrappedComponent=e,s()(t,e)}},163:function(e,t,n){e.exports=n.p+"static/logo-fb32928edb238a213e892bb18ee889fd.png"},165:function(e,t,n){"use strict";var a=n(143),r=n(146),i=(n(76),Object(a.a)(["cursor:pointer;&:hover{background:lightgray;}&:active{background:gray;}"])),o=a.b.div.withConfig({displayName:"elements__Title",componentId:"sc-1xctw3z-0"})(["margin:0;padding-top:2em;padding-left:1em;padding-right:1em;padding-bottom:1em;color:white;background:",";h2{margin-bottom:0;}a{color:inherit;text-decoration:none;&:hover{text-decoration:underline;}}svg{float:right;}",""],function(e){return e.color||"gray"},Object(r.a)("__primary")(Object(a.a)(["background:#00d1c9;"]))),l=a.b.div.withConfig({displayName:"elements__Content",componentId:"sc-1xctw3z-1"})(["margin:0;padding-top:1em;padding-bottom:1em;padding-left:0.7em;padding-right:0.7em;word-wrap:break-word;"]),c=a.b.div.withConfig({displayName:"elements__Block",componentId:"sc-1xctw3z-2"})(["margin:0;margin-left:-0.7em;margin-right:-0.7em;padding-top:0.5em;padding-bottom:0.5em;padding-left:0.7em;padding-right:0.7em;background:",";&:first-child{margin-top:-1em;}&:last-child{margin-bottom:-1em;}"," "," "," "," "," "," ",""],function(e){return e.color},Object(r.a)("__size_fixed_md")(Object(a.a)(["height:600px;"])),Object(r.a)("__fluid")(Object(a.a)(["padding:0;"])),Object(r.a)("__shrink")(Object(a.a)(["padding-left:3em;padding-right:3em;"])),Object(r.a)("__bright")(Object(a.a)(["color:lightgray;filter:brightness(150%);a{color:inherit;}"])),Object(r.a)("__text_center")(Object(a.a)(["text-align:center;"])),Object(r.a)("__hoverable")(i),Object(r.a)("onClick")(i)),d=a.b.p.withConfig({displayName:"elements__Item",componentId:"sc-1xctw3z-3"})(["margin:0;margin-left:-0.7em;margin-right:-0.7em;padding-top:0.5em;padding-bottom:0.5em;padding-left:0.7em;padding-right:0.7em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;svg{padding-right:0.7em;}a{text-overflow:ellipsis;overflow:hidden;}"," ",""],Object(r.a)("__hoverable")(i),Object(r.a)("onClick")(i)),m=a.b.a.withConfig({displayName:"elements__Action",componentId:"sc-1xctw3z-4"})(["color:initial;padding:.5em;display:flex;position:relative;flex-direction:column;align-items:center;text-decoration:none;"," & > svg{margin:.5em;font-size:1.4em;}> *{margin:0;text-overflow:ellipsis;}"," ",""],function(e){return e.href&&e.href.indexOf("mailto:")<0&&Object(a.a)(["text-transform:uppercase;"])},Object(r.a)("onClick")(i),Object(r.a)("href")(i)),u=a.b.div.withConfig({displayName:"elements__Actions",componentId:"sc-1xctw3z-5"})(["display:flex;align-items:stretch;flex-wrap:no-wrap;min-height:3em;text-align:center;& > ","{flex:1;width:0;}"],m),s=a.b.span.withConfig({displayName:"elements__Badge",componentId:"sc-1xctw3z-6"})(["position:absolute;left:calc(50% + 0.5em);top:1em;background:lightgray;padding-left:0.4em;padding-right:0.4em;border-radius:0.4em;"]),g=a.b.header.withConfig({displayName:"elements__Header",componentId:"sc-1xctw3z-7"})(["width:100%;"]),p=a.b.footer.withConfig({displayName:"elements__Footer",componentId:"sc-1xctw3z-8"})(["width:100%;align-self:flex-end;"]),f=a.b.div.withConfig({displayName:"Card",componentId:"lurres-0"})(["display:flex;flex-direction:column;margin-top:1em;margin-bottom:1em;font-size:18px;background:white;box-shadow:0 0 5px #888888;"," "," ",""],Object(r.a)("__small")(Object(a.a)(["width:400px;"])),Object(r.a)("__no_margin")(Object(a.a)(["margin:0;"])),Object(r.a)("__shifted_top")(Object(a.a)(["position:absolute;top:20px;left:20px;"])));f.Title=o,f.Content=l,f.Block=c,f.Item=d,f.Actions=u,f.Action=m,f.Badge=s,f.Header=g,f.Footer=p;t.a=f},166:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),c=n(1),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},169:function(e,t,n){n(50),e.exports={pathPrefix:"/",siteMetadata:{title:"Tgmeetup",description:"A collection set of technical groups' information (meetup)",siteUrl:"http://tgmeetup.github.io",createAt:new Date("2018-09-28"),lastBuildDate:new Date,site_url:"http://tgmeetup.github.io",feed_url:"http://tgmeetup.github.io/rss.xml",image_url:"http://tgmeetup.github.io/logo.png",categories:["Tech","Community","Conference","Meet"],ttl:"60"},plugins:["gatsby-source-tgmeetup","gatsby-plugin-tgmeetup-google-calendar","gatsby-plugin-react-helmet","gatsby-plugin-styled-components",{resolve:"gatsby-plugin-feed",options:{query:'\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                feed_url\n                site_url\n                image_url\n                categories\n                pubDate: createAt(formatString: "ddd DD, YYYY HH:mm:ss GMT")\n                lastBuildDate: lastBuildDate(formatString: "ddd DD, YYYY HH:mm:ss GMT")\n                ttl\n                categories\n              }\n            }\n          }\n        ',feeds:[{serialize:function(e){var t=e.query,n=t.site;return t.events.edges.map(function(e){return e.node}).map(function(e){return{title:e.title,description:e.group.title+"\n"+e.dateTime+"\n"+e.location+"\n"+e.local_city,url:n.siteMetadata.site_url+"/events/"+e.id,guid:e.id,categories:e.group.keywords,author:e.group.title,date:e.date,lat:e.geocode.lat,long:e.geocode.lng,comments:n.siteMetadata.site_url+"/events/"+e.id}})},query:'\n            {\n              events: allTgmeetupEvent(\n                sort: { fields: [ dateTime ]}\n              ) {\n                edges {\n                  node {\n                    id\n                    title\n                    dateTime(formatString: "HH:mm MM/DD/YYYY (dddd)")\n                    location\n                    local_city\n                    date: createAt(formatString: "MMM DD, YYYY")\n                    geocode {\n                      lat\n                      lng\n                    }\n                    group {\n                      title\n                      keywords\n                    }\n                  }\n\n                }\n              }\n            }\n            ',output:"/rss.xml"}]}}]}},193:function(e,t,n){"use strict";n(50);var a=n(0),r=n.n(a),i=n(175),o=n(224),l=n(250),c=n.n(l),d=(n(145),n(170)),m=n(165),u=n(147),s=function(e){var t=e.color,n=e.events;e.toggleEvent;return r.a.createElement(m.a,{__small:!0,__no_margin:!0},r.a.createElement(m.a.Title,{color:t},r.a.createElement("h2",null,"Events on"," ",n[0].location)),r.a.createElement(m.a.Content,null,n.map(function(e){return r.a.createElement(u.a,{key:e.id,to:"/events/"+e.id},r.a.createElement(m.a.Item,{__hoverable:!0},r.a.createElement(d.b,null),e.dateTime," ",r.a.createElement("b",null,e.name)))})))};n.d(t,"a",function(){return p});var g=function(e){var t=e.zoomToStreet,n=void 0!==t&&t,a=e.center,i=void 0===a?{lat:23.903687,lng:121.07937}:a,l=e.markers,d=void 0===l?[]:l,m=e.activeMarkerId,u=e.setActiveMarkerId;return r.a.createElement(o.GoogleMap,{defaultZoom:n?15:8,defaultCenter:i},d.map(function(e){var t=e.id,n=e.events,a=e.latlng,i=e.color;return r.a.createElement(o.Marker,{key:t,position:a,onClick:function(){return u(function(){return t})}},n&&m===t&&r.a.createElement(c.a,{options:{closeBoxURL:"",enableEventPropagation:!0,boxStyle:{overflow:"initial"}}},r.a.createElement(s,{color:i,events:n})))}))};g.displayName="Map";var p=Object(i.compose)(Object(i.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDUl-ub3O_XrUZ71artT6KIksNxSJmKn1U&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),o.withScriptjs,o.withGoogleMap,Object(i.withState)("activeMarkerId","setActiveMarkerId",null))(g);t.b=p}}]);
//# sourceMappingURL=component---src-pages-markers-js-f485d11a52695d066ee8.js.map