<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    window.addEventListener('beforeunload', ()=> {
      // 判断当前是否是登录页
      if (this.$route.name !== 'login') {
        // 非登录页，vuex数据暂存
        const menuData = this.$store.getters['menuModule/getMenuData']
        if (menuData.length > 0) {
          sessionStorage.setItem('menuData', JSON.stringify(menuData))
        }
      }
    })
  },
}
</script>

<style>

</style>
