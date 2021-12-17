<template>
  <!-- logo -->
  <img src="@/assets/bg-img/welcome.gif"
       class="logo"
       @click="toHome"
       alt="logo"
  />
</template>

<script>
export default {
  name: 'HeaderLogo',
  methods: {
    /**
     * 回到首页
     */
    toHome() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
/* logo */
.logo {
  width: 240px;
  cursor: pointer;
}
</style>