webpackJsonp([11],{UMUP:function(e,t){},Zg3A:function(e,t){},cpAg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("4YfN"),s=n.n(l),a=n("fUgm"),i={data:function(){return{}},computed:s()({},Object(a.d)(["collapse"]),Object(a.b)(["navmenu"])),methods:{}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-nav"},[n("h3",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[e._v("小U商城后台")])],1),e._v(" "),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"",router:"",collapse:e.collapse,"default-active":e.$route.path,"background-color":"#262a32","text-color":"rgb(204, 204, 204)"}},[n("el-menu-item",{attrs:{index:"/home"}},[n("i",{staticClass:"el-icon-setting"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),e._l(e.navmenu,function(t,l){return n("el-submenu",{key:l,attrs:{index:"top-"+l}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(t.title))])]),e._v(" "),e._l(t.children,function(t,l){return n("el-menu-item",{key:l,attrs:{index:t.url}},[e._v("\n        "+e._s(t.title)+"\n        ")])})],2)})],2)],1)},staticRenderFns:[]};var r=n("C7Lr")(i,o,!1,function(e){n("Zg3A")},"data-v-52f9af4b",null).exports,c={data:function(){return{}},computed:s()({},Object(a.d)(["collapse"]),Object(a.b)(["username"])),components:{Slide:r},methods:s()({},Object(a.c)(["TOGGLE","QUIT"]),{fullToggle:function(){this.$root.$emit("fullscreentoggle")}})},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("el-container",[n("el-aside",{class:e.collapse?"page-aside shou":"page-aside"},[n("Slide")],1),e._v(" "),n("el-container",[n("el-header",{staticClass:"page-header"},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[e.collapse?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.TOGGLE}},[n("i",{staticClass:"el-icon-s-unfold"})]):n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.TOGGLE}},[n("i",{staticClass:"el-icon-s-fold"})]),e._v("\n                         \n                      "),n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",[e._v(e._s(e.$route.meta.title))])],1),e._v("\n                         \n                      "),n("el-button",{attrs:{icon:"el-icon-back",circle:"",size:"mini"},on:{click:function(t){return e.$router.back()}}})],1),e._v(" "),n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                          "+e._s(e.username)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("span",{on:{click:e.fullToggle}},[n("i",{staticClass:"el-icon-full-screen"}),e._v(" 全屏操作")])]),e._v(" "),n("el-dropdown-item",[n("i",{staticClass:"el-icon-user"}),e._v(" 个人信息")]),e._v(" "),n("el-dropdown-item",[n("span",{on:{click:e.QUIT}},[n("i",{staticClass:"el-icon-switch-button"}),e._v(" 退出登录")])])],1)],1)],1),e._v(" "),n("el-main",{staticClass:"page-main"},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var d=n("C7Lr")(c,u,!1,function(e){n("UMUP")},null,null);t.default=d.exports}});
//# sourceMappingURL=11.b82cb731738cd4177a17.js.map