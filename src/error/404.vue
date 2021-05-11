<template>
  <div>
    <h1>页面不存在</h1>
    <Button type="primary" @click="toHome">返回首页</Button>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
</style>
