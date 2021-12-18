const path = require('path')

module.exports = {
  outputDir: 'docs',
  lintOnSave: false,	//是否开启esLint
  css: {  // 全局css
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: require(path.resolve(__dirname, './src/config/my-theme.js'))
        }
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://devwechat.hongsong.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      },
      '/video': {
        target: 'https://img-baofun.zhhainiao.com',
        changeOrigin: true,
        pathRewrite: {
          '^/video': ''    //代理的路径
        }
      },
    }
  }
}