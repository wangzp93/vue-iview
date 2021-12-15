<template>
  <!-- logo -->
  <img src="@/assets/logo.png"
       class="logo"
       @click="toHome"
       alt="logo"
  />
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
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
  width: 200px;
  cursor: pointer;
}
</style>