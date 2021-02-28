module.exports = {
  lintOnSave: false,	//是否开启esLint
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://devwechat.hongsong.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
}