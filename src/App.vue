<template>
  <router-view></router-view>
</template>

<script>
import navList from './config/menu'
import { navToRouter } from './utils/menu'
import router from './router'

export default {
  name: 'App',
  components: {},
  created() {
    const asyncRouter = navToRouter(navList)
    asyncRouter.forEach(item=> {
      router.addRoute('/', item)
    })
  }
}
</script>

<style>

</style>
