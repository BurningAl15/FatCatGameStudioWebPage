(function(A){function t(t){for(var a,i,o=t[0],s=t[1],c=t[2],l=0,u=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(A[a]=s[a]);g&&g(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],a=!0,o=1;o<e.length;o++){var s=e[o];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),A=i(i.s=e[0]))}return A}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=A,i.c=a,i.d=function(A,t,e){i.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},i.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},i.t=function(A,t){if(1&t&&(A=i(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)i.d(e,a,function(t){return A[t]}.bind(null,a));return e},i.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return i.d(t,"a",t),t},i.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},i.p="/FatCatGameStudioWebPage/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var g=s;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"0893":function(A,t,e){A.exports=e.p+"img/itch-io.75706ff0.png"},"0fba":function(A,t,e){A.exports=e.p+"img/FatCatGameStudioBackground.e75e8efe.png"},"11ef":function(A,t,e){A.exports=e.p+"img/youtube.3b52394a.svg"},"14f6":function(A,t,e){A.exports=e.p+"img/github.250ccd9b.svg"},1771:function(A,t,e){var a={"./FatCatGameStudioBackground.png":"0fba","./FatcatGameStudio.png":"91a8","./FatcatGameStudio2.png":"e785","./Icon.png":"a136","./Icon2.png":"2fc4","./MemberIcons/AldhairVeraIcon.png":"d368","./MemberIcons/AldhairVeraLogo.png":"c581","./PlatformIcons/appstore.png":"e308","./PlatformIcons/itch-io.png":"0893","./PlatformIcons/itch-io.svg":"f031","./PlatformIcons/playstore.png":"2e70","./apple.svg":"d8a3","./css/main.css":"5aea","./icons/facebook.svg":"8485","./icons/github.svg":"14f6","./icons/google-plus.svg":"2cce","./icons/instagram.svg":"bd6c","./icons/linkedin.svg":"9ed9","./icons/parcel.svg":"9582","./icons/twitter.svg":"acf9","./icons/whatsapp.svg":"7583","./icons/youtube.svg":"11ef","./logo.png":"cf05"};function n(A){var t=r(A);return e(t)}function r(A){if(!e.o(a,A)){var t=new Error("Cannot find module '"+A+"'");throw t.code="MODULE_NOT_FOUND",t}return a[A]}n.keys=function(){return Object.keys(a)},n.resolve=r,A.exports=n,n.id="1771"},"1f04":function(A,t,e){"use strict";var a=e("8f1d"),n=e.n(a);n.a},"24d6":function(A,t,e){},"255d":function(A,t,e){},"2cce":function(A,t,e){A.exports=e.p+"img/google-plus.00542666.svg"},"2e70":function(A,t,e){A.exports=e.p+"img/playstore.740f59b1.png"},"2fc4":function(A,t){A.exports="data:image/png;base64,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"},"34db":function(A,t,e){"use strict";var a=e("e56f"),n=e.n(a);n.a},3584:function(A,t,e){var a={"./AldhairVeraIcon.png":"d368","./AldhairVeraLogo.png":"c581"};function n(A){var t=r(A);return e(t)}function r(A){if(!e.o(a,A)){var t=new Error("Cannot find module '"+A+"'");throw t.code="MODULE_NOT_FOUND",t}return a[A]}n.keys=function(){return Object.keys(a)},n.resolve=r,A.exports=n,n.id="3584"},"3dbb":function(A,t,e){},"3f55":function(A,t,e){"use strict";var a=e("dad4"),n=e.n(a);n.a},4084:function(A,t,e){"use strict";var a=e("f80a"),n=e.n(a);n.a},"45bd":function(A,t,e){},5624:function(A,t,e){"use strict";var a=e("3dbb"),n=e.n(a);n.a},"56d7":function(A,t,e){"use strict";e.r(t);e("4160"),e("d3b7"),e("ac1f"),e("5319"),e("159b"),e("ddb0"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("main",[e("NavBar"),e("router-view")],1),e("Footer")],1)},r=[],i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"wrapper"},[e("router-link",{staticClass:"navBarLogo",attrs:{to:"/"}},[e("img",{attrs:{src:A.logoImage,width:"60"}})]),e("SocialBar"),e("nav",{staticClass:"NavBar"},[e("ul",{staticClass:"side"},[e("li",{staticClass:"element"},[e("router-link",{staticClass:"navBar-link",attrs:{to:"/"}},[A._v("Games")]),A._v("| ")],1),e("li",{staticClass:"element"},[e("router-link",{staticClass:"navBar-link",attrs:{to:"/blog"}},[A._v("Blog")])],1),e("li",{staticClass:"element"},[e("router-link",{staticClass:"navBar-link",attrs:{to:"/about"}},[A._v("About")])],1)])])],1)},o=[],s=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},c=[function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("ul",{staticClass:"side"},[a("li",{staticClass:"element"},[a("a",{attrs:{target:"_blank",href:"https://twitter.com/FatCatGameSt"}},[a("img",{staticClass:"iconProperties",attrs:{src:e("acf9"),width:"35"}})])]),a("li",{staticClass:"element"},[a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/channel/UC172ipp9sT53n7IsHMa3bfw/"}},[a("img",{staticClass:"iconProperties",attrs:{src:e("11ef"),width:"35"}})])]),a("li",{staticClass:"element"},[a("a",{attrs:{target:"_blank",href:"https://www.instagram.com/fatcatgamestudio/"}},[a("img",{staticClass:"iconProperties",attrs:{src:e("bd6c"),width:"35"}})])]),a("li",{staticClass:"element"},[a("a",{attrs:{target:"_blank",href:"mailto:fatcatgamestudio.oc@gmail.com"}},[a("img",{staticClass:"iconProperties",attrs:{src:e("9582"),width:"35"}})])])])}],g=(e("1f04"),e("2877")),l={},u=Object(g["a"])(l,s,c,!1,null,"0fe0a6e2",null),C=u.exports,p={data:function(){return{logoImage:e("91a8")}},components:{SocialBar:C}},d=p,I=(e("b00c"),Object(g["a"])(d,i,o,!1,null,"18fcd3b8",null)),E=I.exports,f=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("footer",{staticClass:"footerBackground"},[e("div",{staticClass:"wrapper"},[e("div",[e("img",{staticClass:"navBarLogo",attrs:{src:A.logoImage,width:"60"}}),e("p",{staticClass:"titleTextFooter"},[A._v("FatCat Game Studio 2020")])]),e("div",[A._m(0),e("SocialBar")],1)])])},Q=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("ul",[e("li",{staticClass:"element ToRight"},[e("a",{attrs:{href:"https://flappy-kitten.flycricket.io/privacy.html",target:"_blank"}},[A._v("General Privacy Policy")])]),e("li",{staticClass:"element ToRight"},[e("a",{attrs:{href:"/",target:"_blank"}},[A._v("Mixed Audience Privacy Policy")])]),e("li",{staticClass:"element ToRight"},[e("a",{attrs:{href:"/",target:"_blank"}},[A._v("Do Not Sell My Personal Information")])]),e("li",{staticClass:"element ToRight"},[e("a",{attrs:{href:"/",target:"_blank"}},[A._v("Terms Of Service")])])])}],m={data:function(){return{logoImage:e("91a8")}},components:{SocialBar:C}},B=m,h=(e("3f55"),Object(g["a"])(B,f,Q,!1,null,"52ed6ac8",null)),v=h.exports,b={name:"App",components:{NavBar:E,Footer:v}},k=b,S=(e("5c0b"),Object(g["a"])(k,n,r,!1,null,null,null)),y=S.exports,G=e("5530"),w=e("8c4f"),N=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("BodyGames")],1)},O=[],D=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("section",{staticClass:"body"},[e("Hero",{attrs:{heroIcon:A.heroIcon}}),e("h2",{staticClass:"titleTextAndMargin"},[A._v("We make the most incredible little worlds!")]),e("GameCardList")],1)},J=[],U=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("section",{staticClass:"list"},A._l(A.games,(function(A){return e("GameCard",{key:A.id,attrs:{game:A}})})),1)},R=[],x=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("article",{staticClass:"box"},[a("router-link",{attrs:{to:{name:"gameData",params:{id:A.currentGame.id,game:A.currentGame}}}},[a("img",{staticClass:"cardimage",attrs:{src:e("1771")("./"+A.currentGame.icon),width:"150"}})]),a("h2",{staticClass:"cardtext"},[A._v(A._s(A.currentGame.name))])],1)},T=[],j={props:{game:Object},data:function(){return{currentGame:this.game}}},Y=j,F=(e("5624"),Object(g["a"])(Y,x,T,!1,null,"065007b6",null)),P=F.exports,L={components:{GameCard:P},data:function(){return{games:[{id:0,name:"Flappy Kitten",icon:"Icon.png",description:"Play in a incredible kitten world and unlock all the kittens!"},{id:1,name:"Lost In Space",icon:"Icon2.png",description:"Survive in the space until you can found someone to help you!"},{id:2,name:"Flappy Kitten",icon:"Icon.png",description:"Play in a incredible kitten world and unlock all the kittens!"},{id:3,name:"Lost In Space",icon:"Icon2.png",description:"Survive in the space until you can found someone to help you!"},{id:4,name:"Flappy Kitten",icon:"Icon.png",description:"Play in a incredible kitten world and unlock all the kittens!"},{id:5,name:"Lost In Space",icon:"Icon2.png",description:"Survive in the space until you can found someone to help you!"}]}}},z=L,K=(e("34db"),Object(g["a"])(z,U,R,!1,null,"39ded2e4",null)),X=K.exports,W=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",[a("img",{staticClass:"LogoHero",attrs:{alt:""+A.heroIcon.description,src:e("1771")("./"+A.heroIcon.icon)}})])},V=[],q={props:{heroIcon:Object}},H=q,M=(e("4084"),Object(g["a"])(H,W,V,!1,null,"4f6b2510",null)),Z=M.exports,_={components:{GameCardList:X,Hero:Z},data:function(){return{heroIcon:{id:0,icon:"FatcatGameStudio.png",description:"FatCat Game Studio logo"}}}},$=_,AA=Object(g["a"])($,D,J,!1,null,null,null),tA=AA.exports,eA={components:{BodyGames:tA}},aA=eA,nA=Object(g["a"])(aA,N,O,!1,null,null,null),rA=nA.exports,iA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("BodyBlog")],1)},oA=[],sA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("section",{staticClass:"body"},[e("Hero",{attrs:{heroIcon:A.heroIcon}}),e("h2",{staticClass:"titleTextAndMargin"},[A._v("Blog")])],1)},cA=[],gA={components:{Hero:Z},data:function(){return{heroIcon:{id:0,icon:"FatcatGameStudio.png",description:"FatCat Game Studio logo"}}}},lA=gA,uA=Object(g["a"])(lA,sA,cA,!1,null,null,null),CA=uA.exports,pA={components:{BodyBlog:CA}},dA=pA,IA=Object(g["a"])(dA,iA,oA,!1,null,null,null),EA=IA.exports,fA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("BodyAbout")],1)},QA=[],mA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("section",{staticClass:"body"},[e("Hero",{attrs:{heroIcon:A.heroIcon}}),A._m(0),e("TeamCardList")],1)},BA=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"wrapper bottomMargin"},[e("h2",{staticClass:"titleTextAndMargin"},[A._v("We make incredible games!")]),e("article",{staticClass:"aboutParagraph"},[e("p",[A._v(" We are FatCat Game Studio, a Peruvian Game Studio that love cience fiction, art, videogames and almost every type of hobby that could make our mind blow. "),e("br"),e("br"),A._v("Currently working on mobile games. ")])])])}],hA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("section",{staticClass:"list"},A._l(A.members,(function(A){return e("TeamCard",{key:A.id,attrs:{member:A}})})),1)},vA=[],bA=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("article",{staticClass:"box"},[a("a",{attrs:{target:"_blank",href:""+A.member.socialMediaUrl}},[a("div",{staticClass:"container"},[a("img",{staticClass:"cardimage",attrs:{src:e("3584")("./"+A.member.icon),width:"150"}}),a("div",{staticClass:"positionContainer"},[a("div",{staticClass:"positionAlign"},[a("span",[A._v(A._s(A.member.position))])])])])]),a("h2",{staticClass:"cardtext"},[A._v(A._s(A.member.name))])])},kA=[],SA={props:{member:Object}},yA=SA,GA=(e("af51"),Object(g["a"])(yA,bA,kA,!1,null,"2d2d3ee3",null)),wA=GA.exports,NA={components:{TeamCard:wA},data:function(){return{members:[{id:0,name:"Aldhair Vera",position:"CEO / Main Programmer / Game Designer",icon:"AldhairVeraIcon.png",socialMediaUrl:"https://www.instagram.com/al_vera15/"},{id:1,name:"Nancy Rojas",position:"UX Designer / 3d Artist / Technical Artist",icon:"AldhairVeraLogo.png",socialMediaUrl:"https://www.instagram.com/i_am_nhymer/"}]}}},OA=NA,DA=(e("a1d5"),Object(g["a"])(OA,hA,vA,!1,null,"01ec98b0",null)),JA=DA.exports,UA={components:{TeamCardList:JA,Hero:Z},data:function(){return{heroIcon:{id:0,icon:"FatcatGameStudio.png",description:"FatCat Game Studio logo"}}}},RA=UA,xA=(e("cd52"),Object(g["a"])(RA,mA,BA,!1,null,"ff7c59aa",null)),TA=xA.exports,jA={components:{BodyAbout:TA}},YA=jA,FA=Object(g["a"])(YA,fA,QA,!1,null,null,null),PA=FA.exports,LA=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("keep-alive",[A.isLoading?a("section",{staticClass:"body"},[a("div",{staticClass:"loader"},[A._v("Loading...")])]):a("section",{staticClass:"body"},[a("Hero",{attrs:{heroIcon:A.heroIcon}}),a("div",{staticClass:"wrapper"},[a("article",{staticClass:"bodyDataButtonList"},[a("img",{staticClass:"cardimage",attrs:{src:e("1771")("./"+A.currentGame.icon)}}),a("div",{staticClass:"platformList"},[A.currentGame.playstoreUrl?a("a",{staticClass:"linkImage",attrs:{target:"_blank",href:""+A.currentGame.playstoreUrl}},[a("img",{staticClass:"imageInLink",attrs:{src:e("2e70")}})]):A._e(),A.currentGame.appstoreUrl?a("a",{staticClass:"linkImage",attrs:{target:"_blank",href:""+A.currentGame.appstoreUrl}},[a("img",{staticClass:"imageInLink",attrs:{src:e("e308")}})]):A._e(),A.currentGame.itch-A.ioUrl?a("a",{staticClass:"linkImage",attrs:{target:"_blank",href:""+(A.currentGame.itch-A.ioUrl)}},[a("img",{staticClass:"imageInLink",attrs:{src:e("0893")}})]):A._e(),A.currentGame.huaweiUrl?a("a",{staticClass:"linkImage",attrs:{target:"_blank",href:""+A.currentGame.huaweiUrl}},[a("img",{staticClass:"imageInLink",attrs:{src:e("0893")}})]):A._e()])]),a("article",{staticClass:"descriptionData"},[a("p",{staticClass:"paragraph"},[A._v(A._s(A.currentGame.description))])]),a("article",{staticClass:"marginConfig imageList"},A._l(A.imgList,(function(A){return a("img",{key:A.id,staticClass:"imageConfig",attrs:{src:e("1771")("./"+A.imgPath),width:"200"}})})),0),a("article",{staticClass:"marginConfig"},[a("div",{staticClass:"video-container"},[a("iframe",{staticClass:"youtubevideocontainer",attrs:{width:"1300",height:"761",src:""+A.currentGame.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])],1)])},zA=[],KA=(e("96cf"),e("1da1")),XA=e("bc3a"),WA=e.n(XA),VA=WA.a.create({baseURL:"https://sheltered-atoll-30042.herokuapp.com/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),qA={getEvents:function(){return Object(KA["a"])(regeneratorRuntime.mark((function A(){return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,VA.get("/games");case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))()},getEvent:function(A){return Object(KA["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,VA.get("/games/"+A);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},HA={props:["id","game"],components:{Hero:Z},data:function(){return{heroIcon:{id:0,icon:"FatcatGameStudio.png",description:"FatCat Game Studio logo"},imgList:[],isLoading:!0,currentGame:{}}},created:function(){var A=this;return Object(KA["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:qA.getEvent(A.id).then((function(t){A.isLoading=!1,A.currentGame=t.data,A.imgList=A.currentGame.imgList,console.log(A.imgList)})).catch((function(A){console.log("There was an error:",A.response)}));case 1:case"end":return t.stop()}}),t)})))()}},MA=HA,ZA=(e("a10d"),Object(g["a"])(MA,LA,zA,!1,null,"3c536451",null)),_A=ZA.exports;a["a"].use(w["a"]);var $A=[{path:"/",name:"games",component:rA,props:!0},{path:"/games/:id",name:"gameData",component:_A,props:function(A){return Object(G["a"])({game:A.query.game},A.params)}},{path:"/blog",name:"blog",component:EA},{path:"/about",name:"about",component:PA}],At=new w["a"]({mode:"hash",base:"/FatCatGameStudioWebPage/",routes:$A}),tt=At,et=e("2f62");a["a"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{},getters:{}}),nt=e("8103"),rt=e.n(nt),it=e("bba4"),ot=e.n(it),st=e("ef13");st.keys().forEach((function(A){var t=st(A),e=rt()(ot()(A.replace(/^\.\/(.*)\.\w+$/,"$1")));a["a"].component(e,t.default||t)})),a["a"].prototype.$http=WA.a,a["a"].config.productionTip=!1,new a["a"]({router:tt,store:at,render:function(A){return A(y)}}).$mount("#app")},"5aea":function(A,t,e){},"5c0b":function(A,t,e){"use strict";var a=e("9c0c"),n=e.n(a);n.a},7583:function(A,t,e){A.exports=e.p+"img/whatsapp.0e11c4be.svg"},8485:function(A,t,e){A.exports=e.p+"img/facebook.ad6bd3a0.svg"},"8f1d":function(A,t,e){},"91a8":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAPQElEQVR42u3dbWxddR3AcV6g70gwRjFxqCEOEgc6FTRC2MY2tUzYXMac4MiiMmJ8WPaU8ehYMIvKDJMXo1sIbm4YAd8YkY1kuAVjNYbCG9cy9cXSlq52W23LnnA6jl4SzWbW7Z7/uefhf8/nm/zCG+g99/zP+X96W3rvRRdJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJatuSSLNy1lVSBTaai9/xzqjGRmNdJdlobDTW1bpKNhobjXW1rpKNxkZjXa2rJBuNdbWukmw0NhrrKslGY6OxrtZVstHYaKyrdZVsNDYa62pdJdlorKt1lWSjsdFYV0k2GhuNdbWuko3GRmNdratko7HRWFfrKslGI+sqKYKN5suLFgfNp6+fZqMBiHWV6rzRbOnsDJrFX1lio6nouk6+ckrwugJEstEABCAAkQQQ6woQSQCx0QBEEkAAAhDrKgEEIAABiGSjAYh1BYgkgFhXgEgCiI0GIJIAAhCAWFcJIAABCEAkGw1ArCtAJAFEAJEEEBsNQCS1JyA/27EjaL721bszbTRZimltsgQQSZUGJLS/7t+fLPzSHUFTl00q69rMnNURdH5f29cbPACRAFIIIL7LzXdtVi5fHXR+y3jVAxAJIAABCEAkgAAEIACRBBCAAEQSQAACEEkAAQhAACIBBCAAAYgEEIAABCCSAAIQgEgCCEAAIgkgAAEIQCSAAAQgAJEAAhCAAEQSQAACEEnNbTRZWrP63uAJbXx0NOn9U0/QlAFeWdUNkDp8zovUNt+p3jhtVtJ34EDwxLap1ml2PvdC4WtzcOhg8LXk1YsEEIAABCASQAACEIBIAAEIQAAiCSBwAAhAJIAABCAAkQACEIAARAIIQAACEAkgAAEIQCQBBCAAAYgEEIAABCASQAACEIBIAAEIQAAiAQQgAAGIVCcIit5UG4AMvD4QPAABSFUA8Tbw8kqi4E1m9syOpE4NHhzM9Iqr6KlTZSALEAEEIAABCEAEEIAABCAAkQACEIAARAIIQAACEAkgAAEIQAAigAAEIAABiAQQgAAEIBJAAAIQgEgAAQhAACIBBCAAAQhABBCAAAQgAJEAAhCAAEQCCEAAAhAJIAABCECkqAAp4+bb+dzOUja4SZdfUfhnP9QJkKuunFL4+fV5IFLNXrkABCDtAIidQAIIQAACEAkgAAEIQCSAAAQgAJEAAhCAAEQSQAACEIBIAAEIQAAiAQQgAAGIBBCAAAQgEkAAAhCASAIIQAACEAkgAAEIQCSAAAQgAJFKgqCMd+Pd9fwLSf9Af9Bk6eopU5NL3/Xe1JOlV7tfTX73267U0//nv2SakMdsTJau++RnCj+/w0PDwddSlmv4xRf3eDdeAST0Bpr84Y8kK5atCppT/ziV1KUPfmhy0PkdfWhzpinjbcpj68H7HwqaeXMXeOUiZQFkxvTZwT86AAhAqlDo9fv99Y8ARAIIQAACEAkgAAEIQCSAAAQgAJEAAhCAAAQgAghAAAIQgEgAAQhAACIBBCAAAYgEEIAABCASQAACEIAARAABCEAAAhAJIAABCEAkgAAEIACRAAIQgABEqg0g73v/B5KbO24NmkOHjiRHRsImtjZueCy5/57vpp7brp2RaUIeszGxFXodNWZOx9ygmfrxT0UFSKzA26HbGJAYP5EwprKe47pU5icSxrIxlnWf+8RHgAAEIACJfIMDiAACEIAABCByYQEEIAABCEAAAhCAAMR9DhCAAAQgAAEIQAQQgAAEIAARQAACEIAARC4sgAAEIAABCEAAAhCAuM8BAhCAAAQgAAGIAAIQgAAEIAIIQAACEIDIhQUQgAAEIAABSAtm1/O7kv6BvqCpS5dc+u5MU5eGh4aDryWAAEQZL6wyvkPu/uMriRTzq7w6AXLDtJnJ3Hm3pR6AKJcLEiACSDz36/JlK5ItnZ2pByACiAACEIAIIBJAACKASAABiAAiAQQgAAEIQAQQgABEABFAAAIQAUQCCEAEEAkgABFAJIAABCAAAYgAAhCACCACCEAAIoBIAAGIACIBBCACCEDUDoCEFtv9+sgPfpS8tHdP6gGIACL9X5s3bYlqY8x6v259cptPfBRAJIAARACRAAIQAUQCCEAAAhCACCAAAYgAIgEEIAKIBBCACCASQAAigEgAAQhAAAIQAQQgABFAJIAARACRAAIQAUQCCEAEEIAIIAABCEAAIoC0OSDbfrI96evvSz0AEUCkmgPyq1/+Oug8AUQAkQACEAFEAghABBAJIAARQCSAAAQgAAGIAAIQgAggEkAAIoBIAAGIACIBBCACiAQQgAAEIAARQAACEAFEAghABBAJIAARQCSAAEQAAYgAAhCAAAQg+l9j42PJyN9HUk/dACkjgAggqnRDg0NBn1xXp7LcN2UNQAQQAQQgABFABBCAAEQAEUAAAhCAAAQgAAEIQAAigAggAAGIACKAAAQgAogAAhCACCACCEAAAhCAAEQAAQhABBABBCAAEUAEEIAARAARQAACEAEEIAABCEAAApDQ2bN7bzJyeCRo1H6A/Out08EDkPzn5089HXSvAkQTAlLWTaT2AyTLnHzzZFTnaMWyVVHNLXO+WNq9aqdVy1+9CCAxAxJb27fu8CpCABFABBABRAABCEAEEIAABCAAkQACEIAABCACiAAigAggAogAIoAABCAAAYgAAhCAAAQgEkAEEIAARAARQAQQAUQAEUAEEIAABCAAkQACEIAARAKIzmrhgtuTBfMXpZ4sgJw69c+oztHi25dENdNvnAUQAUT5tvWJbcFr+rGp19XmFUiMHygFEAFEAAEIQAQQAQQgABFAAAIQgABEAghAAAIQgAggAghAACKACCAAAYgAAhCAAAQgAghAAAIQgEgAEUAAAhABRAABCEAEEAEEIAARQAACEIAARAABCEAAAhCpLoC8cfSN6CYmQK756LVJT89rQXPi5Ink9FungwYgABFA3PQVOE9ZAMkyTz6xNfjVy8DrA8noyGjqOXrsaCnXUozZ8QQQgLQlIKFz6G+HSgPEDiKAAAQgAAGIBBCAAAQgEkAAAhCASAABCEAAIgEEIAABCEAkgAAEIACRAAIQgABEAghAAAIQCSAAAQhAJIAABCAAAYgEEIAABCASQAACEIBIAAEIQAAiFY1AWRsyQABy5tw047PJooV3BA1ApAhfRQAEIFWYq6/5BEAkgAAEIACRAAIQgAAEIAIIQAACEIBIAAEIQAAiAQQgAAGIBBCAAAQgEkAAAhCAAEQAAQhAAAIQCSAAAQhAJIAABCAAkQACEIAARAIIQAACEIAIIAABCEAAIgEEIACZEJDT/3nOIQMQASTDjTB7ZkfyjaXfCp66ADLp8iuiOk91AiTLAEQAyQhIbJWxud1w/fSozhFAACIBBCAAAYgEEIAABCASQAACEIAARAABCEAAAhABBCAAAQhAJIAABCAAkQACEIAARAIIQAACEIAIIAABCEAAIoAABCAAAYgEEIAABCASQAACEIBIAAEIQAACEAGklYCMjY8VPjECUvQ5mnXT56MD5D2XTYrqWgKIag+IMQYgAogxBiASQIwBiAQQYwAiAcQYAxABxBgDEAkgxgBEAogxAJEAYgxAJIAYYwAigBhjACIBxBiASAAxBiASQIwBiAQQYwxA1OaASCo+u48kSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSVKhrXv44aQqU4fjrtKxx3ytuF6qf9xq87Zt/2mUn3XwcvfLlTruTZs6mz724yeOV+a4v/nt76TaFGL9bIx58+dH+5ke9z3wQGWOe3BwCCICCEAAAhCACCAAAQhAACKAAAQgAAGIAAIQgAAEIAIIQAACEIAARAABCEAAAhABBCAAAQhABBCAAAQgABFAAAIQgABEAAEIQAACEIAIIAABCEAAolIBaWzcx44fy23yBGT7UzuaOobe3v25AtIozTlJ2/KVK1t+vkMByfNaSXP8IYDkuUZpz3uzx7F23brUxzI0NJzb9SKAnNW+nn2VuIhCAHnmF882dewHDvTlDkiem/bqNWsqcyxVuc5DAInxvHxv/frUz3N8/CgYBBCAAAQgABFAAAIQgABEAAEIQAACEAEEIAABCEAkgAAEIAABiAACEIAABCACCEAAAhCACCAAAQhAACKAAAQgAAGIlBGQB9eufXuzzGvyBGTpXXc3dQwhNyFA2g+QNNctQASQCpQnIHkGkPYDpArXOUAEEIAABCAAEUAAAhCAAEQCCEAAAhCACCAAAQhAACKAAAQgAAGIAAIQgAAEIAIIQAACEIBIAAEIQAACEAEEIAABCEAEEIAABCAAEUAAAhCAAEQAObvdu3+TNN6tNq/JE5DHH9/c1DF0/b4LIABJdd0CRABpIm/nDpC6ABLjeQGIAAIQgAAEIAIIQAACEIAIIAABCEAAIgEEIAABCEAEEIAABCAAEUAAAhCAAEQAAQhAAAIQAQQgAAEIQCSAAAQgAAGIAAKQ6gPy9LPP5DoAAYgAApA2BSTvAAIQAQQgAAEIQAQQgAAEIAARQAACEIAARAIIQAACEIAIIAABCEAAIoAABCAAAYgAAhCAAAQgAghAAAIQgEgAAQhAAAIQAQQgAAEIQAQQgAAEIABR/HW/0p00O7Eed9pjz/NrV+l55n0seY/rpdrHIkmSJEmSJEmSJEmSJEmSJElqbWn/kDD0ce76+tILfu0fbtiQ+uuPjo43ddxj42Nvf+3GP/N6jnNuubXp87hi1erC///7Iv7Yrae3p5A/pHv00R9f8Gu14vFC/8Cxcb234vHS/vddXX/wh4QCCEAAAhCACCAAAQhAACKAAAQgAAGIdA5A8nycMwGZ6IZpBSATfe1zAdLqzeZMQDZufOy8U8ZaF/WGfud6zI45X2jp45UByPn+vcNHDlcSkGYeByACSMUAqeJaAwQgAJEfYUUASF1/hAUQgAggAAEIQAAiAQQgAAEIQJQzIHneiHX7HcjevS+dd6p6PeQFyOc6bgYIQAQQgDQDSKzXA0AAIgHkHID8d+oKyJnnYKKJEZA8n8tE19CFHq8qgDRzrABRSwAp6ncgZQByoefidyDx/g4kz+fiDwklgAAEIAABiAACEIAABCCqTHfeuSRpdlrxOBM9diuOP83zavVxpDmXVV/nVh1jns+3iOeS9py1+vFiWWdJkiRJkiRJkiRJkiRJkiRJkiRJkqS279+prJqC6tuZFAAAAABJRU5ErkJggg=="},9582:function(A,t,e){A.exports=e.p+"img/parcel.cb6f5274.svg"},"9c0c":function(A,t,e){},"9ed9":function(A,t,e){A.exports=e.p+"img/linkedin.6456d58a.svg"},a10d:function(A,t,e){"use strict";var a=e("24d6"),n=e.n(a);n.a},a136:function(A,t){A.exports="data:image/png;base64,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"},a1d5:function(A,t,e){"use strict";var a=e("ac4d"),n=e.n(a);n.a},ac4d:function(A,t,e){},acf9:function(A,t,e){A.exports=e.p+"img/twitter.d457cdc6.svg"},af51:function(A,t,e){"use strict";var a=e("d63a"),n=e.n(a);n.a},b00c:function(A,t,e){"use strict";var a=e("255d"),n=e.n(a);n.a},bd6c:function(A,t,e){A.exports=e.p+"img/instagram.19ab0166.svg"},c581:function(A,t,e){A.exports=e.p+"img/AldhairVeraLogo.724654fd.png"},cd52:function(A,t,e){"use strict";var a=e("45bd"),n=e.n(a);n.a},cf05:function(A,t,e){A.exports=e.p+"img/logo.82b9c7a5.png"},d368:function(A,t,e){A.exports=e.p+"img/AldhairVeraIcon.0f1ae3b3.png"},d63a:function(A,t,e){},d8a3:function(A,t,e){A.exports=e.p+"img/apple.d21bdbe6.svg"},dad4:function(A,t,e){},e308:function(A,t,e){A.exports=e.p+"img/appstore.2a7f3a86.png"},e56f:function(A,t,e){},e785:function(A,t,e){A.exports=e.p+"img/FatcatGameStudio2.75499391.png"},ef13:function(A,t){function e(A){var t=new Error("Cannot find module '"+A+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,A.exports=e,e.id="ef13"},f031:function(A,t,e){A.exports=e.p+"img/itch-io.ca759ba4.svg"},f80a:function(A,t,e){}});
//# sourceMappingURL=app.c8e7a294.js.map