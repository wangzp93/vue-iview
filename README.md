### 动态路由
```angular2html
路由守卫beforeEach中，添加动态路由，并保存至vuex中
```
```angular2html
解析navList时，第一级nav，并用router.addRoute挂载在根路由"/"下
```
```angular2html
动态路由后next时，需使用replace: true避免白屏
```

### 刷新后vuex数据失效
```angular2html
页面生命周期beforeunload中，把vuex数据暂存至sessionStorage
```

### 全局主题
```angular2html
vue.config.js中配置css的lessOptions
```
