webpackJsonp([18],{"65Xj":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")({name:"App"},r,!1,function(e){t("zDW6")},null,null).exports,i=t("/ocq"),u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-menu",{staticStyle:{"min-width":"1300px"},attrs:{"default-active":e.currentPath,router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red"}},[e._l(e.navList,function(n,a){return t("el-menu-item",{key:a,attrs:{index:n.name}},[e._v("\n    "+e._s(n.navItem)+"\n  ")])}),e._v(" "),t("span",{staticStyle:{position:"absolute","padding-top":"20px",right:"43%","font-size":"20px","font-weight":"bold"}},[e._v("White Jotter - Your Mind Palace")]),e._v(" "),t("el-input",{staticStyle:{width:"300px",position:"absolute","margin-top":"12px",right:"18%"},attrs:{placeholder:"快速搜索...","prefix-icon":"el-icon-search",size:"medium"},model:{value:e.keywords,callback:function(n){e.keywords=n},expression:"keywords"}})],2)},staticRenderFns:[]};var l={name:"Home",components:{NavMenu:t("VU/8")({name:"NavMenu",data:function(){return{navList:[{name:"/index",navItem:"首页"},{name:"/jotter",navItem:"笔记本"},{name:"/library",navItem:"图书馆"},{name:"/admin/dashboard",navItem:"管理中心"}],keywords:""}},computed:{currentPath:function(){var e=this.$route.path.indexOf("/",1);return-1!==e?this.$route.path.substring(0,e):this.$route.path}}},u,!1,function(e){t("bNlQ")},"data-v-22486961",null).exports}},c={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("nav-menu",{staticClass:"nav-menu"}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var m=t("VU/8")(l,c,!1,function(e){t("65Xj")},"data-v-2d1a9760",null).exports;a.default.use(i.a);var s=new i.a({routes:[{path:"/",name:"Default",redirect:"/home",component:m},{path:"/home",name:"Home",component:m,redirect:"/index",children:[{path:"/index",name:"AppIndex",component:function(){return t.e(3).then(t.bind(null,"aWud"))}},{path:"/jotter",name:"Jotter",component:function(){return t.e(10).then(t.bind(null,"sVKj"))}},{path:"/jotter/article",name:"Article",component:function(){return t.e(12).then(t.bind(null,"Rmfi"))}},{path:"/library",name:"LibraryIndex",component:function(){return t.e(4).then(t.bind(null,"BLno"))}}]},{path:"/login",name:"Login",component:function(){return t.e(13).then(t.bind(null,"xJsL"))}},{path:"/register",name:"Register",component:function(){return t.e(15).then(t.bind(null,"dIqY"))}},{path:"/admin",name:"Admin",component:function(){return t.e(5).then(t.bind(null,"akyf"))},meta:{requireAuth:!0},children:[{path:"/admin/dashboard",name:"Dashboard",component:function(){return t.e(2).then(t.bind(null,"R/lB"))},meta:{requireAuth:!0}},{path:"/admin/user/profile",name:"Profile",component:function(){return t.e(7).then(t.bind(null,"0U9i"))},meta:{requireAuth:!0}},{path:"/admin/user/role",name:"Role",component:function(){return t.e(6).then(t.bind(null,"pmqU"))},meta:{requireAuth:!0}},{path:"/admin/content/book",name:"BookManagement",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"8zNu"))},meta:{requireAuth:!0}},{path:"/admin/content/banner",name:"BannerManagement",component:function(){return t.e(11).then(t.bind(null,"VcZY"))},meta:{requireAuth:!0}},{path:"/admin/content/article",name:"ArticleManagement",component:function(){return t.e(14).then(t.bind(null,"yA7P"))},meta:{requireAuth:!0}},{path:"/admin/content/editor",name:"Editor",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"DNt1"))},meta:{requireAuth:!0}}]},{path:"*",component:function(){return t.e(9).then(t.bind(null,"hfsx"))}}]}),d=t("mvHQ"),h=t.n(d),p=t("NYxO");a.default.use(p.a);var f=new p.a.Store({state:{user:{username:null==localStorage.getItem("user")?"":JSON.parse(localStorage.getItem("user")).username,token:null==localStorage.getItem("user")?"":JSON.parse(localStorage.getItem("user")).token},adminMenus:[]},mutations:{login:function(e,n){e.user=n,localStorage.setItem("user",h()(n))},logout:function(e){e.user={username:"",token:""},e.adminMenus=[],localStorage.clear()},initAdminMenu:function(e,n){e.adminMenus=n}}}),v=t("OS1Z"),b=t.n(v),g=(t("pw1w"),t("tcAE"),t("zL8q")),x=t.n(g),A=(t("tvR6"),t("mtWM"));A.defaults.baseURL="/api";A.interceptors.request.use(function(e){return function(e){var n=f.state.user.token;return n&&(e.headers.Authorization="Bearer "+n),e}(e)}),a.default.prototype.$axios=A,a.default.config.productionTip=!1,a.default.use(b.a),a.default.use(x.a),s.beforeEach(function(e,n,t){f.state.user&&f.state.user.token&&e.path.startsWith("/admin")&&w(s,f,e),e.meta.requireAuth?f.state.user.token?t():s.replace("/login?"+e.fullPath):t()});var w=function(e,n,a){n.state.adminMenus.length>0||A.get("/menu").then(function(e){if(e&&200===e.status){var a=function e(n){var a=[];return n.forEach(function(n){n.children&&(n.children=e(n.children));var r={path:n.path,component:function(e){Promise.all([t.e(0),t.e(1)]).then(function(){var a=[t("tqLV")("./"+n.component+".vue")];e.apply(null,a)}.bind(this)).catch(t.oe)},name:n.name,nameZh:n.nameZh,iconCls:n.iconCls,meta:{requireAuth:!0},children:n.children};a.push(r)}),a}(e.data.result);n.commit("initAdminMenu",a)}})};new a.default({el:"#app",router:s,store:f,components:{App:o},template:"<App/>"})},bNlQ:function(e,n){},pw1w:function(e,n){},tvR6:function(e,n){},zDW6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.547bb90d85371236a31f.js.map