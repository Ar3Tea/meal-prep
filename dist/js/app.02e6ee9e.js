(function(e){function t(t){for(var n,i,u=t[0],o=t[1],l=t[2],c=0,d=[];c<u.length;c++)i=u[c],s[i]&&d.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==s[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},s={app:0},r=[];function u(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c7186b36","chunk-2d0efc70":"5499ee4d","chunk-f3f7853c":"6109a7c3","chunk-2d0cb6c3":"915a7d2a","chunk-2d216460":"fc80d159"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-f3f7853c":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise(function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0efc70":"31d6cfe0","chunk-f3f7853c":"4028d106","chunk-2d0cb6c3":"31d6cfe0","chunk-2d216460":"31d6cfe0"}[e]+".css",s=o.p+n,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var l=r[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===n||c===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){i[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=r);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=u(e),l=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");r.type=n,r.request=i,a[1](r)}s[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"186f":function(e,t,a){"use strict";var n=a("3e45"),i=a.n(n);i.a},"2dfb":function(e,t,a){"use strict";var n=a("47df"),i=a.n(n);i.a},"3e45":function(e,t,a){},"47df":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("14c6"),a("08c1"),a("4842"),a("d9fc");var n=a("2b0e"),i=a("bb71");a("da64");n["a"].use(i["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-navigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},r=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[e._l(e.items,function(t,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[e._v("\n                        "+e._s(t.title)+"\n                    ")])],1),a("v-divider",{key:"divider-"+n})]})],2)],1),a("v-toolbar",{attrs:{app:"",color:"brown darken-4",dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-spacer",{staticClass:"hidden-md-and-up"}),a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{attrs:{to:"/"}},[e._v(e._s(e.appTitle))])],1),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",to:"/menu"}},[e._v("Menu")]),a("v-spacer",{staticClass:"hidden-sm-and-down"}),e.isAuthenticated?a("v-btn",{attrs:{outline:"",color:"white"},on:{click:e.logout}},[e._v("Logout")]):a("div",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:"",to:"/sign-in"}},[e._v("SIGN IN")]),a("v-btn",{attrs:{color:"brown lighten-3",to:"/join"}},[e._v("JOIN")])],1)],1)],1)},o=[],l={name:"AppNavigation",data:function(){return{appTitle:"Meal Prep",drawer:!1,items:[{title:"Menu"},{title:"Sign In"},{title:"Join"}]}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){this.$store.dispatch("userSignOut")}}},c=l,d=(a("186f"),a("2877")),m=a("6544"),p=a.n(m),h=a("8336"),v=a("ce7e"),f=a("8860"),b=a("ba95"),g=a("5d23"),x=a("f774"),y=a("9910"),_=a("71d9"),w=a("706c"),C=a("2a7f"),k=Object(d["a"])(c,u,o,!1,null,"86bf244c",null),q=k.exports;p()(k,{VBtn:h["a"],VDivider:v["a"],VList:f["a"],VListTile:b["a"],VListTileContent:g["a"],VNavigationDrawer:x["a"],VSpacer:y["a"],VToolbar:_["a"],VToolbarSideIcon:w["a"],VToolbarTitle:C["a"]});var V={name:"App",components:{AppNavigation:q}},S=V,A=a("7496"),P=a("549c"),j=Object(d["a"])(S,s,r,!1,null,null,null),T=j.exports;p()(j,{VApp:A["a"],VContent:P["a"]});var E=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("home-hero"),a("home-details"),a("home-plans")],1)},N=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"home-hero",staticStyle:{"max-height":"100vh",background:"url('http://source.unsplash.com/0BhSKStVtdM')"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[a("div",{staticClass:"display-4 font-weight-black white--text text-xs-center"},[e._v("HEALTHY MEALS")]),a("div",{staticClass:"display-4 font-weight-black white--text text-xs-center mb-3"},[e._v("FOR YOUR TABLE")]),a("div",{staticClass:"display-1 font-weight-bold white--text text-xs-center"},[e._v("Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.")]),a("v-btn",{staticClass:"mt-5 brown darken-4",attrs:{fab:""}},[a("v-icon",{attrs:{large:"",color:"white"}},[e._v("expand_more")])],1)],1)],1)},I=[],R={name:"HomeHero"},M=R,$=(a("2dfb"),a("a523")),H=a("132d"),U=a("a722"),B=Object(d["a"])(M,L,I,!1,null,"2ec61797",null),D=B.exports;p()(B,{VBtn:h["a"],VContainer:$["a"],VIcon:H["a"],VLayout:U["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display-2 text-xs-center my-5"},[e._v("Big Title Goes Here")]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.")])]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.")]),a("p",{staticClass:"subheading mt-3"},[e._v("Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.")]),a("p",{staticClass:"subheading mt-3"},[e._v("Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.")])]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[e._v("Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.")])])],1)],1)},K=[],z={name:"HomeDetails"},G=z,J=a("0e8f"),Q=Object(d["a"])(G,F,K,!1,null,"369e2200",null),Y=Q.exports;p()(Q,{VContainer:$["a"],VFlex:J["a"],VLayout:U["a"]});var Z=a("8df8"),W={name:"home",components:{HomeHero:D,HomeDetails:Y,HomePlans:Z["a"]}},X=W,ee=Object(d["a"])(X,O,N,!1,null,null,null),te=ee.exports;n["a"].use(E["a"]);var ae=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:te},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/menu",name:"menu",component:function(){return a.e("chunk-2d0efc70").then(a.bind(null,"9a0b"))}},{path:"/sign-in",name:"signin",component:function(){return Promise.all([a.e("chunk-f3f7853c"),a.e("chunk-2d0cb6c3")]).then(a.bind(null,"4a33"))}},{path:"/join",name:"join",component:function(){return Promise.all([a.e("chunk-f3f7853c"),a.e("chunk-2d216460")]).then(a.bind(null,"c283"))}}]}),ne=(a("96cf"),a("3b8d")),ie=a("2f62"),se=a("bc3a"),re=a.n(se),ue=a("8aa5"),oe=a.n(ue);n["a"].use(ie["a"]);var le=new ie["a"].Store({state:{recipes:[],apiUrl:"https://api.edamam.com/search"},mutations:{setRecipes:function(e,t){e.recipes=t}},actions:{getRecipes:function(){var e=Object(ne["a"])(regeneratorRuntime.mark(function e(t,a){var n,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,i=t.commit,e.prev=1,e.next=4,re.a.get("".concat(n.apiUrl),{params:{q:a,app_id:"c094e562",app_key:"024375fe2126d38297ff33637d8381f6",from:0,to:9}});case 4:s=e.sent,i("setRecipes",s.data.hits),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),i("setRecipes",[]);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,a){return e.apply(this,arguments)}return t}(),userLogin:function(e,t){var a=e.commit,n=t.email,i=t.password;oe.a.auth().signInWithEmailAndPassword(n,i).then(function(e){a("setUser",e),a("setIsAuthenticated",!0)}).catch(function(){a("setUser",null),a("setIsAuthenticated",!1)})},userSignOut:function(e){var t=e.commit;oe.a.auth().signOut().then(function(){t("setUser",null),t("setIsAuthenticated",!1),router.push("/")}).catch(function(){t("setUser",null),t("setIsAuthenticated",!1),router.push("/")})}}}),ce={apiKey:"AIzaSyBUmhVMR6jrF6a_ct1ZzF8uQ6xDMI5pGvU",authDomain:"meal-prep-992b2.firebaseapp.com",databaseURL:"https://meal-prep-992b2.firebaseio.com",projectId:"meal-prep-992b2",storageBucket:"",messagingSenderId:"283707562750",appId:"1:283707562750:web:d3f8575c93e1cafc"};oe.a.initializeApp(ce),n["a"].config.productionTip=!1,new n["a"]({router:ae,store:le,render:function(e){return e(T)}}).$mount("#app")},"8df8":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center display-1 font-weight-black my-5",attrs:{xs12:""}},[e._v("Available Meal Plans")])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[a("v-card",[a("v-responsive",[a("v-img",{attrs:{src:"http://source.unsplash.com/hjCA3ecCXAQ",height:"500px"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline white--text"},[e._v("KETO")])])],1)],1)],1)],1),a("v-card-text",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Keto")]),a("div",[e._v("The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.\n                        ")])])]),["menu"].includes(e.$route.name)?a("v-card-actions",[a("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("keto")}}},[e._v("Select This Plan")])],1):e._e()],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[a("v-card",[a("v-responsive",[a("v-img",{attrs:{src:"http://source.unsplash.com/6S27S6pZ6o0",height:"500px"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline white--text"},[e._v("PALEO")])])],1)],1)],1)],1),a("v-card-text",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Paleo")]),a("div",[e._v("The Paleo diet requires the sole or predominant consumption of foods presumed to have been the only foods available to or consumed by humans during the Paleolithic era.\n                        ")])])]),["menu"].includes(e.$route.name)?a("v-card-actions",[a("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("paleo")}}},[e._v("Select This Plan")])],1):e._e()],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[a("v-card",[a("v-responsive",[a("v-img",{attrs:{src:"http://source.unsplash.com/1SPu0KT-Ejg",height:"500px"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline white--text"},[e._v("VEGAN")])])],1)],1)],1)],1),a("v-card-text",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Vegan")]),a("div",[e._v("The vegan diet abstains from the use of animal products. The vegan diet does not consume meat, diary products, eggs or any all other animal-derived ingredients.\n                        ")])])]),["menu"].includes(e.$route.name)?a("v-card-actions",[a("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("vegan")}}},[e._v("Select This Plan")])],1):e._e()],1)],1)],1)],1)},i=[],s={name:"HomePlans",methods:{showRecipes:function(e){this.$store.dispatch("getRecipes",e)}}},r=s,u=a("2877"),o=a("6544"),l=a.n(o),c=a("8336"),d=a("b0af"),m=a("99d9"),p=a("a523"),h=a("0e8f"),v=a("adda"),f=a("a722"),b=a("6b53"),g=Object(u["a"])(r,n,i,!1,null,"3596f956",null);t["a"]=g.exports;l()(g,{VBtn:c["a"],VCard:d["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:p["a"],VFlex:h["a"],VImg:v["a"],VLayout:f["a"],VResponsive:b["a"]})}});
//# sourceMappingURL=app.02e6ee9e.js.map