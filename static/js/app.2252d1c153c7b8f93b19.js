webpackJsonp([1],{"/IgP":function(e,t){},0:function(e,t){},"72JX":function(e,t){},GXTN:function(e,t){},"K7+W":function(e,t){},NCV0:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"container"},[t("div",{staticClass:"logo"},[t("router-link",{attrs:{to:"/hellowworld"}},[t("i",{staticClass:"fab fa-youtube fa-3x"}),this._v(" "),t("h2",[this._v("Youtube")])])],1),this._v(" "),t("nav",{staticClass:"nav"},[t("router-link",{attrs:{to:"/helloworld"}},[this._v("首頁")]),this._v(" "),t("router-link",{attrs:{to:"/collect"}},[this._v("我的最愛")])],1)])])},staticRenderFns:[]};var i={name:"App",components:{Navbar:n("VU/8")(null,r,!1,function(e){n("GXTN")},"data-v-6266bafa",null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(e){n("K7+W")},null,null).exports,c=n("/ocq"),u=n("Dd8w"),l=n.n(u),d=n("NYxO"),m={props:["pageNum","currentPage"],data:function(){return{}},methods:{getCurrentPage:function(e){var t=this.$route.path.split("/")[1];scrollTo(0,0),e<1||e>this.pageNum||("helloworld"==t?this.$store.commit("HomeModule/CURRENTPAGE",e):this.$store.commit("CollectModule/CURRENTPAGE",e))}},computed:{}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"firstPage"},[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.getCurrentPage(1)}}},[n("i",{staticClass:"fas fa-fast-backward"})])]),e._v(" "),n("div",{staticClass:"prev"},[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.getCurrentPage(e.currentPage-1)}}},[n("i",{staticClass:"fas fa-angle-double-left"})])]),e._v(" "),n("div",[n("ul",{staticClass:"pageNum"},e._l(e.pageNum,function(t){return n("li",{key:t,on:{click:function(n){return n.preventDefault(),e.getCurrentPage(t)}}},[n("a",{attrs:{href:""}},[e._v(e._s(t))])])}),0)]),e._v(" "),n("div",{staticClass:"next"},[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.getCurrentPage(e.currentPage+1)}}},[n("i",{staticClass:"fas fa-angle-double-right"})])]),e._v(" "),n("div",{staticClass:"lastPage"},[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.getCurrentPage(e.pageNum)}}},[n("i",{staticClass:"fas fa-fast-forward"})])])])},staticRenderFns:[]};var g={props:["renderPageSelect","pageNumSelect","currentPageSelect"],components:{Page:n("VU/8")(m,f,!1,function(e){n("/IgP")},"data-v-1cb6a655",null).exports},data:function(){return{}},methods:{favoriteToggle:function(e,t){this.$store.commit("CollectModule/FAVORITETOGGLE",{id:e,event:t})},isFavorite:function(e){return this.favoriteItemsId.includes(e)?"fas fa-heart":"far fa-heart"},itemPlay:function(e){this.$store.commit("ItemPlayModule/SETITEM",e),this.$router.push("/itemplay/"+e.id)}},computed:l()({},Object(d.c)(["isLoading"]),Object(d.d)("CollectModule",["favoriteItemsId"])),watch:{},created:function(){}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"box"},[n("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),e._v(" "),e._l(e.renderPageSelect,function(t){return n("div",{key:t.id,staticClass:"singleItem",on:{click:function(n){return e.itemPlay(t)}}},[n("div",{staticClass:"card-top"},[n("img",{attrs:{src:t.snippet.thumbnails.medium.url,alt:""}}),e._v(" "),n("span",{staticClass:"duration"},[e._v(e._s(e._f("duration")(t.contentDetails.duration)))]),e._v(" "),n("a",{staticClass:"favorite",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.favoriteToggle(t.id,n)}}},[n("i",{class:e.isFavorite(t.id)})])]),e._v(" "),n("div",{staticClass:"card-bottom"},[n("h3",{staticClass:"ellipsis title"},[e._v(e._s(t.snippet.title))]),e._v(" "),n("p",{staticClass:"ellipsis"},[e._v(e._s(t.snippet.description))])])])})],2),e._v(" "),e.renderPageSelect.length>0?n("Page",{staticClass:"pagination",attrs:{"page-num":e.pageNumSelect,"current-page":e.currentPageSelect}}):e._e()],1)},staticRenderFns:[]};var v=n("VU/8")(g,p,!1,function(e){n("UICe")},"data-v-1e584a78",null).exports,h={name:"HelloWorld",components:{RenderContent:v},data:function(){return{}},methods:l()({},Object(d.b)("HomeModule",["getData"])),computed:l()({},Object(d.c)("HomeModule",["renderPage","allPageNum"]),Object(d.d)("HomeModule",["currentPage"]),{renderPageSelect:function(){return this.renderPage},renderPageNum:function(){return this.allPageNum},currentPageSelect:function(){return this.currentPage}}),created:function(){this.getData()}},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("RenderContent",{attrs:{"render-page-select":this.renderPageSelect,"page-num-select":this.renderPageNum,"current-page-select":this.currentPageSelect}})],1)},staticRenderFns:[]};var C=n("VU/8")(h,P,!1,function(e){n("72JX")},"data-v-9848c95a",null).exports,I={components:{RenderContent:v},data:function(){return{}},methods:{},computed:l()({},Object(d.c)("CollectModule",["renderFavoritePage","favoritePageNum"]),Object(d.d)("CollectModule",["currentPage"]),{renderPageSelect:function(){return this.renderFavoritePage},renderPageNum:function(){return this.favoritePageNum},currentPageSelect:function(){return this.currentPage}}),created:function(){}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("RenderContent",{attrs:{"render-page-select":this.renderPageSelect,"page-num-select":this.renderPageNum,"current-page-select":this.currentPageSelect}})],1)},staticRenderFns:[]};var N=n("VU/8")(I,_,!1,function(e){n("V8sm")},null,null).exports,b=n("63pp"),S={data:function(){return{myVideo:null}},methods:{getVideo:function(){this.myVideo=Object(b.a)("myVideo",{autoplay:!1,controls:!0,bigPlayButton:!0,sourceOrder:!0,textTrackDisplay:!1,posterImage:!1,errorDisplay:!1,flash:{hls:{withCredentials:!1}},html5:{hls:{withCredentials:!1}},hls:{withCredentials:!0},sources:[{type:"rtmp/mp4",src:"rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"},{withCredentials:!1,type:"application/x-mpegURL",src:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"}],controlBar:{timeDivider:!1,durationDisplay:!1,progressControl:!0,customControlSpacer:!0}})}},computed:l()({},Object(d.c)("ItemPlayModule",["setItem"])),created:function(){},mounted:function(){this.getVideo()},beforeDestroy:function(){},destroyed:function(){this.myVideo.dispose()}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"box"},[n("div",{staticClass:"top"},[n("video",{ref:"videoPlayer",staticClass:"video-js vjs-big-play-centered",staticStyle:{width:"100%",height:"auto"},attrs:{id:"myVideo"}})]),e._v(" "),n("div",{staticClass:"bottom"},[n("h1",{staticClass:"text"},[e._v(e._s(e.setItem.snippet.title))]),e._v(" "),n("p",{staticClass:"text"},[n("pre",[e._v(e._s(e.setItem.snippet.description))])])])])])},staticRenderFns:[]};var T=n("VU/8")(S,y,!1,function(e){n("NCV0")},"data-v-b6381b8e",null).exports;a.a.use(c.a);var k=new c.a({routes:[{path:"*",redirect:"helloworld"},{path:"/helloworld",name:"HelloWorld",component:C},{path:"/collect",name:"Collect",component:N},{path:"/itemplay/:id",name:"ItemPlay",component:T}]}),M=n("mtWM"),D=n.n(M),w=n("Rf8U"),x=n.n(w),A={namespaced:!0,state:{data:{},items:[],itemNumPerPage:12,nextPageToken:"",currentPage:1},actions:{getData:function(e){var t=e.commit,n=e.getters,a="https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyCn6tgkvpqZ6iP8z4kfetv2wjub9tmenSA";t("LOADING",!0,{root:!0}),D.a.get(a).then(function(e){t("DATA",e.data);var r=a+"&pageToken="+n.nextPageToken;D.a.get(r).then(function(e){t("CONCATDATA",e.data.items)}),t("LOADING",!1,{root:!0})})}},mutations:{DATA:function(e,t){e.data=t,e.items=t.items,e.nextPageToken=t.nextPageToken||""},CONCATDATA:function(e,t){e.items=e.items.concat(t)},CURRENTPAGE:function(e,t){e.currentPage=t}},getters:{data:function(e){return e.data},items:function(e){return e.items},nextPageToken:function(e){return e.nextPageToken},allPageNum:function(e){return Math.ceil(e.items.length/e.itemNumPerPage)},renderPage:function(e){return e.items.filter(function(t,n){return n>=(e.currentPage-1)*e.itemNumPerPage&&n<=e.currentPage*e.itemNumPerPage-1})}}},O=n("mvHQ"),R=n.n(O),E={namespaced:!0,state:{favoriteItems:[],currentPage:1,favoriteItemsId:JSON.parse(localStorage.getItem("collect"))||[]},actions:{},mutations:{FAVORITETOGGLE:function(e,t){t.event.stopPropagation(),e.favoriteItemsId.includes(t.id)?e.favoriteItemsId.splice(e.favoriteItemsId.indexOf(t.id),1):e.favoriteItemsId.push(t.id),localStorage.setItem("collect",R()(e.favoriteItemsId))},CURRENTPAGE:function(e,t){e.currentPage=t}},getters:{favoriteItems:function(e,t,n){return n.HomeModule.items.filter(function(t){return e.favoriteItemsId.includes(t.id)})},favoritePageNum:function(e,t,n){return Math.ceil(t.favoriteItems.length/n.HomeModule.itemNumPerPage)},renderFavoritePage:function(e,t,n){return t.favoriteItems.filter(function(t,a){return a>=(e.currentPage-1)*n.HomeModule.itemNumPerPage&&a<=e.currentPage*n.HomeModule.itemNumPerPage-1})}}},V={namespaced:!0,state:{setItem:JSON.parse(localStorage.getItem("saveItem"))||""},actions:{},mutations:{SETITEM:function(e,t){e.setItem=t,console.log(e.setItem),localStorage.setItem("saveItem",R()(e.setItem))}},getters:{setItem:function(e){return e.setItem}}};a.a.use(d.a),a.a.use(x.a,D.a);var G=new d.a.Store({state:{isLoading:!1},actions:{isLoading:function(e,t){(0,e.commit)("LOADING",t)}},mutations:{LOADING:function(e,t){e.isLoading=t}},getters:{isLoading:function(e){return e.isLoading}},modules:{HomeModule:A,CollectModule:E,ItemPlayModule:V}}),H=n("ZZvs"),L=n.n(H);n("SYh3"),n("g3Gj");a.a.config.productionTip=!1,a.a.use(d.a),a.a.use(x.a,D.a),a.a.component("Loading",L.a),a.a.filter("duration",function(e){var t,n=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,a=0,r=0,i=0;if(n.test(e)){var s=n.exec(e);s[1]&&(a=Number(s[1])),s[2]&&(r=Number(s[2])),s[3]&&(i=Number(s[3])),t=3600*a+60*r+i}if(t<86400){var o=new Date("01/01/2000 0:00");return o.setSeconds(t),function(e){var t=e.getHours(),n=e.getMinutes(),a=e.getSeconds(),r="";return t>0&&(r+=(t>9?t.toString():"0"+t.toString())+":"),r+=(n>9?n.toString():"0"+n.toString())+":",r+=a>9?a.toString():"0"+a.toString()}(o)}return null}),new a.a({el:"#app",router:k,components:{App:o},template:"<App/>",store:G})},SYh3:function(e,t){},UICe:function(e,t){},V8sm:function(e,t){},g3Gj:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2252d1c153c7b8f93b19.js.map