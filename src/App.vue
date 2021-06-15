<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
  created() {
    window.addEventListener('beforeunload', ()=> {
      // 页面刷新前，vuex数据暂存
      const navList = this.$store.getters.navList
      if (navList.length > 0) {
        sessionStorage.setItem('navList', JSON.stringify(navList))
      }
    })
  },
}
</script>

<style>

</style>
