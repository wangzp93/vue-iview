### 动态路由
```angular2html
1. 解析navList时，最终输出只有两级，第一级为nav，第二级为子菜单扁平化，并将原始navList保存至vuex
2. 在路由守卫beforeEach中，用router.addRoute挂载在根路由"/"下
3. 动态路由后next时，需使用replace: true避免白屏
```

### 刷新后vuex数据失效
```angular2html
页面生命周期beforeunload中，把vuex数据暂存至sessionStorage
```

### 退出登录注意项
```angular2html
除清除cookie外，还要清除sessionStorage和vuex中的navList，避免菜单永远不更新
```

### 全局主题
```angular2html
vue.config.js中配置css的lessOptions
```

