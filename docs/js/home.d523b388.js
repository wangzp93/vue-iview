(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"26c3":function(e,t,a){e.exports=a.p+"img/yanlingji-2.2056bf77.png"},"503c":function(e,t,a){},6511:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{staticClass:"video",attrs:{src:a("26c3"),alt:""}}),r("video",{staticClass:"video",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[r("source",{attrs:{src:"https://img-baofun.zhhainiao.com/fs/live/preview_video/65c507fbba6f35db58c557245913013a_preview.mp4"}})])])},o=[],s={name:"Home",data:function(){return{bgVideoList:["https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/f387a74f2c78fffcf0afa3291de9ece8_preview.mp4","https://wallpaperm-mp4.duba.com/live/preview_video/f0fc83a8e6da477b9d2bd53368aecb5e_preview.mp4","https://wallpaperm-mp4.duba.com/live/preview_video/65c507fbba6f35db58c557245913013a_preview.mp4","https://wallpaperm-mp4.duba.com/live/preview_video/e472b3bb886bbd8e493b649b53ba62dd_preview.mp4","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/566dcf7da99aa2ea8a87dd4cc0704404_preview.mp4"]}}},n=s,i=(a("ad3a"),a("2877")),c=Object(i["a"])(n,r,o,!1,null,"0ac274d0",null);t["default"]=c.exports},"942e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("页面不存在")]),a("Button",{attrs:{type:"primary"},on:{click:e.toHome}},[e._v("返回首页")])],1)},o=[],s={methods:{toHome:function(){this.$router.push({name:"/"})}}},n=s,i=a("2877"),c=Object(i["a"])(n,r,o,!1,null,null,null);t["default"]=c.exports},a8cb:function(e,t,a){},ad3a:function(e,t,a){"use strict";a("a8cb")},d7c1:function(e,t,a){"use strict";a("503c")},dd7b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"video-bg"},[r("img",{staticClass:"video",attrs:{src:a("fa44"),alt:""}}),r("video",{staticClass:"video",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[r("source",{attrs:{src:"https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/f387a74f2c78fffcf0afa3291de9ece8_preview.mp4"}})])]),r("div",{staticClass:"content"},[r("Form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1)],1),r("Button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.btnLoading},on:{click:e.login}},[e._v("登录")])],1)])},o=[],s=a("5530"),n=(a("d3b7"),a("ac1f"),a("5319"),a("a78e")),i=a.n(n),c=a("cae8"),p={name:"Login",data:function(){return{formData:{username:"zhongpeng.wang",password:"123456"},rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},btnLoading:!1}},methods:{login:function(){var e=this;this.$refs.form.validate((function(t){if(t){var a=Object(s["a"])({},e.formData);e.btnLoading=!0,e.$store.dispatch("userModule/login",a).then((function(e){var t=e.userInfo,a=e.menuData;return i.a.set("username",t.username,{expires:1}),a})).then((function(t){Object(c["a"])(e.$router,t),e.$router.replace({path:"/"})})).finally((function(){e.btnLoading=!1}))}}))}}},l=p,u=(a("d7c1"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"4d7e84b4",null);t["default"]=d.exports},fa44:function(e,t,a){e.exports=a.p+"img/yanlingji-1.3386766b.png"}}]);
//# sourceMappingURL=home.d523b388.js.map