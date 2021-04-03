(this["webpackJsonptravelmap-client"]=this["webpackJsonptravelmap-client"]||[]).push([[0],{75:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"TopImageContainer",(function(){return C})),t.d(r,"AppContainer",(function(){return W})),t.d(r,"PageContainer",(function(){return z}));var i={};t.r(i),t.d(i,"Text",(function(){return A})),t.d(i,"Description",(function(){return G})),t.d(i,"Information",(function(){return J})),t.d(i,"Caption",(function(){return L})),t.d(i,"Title",(function(){return H}));var c={};t.r(c),t.d(c,"Image",(function(){return _})),t.d(c,"FullWidthImage",(function(){return U})),t.d(c,"CaptionedImage",(function(){return $}));var a={};t.r(a),t.d(a,"Row",(function(){return q.a})),t.d(a,"Col",(function(){return K.a}));var o={};t.r(o),t.d(o,"getPlaces",(function(){return rt})),t.d(o,"getPlacePage",(function(){return it})),t.d(o,"getExperiencePage",(function(){return ct})),t.d(o,"getRegionPage",(function(){return at}));var u,s=t(1),l=t(0),j=t.n(l),b=t(39),d=t.n(b),f=t(14),O=t(6),v=t(2),h=t(3);!function(n){n.White="#FFFFFF",n.Black="#000000",n.BlackText="#202020",n.GreyLight="#F6F6F6",n.GreySmooth="#CCCCCC",n.GreyDark="#95999A",n.GreyDarker="#6F7374",n.BlueDark="#2C3850",n.BlueSolid="#2B384F",n.WhiteSmoke="#F5F5F5"}(u||(u={}));var x=u;function p(){var n=Object(v.a)(["\n  padding: 6rem 7rem;\n  background-color: ",";\n"]);return p=function(){return n},n}function m(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > div {\n    max-width: 1920px;\n    width: 100%;\n  }\n  background-color: ",";\n"]);return m=function(){return n},n}function g(){var n=Object(v.a)(["\n  width: 100%;\n  min-height: 0.45vw;\n"]);return g=function(){return n},n}function w(){var n=Object(v.a)([""]);return w=function(){return n},n}var y=h.a.div(w()),k=h.a.img(g()),C=function(n){var e=n.image;return Object(s.jsx)(y,{children:Object(s.jsx)(k,{src:e.url,alt:e.alt})})},W=h.a.div(m(),x.WhiteSmoke),S=h.a.div(p(),x.White),z=function(n){var e=n.children,t=n.image;return Object(s.jsxs)(y,{children:[Object(s.jsx)(C,{image:t}),Object(s.jsx)(S,{children:e})]})},F=t(8),I=t(24),P=t(45);function T(){var n=Object(v.a)(["\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n"]);return T=function(){return n},n}function B(){var n=Object(v.a)([""]);return B=function(){return n},n}function E(){var n=Object(v.a)(["\n  font-size: 1.3rem;\n  font-weight: 300;\n"]);return E=function(){return n},n}function D(){var n=Object(v.a)(["\n  font-size: 1.6rem;\n  font-weight: 600;\n"]);return D=function(){return n},n}function R(){var n=Object(v.a)(["\n  font-size: 1.2rem;\n  text-align: justify;\n  font-family: 'Quattrocento', serif;\n"]);return R=function(){return n},n}var A=h.a.div(R()),G=Object(h.a)(A)(D()),J=Object(h.a)(A)(E()),L=Object(h.a)(A)(B()),H=h.a.div(T());function N(){var n=Object(v.a)(["\n  margin-top: 0.5rem;\n"]);return N=function(){return n},n}function M(){var n=Object(v.a)(["\n  width: 100%;\n"]);return M=function(){return n},n}function V(){var n=Object(v.a)([""]);return V=function(){return n},n}var _=function(n){var e=n.src,t=n.lazy,r=Object(I.a)(n,["src","lazy"]);return t?Object(s.jsx)(P.a,{placeholder:function(n){var e=n.ref;return Object(s.jsx)("div",{ref:e})},src:e,actual:function(n){var e=n.imageProps;return Object(s.jsx)("img",Object(F.a)(Object(F.a)({alt:e.alt},r),e))}}):Object(s.jsx)("img",Object(F.a)({src:e,alt:r.alt},r))},Q=h.a.div(V()),U=Object(h.a)(_)(M()),Y=Object(h.a)(L)(N()),$=function(n){var e=n.src,t=n.caption,r=n.alt;return Object(s.jsxs)(Q,{children:[Object(s.jsx)(U,{src:e,alt:null!==r&&void 0!==r?r:t}),Object(s.jsx)(Y,{children:t})]})},q=t(78),K=t(79),X=t(17);function Z(){var n=Object(v.a)(["\n  ","\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return Z=function(){return n},n}var nn=Object(h.a)(f.b)(Z(),(function(n){return n.plain?"text-decoration: none !important;":""}),x.White,x.White),en=function(n){var e=n.label,t=n.link,r=n.plain;return t?Object(s.jsx)(nn,{plain:r?1:0,to:t,children:e}):Object(s.jsx)("div",{children:e})};function tn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n"]);return tn=function(){return n},n}function rn(){var n=Object(v.a)(["\n  margin: 0 0.3rem;\n"]);return rn=function(){return n},n}function cn(){var n=Object(v.a)(["\n  display: flex;\n"]);return cn=function(){return n},n}var an=h.a.div(cn()),on=Object(h.a)(X.c)(rn()),un=h.a.div(tn()),sn=function(n){var e=n.crumbs;return Object(s.jsx)(an,{children:e.map((function(n,t){return Object(s.jsxs)(un,{children:[Object(s.jsx)(en,Object(F.a)({},n)),t<e.length-1&&Object(s.jsx)(on,{})]},t)}))})};function ln(){var n=Object(v.a)(["\n  text-align: right;\n"]);return ln=function(){return n},n}function jn(){var n=Object(v.a)(["\n  font-size: 2.3rem;\n  line-height: 2rem;\n"]);return jn=function(){return n},n}function bn(){var n=Object(v.a)([""]);return bn=function(){return n},n}function dn(){var n=Object(v.a)(["\n  font-size: 0.8rem;\n  text-transform: uppercase;\n"]);return dn=function(){return n},n}function fn(){var n=Object(v.a)([""]);return fn=function(){return n},n}var On=h.a.div(fn()),vn=h.a.div(dn()),hn=Object(h.a)(vn)(bn()),xn=Object(h.a)(vn)(jn()),pn=Object(h.a)(vn)(ln()),mn=function(n){var e=Object.assign({},n);return Object(s.jsxs)(On,Object(F.a)(Object(F.a)({},e),{},{children:[Object(s.jsx)(hn,{children:"Just"}),Object(s.jsx)(xn,{children:"Iceland"}),Object(s.jsx)(pn,{children:"Things"})]}))};function gn(){var n=Object(v.a)(["\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0.5rem;\n  font-size: 0.8rem;\n  letter-spacing: 0.5rem;\n"]);return gn=function(){return n},n}function wn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n"]);return wn=function(){return n},n}function yn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return yn=function(){return n},n}function kn(){var n=Object(v.a)(["\n  letter-spacing: 0.4rem;\n  border-bottom: 1px solid ",";\n  text-transform: uppercase;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(v.a)([""]);return Cn=function(){return n},n}function Wn(){var n=Object(v.a)(["\n  display: flex;\n  margin-bottom: 5rem;\n  > * {\n    flex: 1;\n    margin: 0 1rem;\n  }\n"]);return Wn=function(){return n},n}function Sn(){var n=Object(v.a)(["\n  font-size: 1.1rem;\n  letter-spacing: 0.4rem;\n  margin-top: 0.7rem;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(v.a)(["\n  text-transform: uppercase;\n  letter-spacing: 1.3rem;\n  font-size: 4rem;\n"]);return zn=function(){return n},n}function Fn(){var n=Object(v.a)([""]);return Fn=function(){return n},n}function In(){var n=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 5rem;\n"]);return In=function(){return n},n}function Pn(){var n=Object(v.a)(["\n  width: 100%;\n"]);return Pn=function(){return n},n}function Tn(){var n=Object(v.a)(["\n  position: relative;\n  height: 100%;\n  color: ",";\n"]);return Tn=function(){return n},n}var Bn=h.a.div(Tn(),x.White),En=Object(h.a)(_)(Pn()),Dn=h.a.div(In()),Rn=h.a.div(Fn()),An=h.a.div(zn()),Gn=h.a.div(Sn()),Jn=h.a.div(Wn()),Ln=h.a.div(Cn()),Hn=h.a.div(kn(),x.White),Nn=h.a.div(yn()),Mn=function(n){var e=n.title,t=n.children;return Object(s.jsxs)(Nn,{children:[Object(s.jsx)(Hn,{children:e}),t]})},Vn=Object(h.a)(A)(wn()),_n=h.a.div(gn()),Qn=function(){var n=(new Date).getFullYear();return Object(s.jsxs)(Bn,{children:[Object(s.jsx)(En,{src:"/assets/footer-background.jpg"}),Object(s.jsxs)(Dn,{children:[Object(s.jsxs)(Rn,{children:[Object(s.jsx)(An,{children:"Subscribe"}),Object(s.jsx)(Gn,{children:"Subscribe to our monthly newsletter"})]}),Object(s.jsxs)(Jn,{children:[Object(s.jsx)(Ln,{children:Object(s.jsx)(mn,{})}),Object(s.jsx)(Mn,{title:"Experience",children:Object(s.jsxs)(Vn,{children:[Object(s.jsx)(en,{link:"/tags/northernLights",label:"Northern Lights"}),Object(s.jsx)(en,{link:"/tags/wildlife",label:"Wildlife"}),Object(s.jsx)(en,{link:"/tags/iceCaves",label:"Ice Caves"})]})}),Object(s.jsx)(Mn,{title:"Regions",children:Object(s.jsxs)(Vn,{children:[Object(s.jsx)(en,{link:"/regions/capital",label:"Capital & Reykjanes"}),Object(s.jsx)(en,{link:"/regions/south",label:"South"}),Object(s.jsx)(en,{link:"/regions/northEast",label:"North-East"}),Object(s.jsx)(en,{link:"/regions/northWest",label:"North-West"}),Object(s.jsx)(en,{link:"/regions/highlands",label:"Highlands"})]})}),Object(s.jsx)(Mn,{title:"About",children:Object(s.jsxs)(Vn,{children:["Just Iceland Things was created in 2020 by a bunch of people. This is the only website you will ever need.",Object(s.jsx)("br",{}),"Thank you."]})}),Object(s.jsx)(Mn,{title:"Contact",children:Object(s.jsxs)(Vn,{children:["oddur@egg.com",Object(s.jsx)("br",{}),"+354-823-0885"]})})]})]}),Object(s.jsx)(_n,{children:"\xa9 ".concat(n," - JustIcelandThings.com")})]})};function Un(){var n=Object(v.a)(["\n  font-size: 1.8rem;\n  border-bottom: ",";\n  &:hover {\n    border-bottom: 0.3rem solid ",";\n  }\n"]);return Un=function(){return n},n}function Yn(){var n=Object(v.a)(["\n  display: flex;\n  width: 50%;\n  margin-right: 5rem;\n  justify-content: space-around;\n"]);return Yn=function(){return n},n}function $n(){var n=Object(v.a)(["\n  margin: 0 5rem;\n"]);return $n=function(){return n},n}function qn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  top: 1rem;\n  width: 100%;\n  position: absolute;\n  color: ",";\n  text-transform: uppercase;\n"]);return qn=function(){return n},n}var Kn=h.a.div(qn(),x.White),Xn=Object(h.a)(mn)($n()),Zn=h.a.div(Yn()),ne=h.a.div(Un(),(function(n){var e=n.selected;return"0.3rem solid ".concat(e?x.White:"transparent")}),x.GreyDark),ee=[{title:"Map",route:"/map"},{title:"Regions",route:"/places"},{title:"Experience",route:"/experience"},{title:"Blog",route:"/blog"}],te=function(){var n=Object(O.h)();return Object(s.jsxs)(Kn,{children:[Object(s.jsx)(Xn,{}),Object(s.jsx)(Zn,{children:ee.map((function(e){return Object(s.jsx)(ne,{selected:n.pathname.startsWith(e.route),children:Object(s.jsx)(en,{label:e.title,link:e.route,plain:!0})},e.route)}))})]})};function re(){var n=Object(v.a)(["\n  color: "," !important;\n"]);return re=function(){return n},n}var ie=Object(h.a)(f.b)(re(),x.White),ce=t(20);t(56);function ae(){var n=Object(v.a)(["\n  button {\n    font-size: 2rem;\n    display: flex;\n    height: 100%;\n    align-items: center;\n    background: none;\n    border-color: transparent;\n    color: ",";\n    &:focus {\n      outline: 0;\n    }\n  }\n"]);return ae=function(){return n},n}function oe(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"]);return oe=function(){return n},n}function ue(){var n=Object(v.a)(["\n  display: flex;\n"]);return ue=function(){return n},n}var se=Object(h.a)(ce.c)(ue()),le=h.a.div(oe()),je=h.a.div(ae(),x.White),be=function(n){var e=n.items,t=n.maxVisibleSlides,r=void 0===t?4:t,i=Object(I.a)(n,["items","maxVisibleSlides"]),c=e.length<r?e.length:r;return Object(s.jsxs)(se,Object(F.a)(Object(F.a)({naturalSlideWidth:1,naturalSlideHeight:1,isIntrinsicHeight:!0,totalSlides:e.length,visibleSlides:c,step:c,infinite:!0},i),{},{children:[Object(s.jsx)(je,{children:Object(s.jsx)(ce.a,{children:Object(s.jsx)(X.a,{})})}),Object(s.jsx)(ce.e,{children:e.map((function(n,e){return Object(s.jsx)(ce.d,{index:e,children:Object(s.jsx)(le,{children:n})},e)}))}),Object(s.jsx)(je,{children:Object(s.jsx)(ce.b,{children:Object(s.jsx)(X.b,{})})})]}))};function de(){var n=Object(v.a)(["\n  font-size: 0.8rem;\n  font-weight: 300;\n  letter-spacing: 0.05rem;\n"]);return de=function(){return n},n}function fe(){var n=Object(v.a)(["\n  font-size: 1.4rem;\n  letter-spacing: 0.3rem;\n"]);return fe=function(){return n},n}function Oe(){var n=Object(v.a)(["\n  position: absolute;\n  top: 0.3rem;\n  left: 0.6rem;\n  text-shadow: 1px 2px ",";\n"]);return Oe=function(){return n},n}function ve(){var n=Object(v.a)([""]);return ve=function(){return n},n}function he(){var n=Object(v.a)(["\n  position: relative;\n  cursor: pointer;\n"]);return he=function(){return n},n}function xe(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return xe=function(){return n},n}function pe(){var n=Object(v.a)(["\n  font-size: 2rem;\n"]);return pe=function(){return n},n}function me(){var n=Object(v.a)(["\n  // To disregard the parents padding, we need the width to be double the padding\n  min-width: calc(100% + 14rem);\n  padding: 2rem 7rem 1rem 7rem;\n  margin-left: -7rem;\n  background-color: ",";\n  color: ",";\n  text-transform: uppercase;\n"]);return me=function(){return n},n}var ge=h.a.div(me(),x.BlueSolid,x.White),we=h.a.div(pe()),ye=h.a.div(xe()),ke=Object(h.a)(ie)(he()),Ce=Object(h.a)(U)(ve()),We=h.a.div(Oe(),x.GreyDark),Se=h.a.div(fe()),ze=h.a.div(de()),Fe=function(n){var e=n.items,t=n.title;return Object(s.jsxs)(ge,{children:[Object(s.jsx)(we,{children:t}),Object(s.jsx)(ye,{children:Object(s.jsx)(be,{items:e.map((function(n){return Object(s.jsxs)(ke,{to:n.route,children:[Object(s.jsx)(Ce,{src:n.image.url}),Object(s.jsxs)(We,{children:[Object(s.jsx)(Se,{children:n.title}),n.subtitle&&Object(s.jsx)(ze,{children:n.subtitle})]})]},n.title)}))})})]})};function Ie(){var n=Object(v.a)(["\n  display: flex;\n  > * {\n    flex: 1;\n    &:first-child {\n      margin-right: 1em;\n    }\n  }\n"]);return Ie=function(){return n},n}function Pe(){var n=Object(v.a)(["\n  margin: 1rem 0 1rem 4rem;\n  color: ",";\n"]);return Pe=function(){return n},n}function Te(){var n=Object(v.a)(["\n  margin: 2.5rem 0;\n  color: ",";\n"]);return Te=function(){return n},n}function Be(){var n=Object(v.a)([""]);return Be=function(){return n},n}var Ee=h.a.div(Be()),De=Object(h.a)(H)(Te(),x.BlueDark),Re=Object(h.a)(J)(Pe(),x.BlackText),Ae=h.a.div(Ie()),Ge=function(n){var e,t,r,i=n.section,c=i.image1Tall,a=i.image1Wide,o=i.image1Caption,u=i.image2Tall,l=i.image2Wide,j=i.image2Caption;return!c&&!u?null:c&&u?Object(s.jsxs)(Ae,{children:[Object(s.jsx)($,{caption:o,alt:null===c||void 0===c?void 0:c.alt,src:null===c||void 0===c?void 0:c.url}),Object(s.jsx)($,{caption:j,alt:null===u||void 0===u?void 0:u.alt,src:null===u||void 0===u?void 0:u.url})]}):Object(s.jsx)($,{caption:null!==(e=o)&&void 0!==e?e:j,alt:null!==(t=null===a||void 0===a?void 0:a.alt)&&void 0!==t?t:null===l||void 0===l?void 0:l.alt,src:null!==(r=null===a||void 0===a?void 0:a.url)&&void 0!==r?r:null===l||void 0===l?void 0:l.url})},Je=function(n){var e=n.section;return Object(s.jsxs)(Ee,{children:[Object(s.jsx)(De,{children:e.title}),Object(s.jsx)(Re,{children:e.text}),Object(s.jsx)(Ge,{section:e})]})};function Le(){var n=Object(v.a)(["\n  font-size: ","rem;\n  letter-spacing: 1.2rem;\n  line-height: 1.3;\n"]);return Le=function(){return n},n}function He(){var n=Object(v.a)(["\n  color: ",";\n  background-color: ",";\n  margin-top: -","rem;\n  position: absolute;\n  padding: 0.4rem 4rem 0.4rem 2rem;\n  border-radius: 0.5rem;\n  text-transform: uppercase;\n"]);return He=function(){return n},n}var Ne=h.a.div(He(),x.White,x.BlueDark,10),Me=h.a.div(Le(),4),Ve=function(n){var e=n.children,t=n.title;return Object(s.jsxs)(Ne,{children:[Object(s.jsx)(Me,{children:t}),e]})};function _e(){var n=Object(v.a)(["\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  margin: 1rem 0;\n\n  &:before,\n  &:after {\n    background-color: ",";\n    content: '';\n    display: inline-block;\n    height: 0.15rem;\n    position: relative;\n    vertical-align: middle;\n    width: 50%;\n  }\n\n  &:before {\n    right: ",";\n    margin-left: -50%;\n  }\n\n  &:after {\n    left: ",";\n    margin-right: -50%;\n  }\n"]);return _e=function(){return n},n}var Qe="1.2rem",Ue=h.a.div(_e(),x.Black,Qe,Qe),Ye=function(){return null},$e=t(7),qe=t.n($e),Ke=t(15),Xe=t(18),Ze=t(44),nt=t.n(Ze),et={api:"https://api.".concat(window.location.host,"/v2")},tt=nt.a.create({baseURL:"".concat(et.api),headers:{Accept:"application/json","Content-type":"application/json"}}),rt=function(){var n=Object(Ke.a)(qe.a.mark((function n(e){var t,r;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tt.get("/places/?type=pages.PlacePage&fields=portrait_image,address&child_of=".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.items);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),it=function(){var n=Object(Ke.a)(qe.a.mark((function n(e){var t,r;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tt.get("/places/".concat(e,"/"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ct=function(){var n=Object(Ke.a)(qe.a.mark((function n(e){var t,r;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tt.get("/experiences/".concat(e,"/"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),at=function(){var n=Object(Ke.a)(qe.a.mark((function n(e){var t,r,i;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tt.get("/regions/".concat(e,"/"));case 2:return t=n.sent,r=t.data,n.next=6,rt(r.id);case 6:return i=n.sent,n.abrupt("return",Object(F.a)(Object(F.a)({},r),{},{places:i}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ot=function(){var n=Object(O.i)().slug,e=Object(l.useState)(null),t=Object(Xe.a)(e,2),i=t[0],c=t[1];Object(l.useEffect)((function(){a()}),[]);var a=function(){var e=Object(Ke.a)(qe.a.mark((function e(){var t;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getExperiencePage(n);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(s.jsxs)(r.PageContainer,{image:i.headerImage,children:[Object(s.jsx)(Ve,{title:i.title,children:Object(s.jsx)(sn,{crumbs:[{label:"Experience",link:"/experience"},{label:i.title}]})}),i.sections.map((function(n){return Object(s.jsx)(Je,{section:n},n.id)}))]}):null};function ut(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ut=function(){return n},n}var st=h.a.div(ut()),lt=function(){var n,e,t,u,j=Object(O.i)().slug,b=Object(l.useState)(null),d=Object(Xe.a)(b,2),f=d[0],v=d[1];Object(l.useEffect)((function(){h()}),[j]);var h=function(){var n=Object(Ke.a)(qe.a.mark((function n(){var e;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.getPlacePage(j);case 2:e=n.sent,v(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return f?Object(s.jsxs)(r.PageContainer,{image:f.headerImage,children:[Object(s.jsx)(Ve,{title:f.title,children:Object(s.jsx)(sn,{crumbs:[{label:"Destinations",link:"/places"},{label:null!==(n=null===(e=f.meta.parent)||void 0===e?void 0:e.title)&&void 0!==n?n:"",link:"/regions/".concat(null!==(t=null===(u=f.meta.parent)||void 0===u?void 0:u.title)&&void 0!==t?t:"")},{label:f.title}]})}),Object(s.jsxs)(a.Row,{children:[Object(s.jsxs)(a.Col,{md:9,children:[Object(s.jsx)(i.Description,{children:f.description}),f.sections.map((function(n){return Object(s.jsx)(Je,{section:n},n.id)}))]}),Object(s.jsx)(a.Col,{md:3,children:Object(s.jsxs)(st,{children:[Object(s.jsx)(c.Image,{src:"/assets/iceland-silhouette.png",width:"100%"}),Object(s.jsxs)(i.Text,{children:["Address: ",f.address]}),Object(s.jsxs)(i.Text,{children:["Coordinates: ",f.latitude," - ",f.longitude]}),Object(s.jsx)(Ue,{children:"Services"}),Object(s.jsx)(Ue,{children:"Opening hours"}),Object(s.jsx)(Ue,{children:"Admission fee"}),Object(s.jsx)(Ue,{children:"Share"}),Object(s.jsx)(Ue,{children:"Categories"})]})})]})]}):null};function jt(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  svg {\n    margin-right: 0.3rem;\n  }\n"]);return jt=function(){return n},n}var bt=h.a.div(jt()),dt=function(){var n=Object(O.i)().slug,e=Object(l.useState)(null),t=Object(Xe.a)(e,2),i=t[0],c=t[1];Object(l.useEffect)((function(){a()}),[n]);var a=function(){var e=Object(Ke.a)(qe.a.mark((function e(){var t;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getRegionPage(n);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(s.jsxs)(r.PageContainer,{image:i.headerImage,children:[Object(s.jsx)(Ve,{title:i.title,children:Object(s.jsx)(sn,{crumbs:[{label:"Regions",link:"/regions"},{label:i.title}]})}),Object(s.jsx)(Fe,{items:i.places.map((function(n){return{title:n.title,subtitle:Object(s.jsxs)(bt,{children:[Object(s.jsx)(X.d,{}),n.address]}),image:n.portraitImage,route:"/places/".concat(n.meta.slug)}})),title:"Explore the ".concat(i.title)}),i.sections.map((function(n){return Object(s.jsx)(Je,{section:n},n.id)}))]}):null},ft=function(){var n=Object(O.g)();return Object(l.useEffect)((function(){var e=n.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null},Ot=(t(74),t(75),function(){return Object(s.jsxs)(f.a,{children:[Object(s.jsx)(ft,{}),Object(s.jsxs)(r.AppContainer,{children:[Object(s.jsx)(te,{}),Object(s.jsxs)(O.d,{children:[Object(s.jsx)(O.b,{exact:!0,path:"/",component:Ye}),Object(s.jsx)(O.b,{exact:!0,path:"/places/:slug",component:lt}),Object(s.jsx)(O.b,{exact:!0,path:"/experience/:slug",component:ot}),Object(s.jsx)(O.b,{exact:!0,path:"/regions/:slug",component:dt}),Object(s.jsx)(O.a,{to:"/"})]}),Object(s.jsx)(Qn,{})]})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(Object(s.jsx)(j.a.StrictMode,{children:Object(s.jsx)(Ot,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.d6301791.chunk.js.map